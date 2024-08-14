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

    let session;
    try {
      session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${origin}?success=true`,
        cancel_url: `${origin}?canceled=true`,
        automatic_tax: { enabled: true },
      });
    } catch (error) {
      session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${origin}?success=true`,
        cancel_url: `${origin}?canceled=true`,
        automatic_tax: { enabled: false },
      });
    } finally {
      const url = session.url;
      return NextResponse.json({ url });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error({ message: error.message });
  }
}
