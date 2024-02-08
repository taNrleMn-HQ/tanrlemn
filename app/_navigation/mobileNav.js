'use client';

// hooks
import { useCart } from '../_lib/hooks/useCart';

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
} from '@chakra-ui/react';
import { Menu } from 'lucide-react';

// local components
import AccountButton from '../_components/interactive/accountButton';
import Logo from '../_components/branding/logo';
import ShoppingBag from '../_components/icons/shoppingBag';

export default function MobileNavbar({ routes }) {
  const { numCartItems } = useCart();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        align={'center'}
        gap={'1rem'}>
        <Link
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
                background={'red.300'}
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
              <Box
                m={'2rem 0 1rem 0'}
                w={'100%'}>
                <AccountButton />
              </Box>
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
      borderBottom={index === routesLength - 1 ? 'none' : '1px solid'}
      borderColor={'gray.200'}
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
