'use client';

// chakra-ui
import { Image, Box, VStack, useDisclosure } from '@chakra-ui/react';

// local components
import ArtworkModal from './artworkModal';

export default function ArtworkCard({ artwork }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ArtworkModal artwork={artwork} isOpen={isOpen} onClose={onClose} />
      <VStack cursor={'pointer'} position={'relative'} onClick={onOpen}>
        <Box
          height={'100%'}
          width={'100%'}
          position={'relative'}
          overflow={'hidden'}
        >
          <Image
            objectFit={'cover'}
            objectPosition={'top'}
            src={artwork.main_image}
            alt={`${artwork.name} image`}
          />
        </Box>
      </VStack>
    </>
  );
}
