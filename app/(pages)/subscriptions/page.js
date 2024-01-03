// images
const images = [
  'https://i.imgur.com/CVuS9hmh.jpg',
  'https://i.imgur.com/SfRhvWSh.jpg',
  'https://i.imgur.com/EKiZuD2h.jpg',
  'https://i.imgur.com/jRDmNhTh.jpg',
];

// local components
import Subscriptions from './subscriptions';

// metadata
export const metadata = {
  title: 'Subscriptions',
  description: "Subscribe to taNrleMn's premium art subscriptions!",
  openGraph: {
    title: 'Subscriptions',
    images: images,
    description: "Subscribe to taNrleMn's premium art subscriptions!",
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Subscriptions />;
}
