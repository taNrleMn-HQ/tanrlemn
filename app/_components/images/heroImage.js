'use client';

// chakra-ui
import { Flex, Image } from '@chakra-ui/react';

export default function HeroImage({ mr, alt, ...props }) {
  return (
    <Flex
      outline={'1px solid '}
      outlineColor={'orange.300'}
      outlineOffset={'0.25rem'}
      alignItems={'center'}
      overflow={'hidden'}
      mr={mr}
      borderRadius={'9px'}>
      <Image
        alt={alt}
        objectFit={'cover'}
        {...props}
      />
    </Flex>
  );
}
