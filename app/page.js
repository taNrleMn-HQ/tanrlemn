'use client';

// chakra-ui
import {
  Box,
  Container,
  Heading,
  Tag,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

// local components
import ArtHero from './_components/sections/artHero';

export default function Home() {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <ArtHero />
      <Box
        borderTop={'1px solid'}
        m={{ base: '1rem', md: '3rem' }}
        p={'2rem 0'}
        borderColor={borderColor}
      >
        <Container>
          <VStack>
            <Heading size={'lg'} textAlign={'center'}>
              I will paint your face if you want
            </Heading>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
