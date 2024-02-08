'use client';

// components
import {
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { FilloutStandardEmbed } from '@fillout/react';

export default function CommissionRequest({ isOpen, onClose }) {
  return (
    <Modal
      size={{ base: 'full' }}
      motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}>
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          p={'0'}
          maxH={'100vh'}
          mt={'2rem'}>
          <FilloutStandardEmbed
            dynamicResize
            filloutId='8xEXWBSvJbus'
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
