'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

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
  Stat,
  Box,
  StatNumber,
  Divider,
  VStack,
} from '@chakra-ui/react';

export default function ToCartModal({
  product,
  isOpen,
  onClose,
  numCartItems,
}) {
  const { setLoading } = useContext(LoadingContext);
  const router = useRouter();
  const mainImage = product.small_thumbnail;

  return (
    <Modal
      size={{ base: 'xs', md: 'xl' }}
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
              alt={product.title}
              width={{ base: '70%', md: 150 }}
              height={'auto'}
            />
            <Box
              w={'100%'}
              pt={'1rem'}>
              <Heading size={'lg'}>
                <Highlight
                  query={product.title}
                  styles={{
                    color: 'var(--darkBlue)',
                  }}>
                  {product.title}
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
              setLoading(true);
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
