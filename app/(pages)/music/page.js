// images
const images = [
  'https://i.imgur.com/4JF82yZh.jpg',
  'https://i.imgur.com/vum03cYh.gif',
];

// local components
import Music from './music';

// metadata
export const metadata = {
  title: 'Music',
  description:
    'Listen to music by Fake Pete, including original compositions and collaborations.',
  openGraph: {
    title: 'Music',
    images: images,
    description:
      'Listen to music by Fake Pete, including original compositions and collaborations.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Music />;
}
