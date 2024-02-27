'use client';

// chakra-ui
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';

// local components
import ArtHero from './_components/sections/artHero';
import MusicHero from './_components/sections/musicHero';
import TaNrLeMnSection from './_components/sections/tanrlemn';
import FakePeteSection from './_components/sections/fakePete';
import AboutSection from './_components/sections/aboutSection';

export default function Home() {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <ArtHero />
      <Box
        borderTop={'1px solid'}
        borderBottom={'1px solid'}
        m={{ base: '1rem', md: '3rem' }}
        p={'2rem 0'}
        borderColor={borderColor}>
        <Container maxW={'800px'}>
          <Heading
            size={'lg'}
            textAlign={'center'}>
            Exploring the unity of shared pain and the transformative power of
            connection.
          </Heading>
        </Container>
      </Box>
      <TaNrLeMnSection />
      <FakePeteSection />
      <AboutSection />
    </Box>
  );
}
