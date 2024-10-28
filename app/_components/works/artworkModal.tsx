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
  const mainImage = artwork.main_image;
  const date = new Date(artwork.artwork_date);

  return (
    <Modal
      size={{ base: 'xs', md: '5xl' }}
      isCentered
      allowPinchZoom
      trapFocus={false}
      motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={{ base: 0 }}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            p={{ base: '3rem 0.75rem 1rem 0.75rem', md: '2rem' }}
            gap={{ base: '1rem', md: '2rem' }}
          >
            <Image
              src={mainImage}
              alt={artwork.name}
              h={{ base: 'auto', md: '85vh' }}
              w={'auto'}
            />
            <Box w={'200px'} mt={{ base: '0', md: '3rem' }}>
              <Heading mb={'0.1rem'} size={'lg'}>
                {artwork.name}
              </Heading>
              <Text
                mb={'0.3rem'}
                fontSize={'0.85rem'}
                fontWeight={500}
                opacity={0.85}
              >
                {date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
              <Text>{artwork.description}</Text>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
