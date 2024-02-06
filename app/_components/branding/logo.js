'use client';

// images
import circleLogo from '@/app/_assets/dark-circle.svg';

// chakra-ui
import { Box, Image } from '@chakra-ui/react';

export default function Logo({}) {
  return (
    <Box
      w={'2rem'}
      h={'auto'}>
      <Image
        alt={'taNrleMn logo'}
        src={circleLogo.src}
      />
    </Box>
  );
}
