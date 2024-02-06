import { createClient } from '@/app/_lib/utils/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  try {
    const { data: artworks, error } = await supabase
      .from('artworks')
      .select()
      .order('artwork_date', { ascending: false });

    return NextResponse.json({ artworks, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
