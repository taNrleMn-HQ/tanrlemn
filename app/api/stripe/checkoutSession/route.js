import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const MODE = process.env.MODE;

export async function POST(req) {
  try {
    const request = await req.json();

    const { origin, cart } = request;

    const line_items = [];

    cart.map((item) => {
      const priceId = () => {
        let id;
        if (MODE === 'development' || MODE === 'staging') {
          id = item.on_sale
            ? item.sale_stripe_price_id.dev
            : item.stripe_price_id.dev;
        } else {
          id = item.on_sale
            ? item.sale_stripe_price_id.live
            : item.stripe_price_id.live;
        }

        return id;
      };
      const product = {
        price: priceId(),
        quantity: item.options.qty,
      };
      line_items.push(product);
    });

    const { stripe_customer_id, email } = await getSupabaseCustomerId();

    const session =
      stripe_customer_id !== null
        ? await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            customer: stripe_customer_id,
            success_url: `${origin}?success=true`,
            cancel_url: `${origin}?canceled=true`,
            automatic_tax: { enabled: true },
          })
        : email !== null
        ? await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            customer_email: email,
            success_url: `${origin}?success=true`,
            cancel_url: `${origin}?canceled=true`,
            automatic_tax: { enabled: true },
          })
        : await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${origin}?success=true`,
            cancel_url: `${origin}?canceled=true`,
            automatic_tax: { enabled: true },
          });

    const url = await session.url;

    return NextResponse.json(url);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
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
