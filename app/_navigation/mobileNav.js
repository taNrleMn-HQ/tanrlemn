'use client';

// context
import { ContactContext } from '@/app/lib/context/ContactProvider';
import { CartContext } from '../lib/context/CartProvider';

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
  Text,
  Box,
} from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import Logo from '../_components/brandElements/logo';
import ShoppingBag from '../_components/icons/shoppingBag';

export default function MobileNavbar({ routes }) {
  const btnRef = useRef();
  const { numCartItems } = useContext(CartContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        align={'center'}
        gap={'1rem'}>
        <Link
          _hover={{
            textDecoration: 'none',
            background: 'var(--lightestBlue)',
          }}
          p={'0.4rem 0.8rem'}
          borderRadius={'full'}
          href='/cart'
          ml={'1rem'}>
          <Flex>
            <ShoppingBag />
            {numCartItems > 0 && (
              <Box
                position={'relative'}
                top={'-0.2rem'}
                left={'-0.2rem'}
                w={'0.6rem'}
                h={'0.6rem'}
                background={'var(--orangeAlt)'}
                borderRadius={'100px'}></Box>
            )}
          </Flex>
        </Link>
        <Menu
          onClick={onOpen}
          size={20}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo p={0} />
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
                {routes.map((route, index) => (
                  <NavLink
                    key={route.name}
                    name={route.name}
                    path={route.path}
                    icon={route.icon}
                    target={route.target}
                    index={index}
                    routesLength={routes.length}
                  />
                ))}
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const NavLink = ({ name, path, icon, target, index, routesLength }) => {
  return (
    <Link
      w={'100%'}
      borderBottom={
        index === routesLength - 1 ? 'none' : '1px solid var(--lightGray)'
      }
      position={'relative'}
      textDecoration={'none'}
      _hover={{
        textDecoration: 'none',
      }}
      target={target}
      href={path}
      p={'1rem 1rem 1rem 0'}>
      <Flex>
        <Heading
          maxW={'fit-content'}
          size={'md'}
          fontWeight={500}>
          {name}
        </Heading>
        {icon && icon}
      </Flex>
    </Link>
  );
};
