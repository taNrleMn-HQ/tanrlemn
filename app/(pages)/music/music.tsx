'use client';

// chakra-ui
import { Box, Container } from '@chakra-ui/react';

export default function About() {
  return (
    <Box p={{ base: '3rem 0', md: '6rem 3rem' }} fontSize={'1.1rem'}>
      <Container
        maxW={'750px'}
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}
      >
        <Box h={'450px'} mb={'2rem'}>
          <iframe
            src='https://open.spotify.com/embed/album/2HxOuLrTAvE2woAgj4uVlN?utm_source=generator'
            width='100%'
            height='100%'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </Box>
        <Box h={'450px'} mb={'2rem'}>
          <iframe
            src='https://open.spotify.com/embed/album/1OAxxhFvQsoSlkWnSILllF?utm_source=generator'
            width='100%'
            height='100%'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </Box>
        <Box h={'450px'} mb={'2rem'}>
          <iframe
            src='https://open.spotify.com/embed/album/4KNOSPgZSHxyC2N5zINBfW?utm_source=generator'
            width='100%'
            height='100%'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
}
