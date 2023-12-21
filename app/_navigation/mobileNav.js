'use client';

// context
import { ContactContext } from '@/app/lib/context/ContactProvider';

// hooks
import { useRef, useContext } from 'react';

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
  VStack,
  Heading,
} from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import Logo from '../_components/brandElements/logo';

export default function MobileNavbar({ routes }) {
  const btnRef = useRef();
  const { contactOnOpen } = useContext(ContactContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu
        cursor={'pointer'}
        ref={btnRef}
        onClick={onOpen}
        fontSize={'1.5rem'}
        color={'var(--white)'}
      />
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody
            minH={'50vh'}
            w={'100%'}>
            <VStack
              align={'flex-start'}
              w={'100%'}>
              <VStack
                w={'100%'}
                fontSize={'0.9rem'}
                align={'flex-start'}>
                {routes.map((route) => (
                  <NavLink
                    key={route.name}
                    name={route.name}
                    path={route.path}
                    icon={route.icon}
                    target={route.target}
                  />
                ))}
              </VStack>

              {/* <Button
                onClick={() => {
                  contactOnOpen();
                  onClose();
                }}
                mt={'2rem'}
                size={'lg'}
                _hover={{
                  background: 'var(--neonGreen)',
                }}
                color={'var(--darkGray)'}
                background={'var(--neonBlue)'}>
                Connect
              </Button> */}
            </VStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const NavLink = ({ name, path, icon, target }) => {
  return (
    <Link
      w={'100%'}
      borderBottom={'1px solid var(--midGrayAlt)'}
      position={'relative'}
      fontSize={'1rem'}
      fontWeight={500}
      color={'var(--white)'}
      textDecoration={'none'}
      _hover={{
        textDecoration: 'none',
        boxShadow: '0px -1px 0px var(--orangeAlt) inset',
      }}
      target={target}
      href={path}
      p={'1.5rem 1.5rem 1.5rem 0'}>
      <Flex>
        <Heading
          maxW={'fit-content'}
          size={'xl'}
          fontWeight={500}>
          {name}
        </Heading>
        {icon && icon}
      </Flex>
    </Link>
  );
};
