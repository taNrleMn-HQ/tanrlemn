import { createClient } from '@/app/_lib/utils/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const slug = params.slug;

  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug);

    const product = products[0];

    return NextResponse.json({ product, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
