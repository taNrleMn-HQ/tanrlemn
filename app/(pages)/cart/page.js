// images
const images = ['https://i.imgur.com/tnsRDQ6h.jpg'];

import { Suspense } from 'react';
// local components
import Cart from './cart';

// metadata
export const metadata = {
  title: 'Cart',
  description: 'View your cart and checkout.',
  openGraph: {
    title: 'Cart',
    images: images,
    description: 'View your cart and checkout.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return (
    <Suspense
      fallback={<div style={{ padding: '3rem' }}>Loading your cart...</div>}>
      <Cart />
    </Suspense>
  );
}
