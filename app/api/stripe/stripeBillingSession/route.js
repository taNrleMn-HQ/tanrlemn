import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const MODE = process.env.NEXT_PUBLIC_MODE;

export async function POST(req) {
  try {
    const { origin, port } = new URL(req.url);

    const removePort = port !== '' ? origin.replace(`:${port}`, '') : origin;

    const callbackUrl = MODE === 'production' ? removePort : origin;

    const request = await req.json();

    const { email } = request;

    const customerId = await getCustomerId(email);

    let session;
    try {
      session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${callbackUrl}/dashboard`,
      });
    } catch (error) {
      if (error.code === 'resource_missing' && email) {
        // Handle "No such customer" by creating a new customer
        session = {
          url: false,
        };
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
    return NextResponse.error(error);
  }
}

async function getCustomerId(email) {
  const supabaseCustomerId = await getSupabaseCustomerId();

  if (supabaseCustomerId !== null) {
    return supabaseCustomerId;
  }

  const customer = await stripe.customers.list({
    email: email,
    limit: 1,
  });

  const customerExists = customer.data.length > 0;

  if (customerExists) {
    const customerId = customer.data[0].id;
    await addCustomerIdToSupabase(customerId);
    return customerId;
  }

  const newCustomer = await stripe.customers.create({
    email: email,
  });

  await addCustomerIdToSupabase(newCustomer.id);
  return newCustomer.id;
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
    return NextResponse.redirect('/');
  }

  const { data, error } = await supabase.from('profiles').select();

  const profile = data[0];
  const stripe_customer_id = profile.stripe_customer_id;

  return stripe_customer_id;
}

async function addCustomerIdToSupabase(customerId) {
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
    return NextResponse.redirect('/');
  }

  const { data, error } = await supabase.from('profiles').select();

  const profile = data[0];
  const stripe_customer_id = profile.stripe_customer_id;

  if (stripe_customer_id === null || stripe_customer_id !== customerId) {
    const { data, error } = await supabase
      .from('profiles')
      .update({ stripe_customer_id: customerId })
      .eq('id', profile.id)
      .select();

    return data;
  }

  return stripe_customer_id;
}
