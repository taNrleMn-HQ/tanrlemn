// images
const images = [
  'https://i.imgur.com/CVuS9hmh.jpg',
  'https://i.imgur.com/SfRhvWSh.jpg',
  'https://i.imgur.com/EKiZuD2h.jpg',
  'https://i.imgur.com/jRDmNhTh.jpg',
];

// local components
import Gallery from './gallery';

// metadata
export const metadata = {
  title: 'Gallery',
  description: "View taNrleMn's artworks",
  openGraph: {
    title: 'Gallery',
    images: images,
    description: "View taNrleMn's artworks",
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Gallery />;
}
