// images
const images = [
  'https://i.imgur.com/CljkHnsh.jpg',
  'https://i.imgur.com/RAF1b2Ph.jpg',
  'https://i.imgur.com/drgPiJyh.jpg',
  'https://i.imgur.com/8gOfT0fh.jpg',
];

// local components
import Commissions from './commissions';

// metadata
export const metadata = {
  title: 'Commissions',
  description: 'Commission a piece of art from taNrleMn',
  openGraph: {
    title: 'Commissions',
    images: images,
    description: 'Commission a piece of art from taNrleMn',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Commissions />;
}
