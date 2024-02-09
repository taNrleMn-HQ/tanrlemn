import { createClient } from '@/app/_lib/utils/supabase/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const request = await req.json();
    const { origin, cart } = request;

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
      if (email === null || email === '' || stripe_customer_id === null) {
        throw new Error('No email');
      }

      session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer: stripe_customer_id ?? undefined,
        customer_email: email,
        success_url: `${origin}?success=true`,
        cancel_url: `${origin}?canceled=true`,
        automatic_tax: { enabled: true },
      });
    } catch (error) {
      if (error.code === 'resource_missing' && email) {
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
        session = await stripe.checkout.sessions.create({
          line_items,
          mode: 'payment',
          success_url: `${origin}?success=true`,
          cancel_url: `${origin}?canceled=true`,
          automatic_tax: { enabled: false },
        });
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

  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    return { stripe_customer_id: null, email: null };
  }

  const { data } = await supabase.from('profiles').select();

  const profile = data[0];
  const stripe_customer_id = profile.stripe_customer_id;
  const email = profile.email;

  return { stripe_customer_id, email };
}
