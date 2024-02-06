// images
const images = ['https://i.imgur.com/BFWf7kuh.jpg'];

// local components
import Dashboard from './dashboard';

// metadata
export const metadata = {
  title: 'Account',
  description: 'Manage your account – taNrleMn',
  openGraph: {
    title: 'Account',
    images: images,
    description: 'Manage your account – taNrleMn',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Dashboard />;
}
