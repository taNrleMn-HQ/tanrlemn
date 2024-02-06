import { createClient } from '@/app/_lib/utils/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  try {
    const { data: collections, error } = await supabase
      .from('collections')
      .select();

    return NextResponse.json({ collections, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
