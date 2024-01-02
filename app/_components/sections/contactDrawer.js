'use client';

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
  Text,
  Flex,
  VStack,
  Heading,
} from '@chakra-ui/react';

// local components
import Logo from '../brandElements/logo';
import EmailIcon from '../icons/emailIcon';

export default function ContactDrawer({ isOpen, onClose }) {
  return (
    <Drawer
      size={'xs'}
      isOpen={isOpen}
      placement='bottom'
      onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody
          w={'100%'}
          mt={'2rem'}>
          <VStack
            align={'flex-start'}
            w={'100%'}>
            <Heading size={'lg'}>Contact taNrleMn</Heading>
            <Heading
              size={'sm'}
              fontWeight={400}>
              taNrleMn is currently open to new opportunities. If you&apos;d
              like to get in touch, please send an email.
            </Heading>
            <Link
              color={'var(--orange)'}
              href={'mailto:support@tanrlemn.xyz'}
              target='_blank'>
              <Flex
                align={'center'}
                w={'100%'}>
                <Text
                  fontSize={'1rem'}
                  fontWeight={500}>
                  support@tanrlemn.xyz
                </Text>
              </Flex>
            </Link>
          </VStack>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
