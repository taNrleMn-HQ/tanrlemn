// images
const images = ['https://i.imgur.com/tnsRDQ6h.jpg'];

// local components
import Shop from './shop';

// metadata
export const metadata = {
  title: 'Shop',
  description: 'The Official Shop of taNrleMn',
  openGraph: {
    title: 'Shop',
    images: images,
    description: 'The Official Shop of taNrleMn',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Shop />;
}
