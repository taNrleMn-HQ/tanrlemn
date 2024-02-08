// images
const images = ['https://i.imgur.com/BFWf7kuh.jpg'];

import { Suspense } from 'react';
// local components
import AuthUI from './auth';
import { Container, Text } from '@chakra-ui/react';

// metadata
export const metadata = {
  title: 'Sign In',
  description: 'Sign in or create an account – taNrleMn',
  openGraph: {
    title: 'Sign In',
    images: images,
    description: 'Sign in or create an account – taNrleMn',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <Container>
          <Text>Loading...</Text>
        </Container>
      }>
      <AuthUI />
    </Suspense>
  );
}
