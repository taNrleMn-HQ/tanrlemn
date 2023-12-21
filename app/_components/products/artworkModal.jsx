'use client';

// components
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
  Heading,
  Box,
  Text,
} from '@chakra-ui/react';

export default function ArtworkModal({ artwork, isOpen, onClose }) {
  const mainImage = artwork.image_url;

  return (
    <Modal
      size={{ base: 'xs', md: '4xl' }}
      isCentered
      allowPinchZoom
      trapFocus={false}
      motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={{ base: 0 }}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            p={{ base: '3rem 0.75rem 1rem 0.75rem', md: '2rem' }}
            gap={{ base: '1rem', md: '2rem' }}>
            <Image
              src={mainImage}
              alt={artwork.title}
              h={{ base: 'auto', md: '85vh' }}
              w={'auto'}
            />
            <Box
              w={'200px'}
              mt={{ base: '0', md: '3rem' }}>
              <Heading
                mb={'0.5rem'}
                size={'lg'}>
                {artwork.title}
              </Heading>
              <Text>{artwork.description}</Text>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
