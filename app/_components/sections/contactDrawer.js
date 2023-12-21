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
            <Heading size={'lg'}>Contact Me</Heading>
            <Heading
              size={'sm'}
              fontWeight={400}>
              I&apos;m currently open to new opportunities. If you&apos;d like
              to get in touch, please send me an email.
            </Heading>
            <Link
              color={'var(--neonBlue)'}
              href={'mailto:contact@asynctanner.com'}
              target='_blank'>
              <Flex
                align={'center'}
                color={'var(--neonBlue)'}
                w={'100%'}>
                <Text
                  fontSize={'1rem'}
                  fontWeight={500}>
                  contact@asynctanner.com
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
