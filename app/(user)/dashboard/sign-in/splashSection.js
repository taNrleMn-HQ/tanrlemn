'use client';

// images
const whaleriderSrc = 'https://i.imgur.com/fNISTWS.jpg';
const ownerSrc = 'https://i.imgur.com/v3TtoGI.jpg';

import HeroImage from '@/app/_components/images/heroImage';
// chakra-ui
import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Image,
  Skeleton,
} from '@chakra-ui/react';

export default function AuthSplashSection() {
  return (
    <Box
      flexGrow={1}
      background={'var(--lightBlue)'}
      minH={'100vh'}>
      <Flex
        justify={'center'}
        p={'2rem'}
        align={'center'}
        minH={'100vh'}>
        <Flex
          align={'center'}
          h={'100%'}>
          <Box
            mr={'1rem'}
            h={{ base: '100%', md: '22rem' }}
            w={{ base: '100%', md: '17rem' }}>
            <HeroImage
              src={ownerSrc}
              alt='Owner painting'
              mr={'1rem'}
            />
          </Box>
          <Box
            h={{ base: '100%', md: '22rem' }}
            w={{ base: '100%', md: '17rem' }}>
            <HeroImage
              src={whaleriderSrc}
              alt='Whalerider painting'
              mr={'0'}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
