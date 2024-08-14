'use client';

// components
import {
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
} from '@chakra-ui/react';
import { FilloutStandardEmbed } from '@fillout/react';

export default function CommissionRequest({ isOpen, onClose }) {
  return (
    <Modal
      size={{ base: 'full' }}
      motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box p={'1rem'} h={'90vh'} mt={{ base: '3rem', md: '2rem' }}>
            <FilloutStandardEmbed filloutId='8EByWJi5mbus' />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
