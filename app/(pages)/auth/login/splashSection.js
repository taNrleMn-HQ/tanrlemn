'use client';

// images
const images = [
  'https://i.imgur.com/RAF1b2Ph.jpg',
  'https://i.imgur.com/G9Un4Syh.jpg',
  'https://i.imgur.com/lfKDiOmh.jpg',
  'https://i.imgur.com/drgPiJyh.jpg',
  'https://i.imgur.com/CVuS9hmh.jpg',
  'https://i.imgur.com/v3TtoGIh.jpg',
  'https://i.imgur.com/jRDmNhTh.jpg',
  'https://i.imgur.com/8gOfT0fh.jpg',
];

// chakra-ui
import { AspectRatio, Box } from '@chakra-ui/react';

const randomIndex = Math.floor(Math.random() * images.length);

export default function AuthSplashSection() {
  return (
    <AspectRatio
      overflow={'hidden'}
      ratio={1}
      w={{ base: '100%', md: '50%' }}>
      <Box
        flexGrow={1}
        position={'relative'}
        backgroundImage={`url(${images[randomIndex]})`}
        backgroundPosition={{ base: '50% 30%' }}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
      />
    </AspectRatio>
  );
}
