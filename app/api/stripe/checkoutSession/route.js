import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const MODE = process.env.NEXT_PUBLIC_MODE;

export async function POST(req) {
  try {
    const request = await req.json();
    const { origin, cart } = request;

    // Simplify line item creation
    const line_items = cart.map((item) => {
      const priceId = item.price_id;

      return {
        price: priceId,
        quantity: item.options.qty,
      };
    });

    const { stripe_customer_id, email } = await getSupabaseCustomerId();

    let session;
    try {
      session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer: stripe_customer_id ?? undefined, // Use customer ID if available
        customer_email: stripe_customer_id ? undefined : email, // Use email if customer ID is not available
        success_url: `${origin}?success=true`,
        cancel_url: `${origin}?canceled=true`,
        automatic_tax: { enabled: true },
      });
    } catch (error) {
      if (error.code === 'resource_missing' && email) {
        // Handle "No such customer" by creating a new customer
        const newCustomer = await stripe.customers.create({ email });
        session = await stripe.checkout.sessions.create({
          line_items,
          mode: 'payment',
          customer: newCustomer.id,
          success_url: `${origin}?success=true`,
          cancel_url: `${origin}?canceled=true`,
          automatic_tax: { enabled: false },
        });
      } else {
        // Rethrow the error if it's not a "No such customer" case
        throw error;
      }
    } finally {
      const url = session.url;
      return NextResponse.json({ url });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error({ message: error.message });
  }
}

async function getSupabaseCustomerId() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.set({ name, value: '', ...options });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    return { stripe_customer_id: null, email: null };
  }

  const { data, error } = await supabase.from('profiles').select();

  const profile = data[0];
  const stripe_customer_id = profile.stripe_customer_id;
  const email = profile.email;

  return { stripe_customer_id, email };
}
