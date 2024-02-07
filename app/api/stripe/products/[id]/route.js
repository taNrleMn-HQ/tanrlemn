import { NextResponse } from 'next/server';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request, { params }) {
  const id = params.id;

  try {
    const product = await stripe.products.retrieve(id);

    return NextResponse.json(price);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
