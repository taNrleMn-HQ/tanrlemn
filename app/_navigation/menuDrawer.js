'use client';

// hooks
import { useRef } from 'react';
import { usePathname } from 'next/navigation';

// chakra-ui
import {
  Link,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Heading,
  Box,
  VStack,
} from '@chakra-ui/react';
import { Menu } from 'lucide-react';

// local components
import LinkedLogo from '../_components/branding/linkedLogo';

export default function MenuDrawer() {
  const btnRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Menu
          ref={btnRef}
          onClick={onOpen}
          color={'#fff'}
          cursor={'pointer'}
        />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        autoFocus={false}>
        <DrawerOverlay />
        <DrawerContent
          w={'100%'}
          maxH={{ base: '100vh' }}
          color={'white'}
          background={'purple.900'}>
          <DrawerCloseButton p={'2rem'} />
          <DrawerHeader>
            <LinkedLogo color='purple.200' />
          </DrawerHeader>

          <DrawerBody
            p={{ base: '2rem', md: '2rem 3rem' }}
            w={'100%'}>
            <VStack
              h={'100%'}
              align={'flex-start'}
              justify={'space-between'}>
              <Box mb={'3rem'}>
                <Heading
                  color={'purple.50'}
                  size={'md'}
                  mb={'1rem'}>
                  There&apos;s a hole in your forhead. There&apos;s a hole in
                  your heart.
                </Heading>
                <Link href='/auth/login'>
                  <Button colorScheme={'gray'}>Get started</Button>
                </Link>
              </Box>

              <Link
                mb={'0.5rem'}
                fontSize={'0.85rem'}
                href='/privacy'>
                Privacy Policy
              </Link>
              <Link
                fontSize={'0.85rem'}
                href='/terms'>
                Terms of Service
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
