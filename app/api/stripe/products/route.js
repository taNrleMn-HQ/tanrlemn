import { NextResponse } from 'next/server';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  try {
    const products = await stripe.products.list({ active: true });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
