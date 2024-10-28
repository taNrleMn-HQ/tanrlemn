// images
const images = [
  'https://i.imgur.com/CVuS9hmh.jpg',
  'https://i.imgur.com/SfRhvWSh.jpg',
  'https://i.imgur.com/EKiZuD2h.jpg',
  'https://i.imgur.com/jRDmNhTh.jpg',
];

// local components
import Contact from './contact';

// metadata
export const metadata = {
  title: 'Contact',
  description: 'Get in touch with us.',
  openGraph: {
    title: 'Contact',
    images: images,
    description: 'Get in touch with us.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Contact />;
}
