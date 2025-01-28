// images
const images = ['https://i.imgur.com/BFWf7kuh.jpg'];

// local components
import About from './about';

// metadata
export const metadata = {
  title: 'About',
  description: 'Learn about taNrleMn – The Artist',
  openGraph: {
    title: 'About',
    images: images,
    description: 'Learn about taNrleMn – The Artist',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <About />;
}
