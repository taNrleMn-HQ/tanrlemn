// images
const images = [
  'https://res.cloudinary.com/dvqazhd4s/image/upload/v1738092057/IMG_2455_hdblk9.jpg',
];

// local components
import Music from './music';

// metadata
export const metadata = {
  title: 'Music',
  description: "Learn about taNrleMn's music",
  openGraph: {
    title: 'Music',
    images: images,
    description: "Learn about taNrleMn's music",
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Music />;
}
