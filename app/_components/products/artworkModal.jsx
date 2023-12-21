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
      size={'4xl'}
      isCentered
      allowPinchZoom
      trapFocus={false}
      motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            p={'2rem'}
            maxW={'fit-content'}
            gap={'2rem'}>
            <Image
              src={mainImage}
              alt={artwork.title}
              h={'85vh'}
              w={'auto'}
            />
            <Box
              w={'200px'}
              mt={'3rem'}>
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
