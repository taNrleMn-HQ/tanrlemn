'use client';

// chakra-ui
import {
  Link,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  VStack,
  Heading,
  Box,
  useColorModeValue,
  Button,
  Image,
} from '@chakra-ui/react';
import { ExternalLink, Menu } from 'lucide-react';

// local components
import Logo from '../_components/branding/logo';
import ColorModeToggle from '../_components/interactive/colorModeToggle';

export default function MobileNavbar({ routes }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonVariant = useColorModeValue('ghost', 'solid');

  return (
    <>
      <Flex align={'center'} gap={'1rem'}>
        <Link
          p={'0.4rem 0.8rem'}
          borderRadius={'full'}
          href='/cart'
          ml={'1rem'}
        ></Link>
        <Button variant={buttonVariant}>
          <Menu onClick={onOpen} size={20} />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement='top' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo p={0} />
            <ColorModeToggle />
          </DrawerHeader>
          <DrawerBody minH={'50vh'} w={'100%'}>
            <VStack w={'100%'} fontSize={'0.9rem'} align={'flex-start'}>
              {routes.map((route, index) =>
                route.isExternal ? (
                  <ExternalNavLink
                    key={route.name}
                    name={route.name}
                    path={route.path}
                    target={route.target}
                    index={index}
                    routesLength={routes.length}
                  />
                ) : (
                  <NavLink
                    key={route.name}
                    name={route.name}
                    path={route.path}
                    icon={route.icon}
                    index={index}
                    routesLength={routes.length}
                  />
                )
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const NavLink = ({ name, path, index, routesLength }) => {
  return (
    <Link
      w={'100%'}
      borderBottom={index === routesLength - 1 ? 'none' : '1px solid'}
      borderColor={'gray.200'}
      position={'relative'}
      textDecoration={'none'}
      _hover={{
        textDecoration: 'none',
      }}
      href={path}
      p={'1rem 1rem 1rem 0'}
    >
      <Flex>
        <Heading maxW={'fit-content'} size={'md'} fontWeight={500}>
          {name}
        </Heading>
      </Flex>
    </Link>
  );
};

const ExternalNavLink = ({ name, path, index, routesLength }) => {
  return (
    <Link
      w={'100%'}
      borderBottom={index === routesLength - 1 ? 'none' : '1px solid'}
      borderColor={'gray.200'}
      position={'relative'}
      textDecoration={'none'}
      _hover={{
        textDecoration: 'none',
      }}
      target={'_blank'}
      href={path}
      p={'1rem 1rem 1rem 0'}
    >
      <Flex align={'center'} gap={'0.5rem'}>
        <Heading maxW={'fit-content'} size={'md'} fontWeight={500}>
          {name}
        </Heading>
        <ExternalLink size={20} />
      </Flex>
    </Link>
  );
};
