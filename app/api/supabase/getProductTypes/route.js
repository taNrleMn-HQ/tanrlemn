import { createClient } from '@/app/_lib/utils/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  try {
    const { data: product_types, error } = await supabase
      .from('product_types')
      .select();

    return NextResponse.json({ product_types, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
