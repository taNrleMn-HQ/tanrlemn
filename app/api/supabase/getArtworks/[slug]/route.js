import { createClient } from '@/app/_lib/utils/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const slug = params.slug;

  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  try {
    const { data: artworks, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('slug', slug);

    const artwork = artworks[0];

    return NextResponse.json({ artwork, error });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
