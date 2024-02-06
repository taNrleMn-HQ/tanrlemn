// images
const images = [
  'https://i.imgur.com/CVuS9hmh.jpg',
  'https://i.imgur.com/SfRhvWSh.jpg',
  'https://i.imgur.com/EKiZuD2h.jpg',
  'https://i.imgur.com/jRDmNhTh.jpg',
];

// local components
import Support from './support';

// metadata
export const metadata = {
  title: 'Support',
  description: 'Get help with your account, orders, and more.',
  openGraph: {
    title: 'Support',
    images: images,
    description: 'Get help with your account, orders, and more.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Support />;
}
