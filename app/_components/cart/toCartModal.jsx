'use client';

// hooks
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

// components
import {
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Heading,
  Highlight,
  Box,
} from '@chakra-ui/react';

export default function ToCartModal({ product, isOpen, onClose }) {
  const router = useRouter();
  const mainImage = product.main_image;

  return (
    <Modal
      size={{ base: 'xs', md: '2xl' }}
      motionPreset='slideInBottom'
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Added to bag</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={'2rem'}>
          <Flex
            gap={{ base: '0.5rem', md: '2rem' }}
            direction={{ base: 'column', md: 'row' }}>
            <Image
              src={mainImage}
              alt={product.name}
              width={{ base: '70%', md: 150 }}
              height={'auto'}
            />
            <Box pt={'1rem'}>
              <Heading
                size={'lg'}
                display={'inline'}>
                <Highlight
                  display={'inline'}
                  query={product.name}
                  styles={{
                    color: 'var(--darkBlue)',
                    whiteSpace: 'pre-wrap',
                  }}>
                  {product.name}
                </Highlight>{' '}
                has been added to your bag.
              </Heading>
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => {
              // setLoading(true);
              router.push('/cart');
            }}>
            View Bag
          </Button>
          <Button
            variant='ghost'
            onClick={onClose}>
            Continue Shopping
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
