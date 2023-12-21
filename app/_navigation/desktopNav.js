'use client';

// context
import { CartContext } from '../lib/context/CartProvider';

// hooks
import { useContext } from 'react';

// chakra-ui
import { Link, Flex, Text } from '@chakra-ui/react';

// icons
import ShoppingBag from '../_components/icons/shoppingBag';

export default function DesktopNavbar({ routes }) {
  const { numCartItems } = useContext(CartContext);

  return (
    <Flex align={'center'}>
      <Flex fontSize={'0.9rem'}>
        {routes.map((route) => (
          <NavLink
            key={route.name}
            name={route.name}
            path={route.path}
            icon={route.icon}
            target={route.target}
          />
        ))}
      </Flex>

      <Link
        _hover={{ textDecoration: 'none', background: 'var(--lightestBlue)' }}
        p={'0.4rem 0.8rem'}
        borderRadius={'full'}
        href='/cart'
        ml={'1rem'}>
        <Flex>
          <ShoppingBag />
          {numCartItems > 0 && (
            <Flex
              top={0}
              left={'0.4rem'}
              w={'1rem'}
              h={'1rem'}
              align={'center'}
              justify={'center'}
              background={'var(--lighterOrange)'}
              borderRadius={'100px'}>
              <Text
                lineHeight={1}
                fontSize={'0.65rem'}
                fontWeight={600}>
                {numCartItems}
              </Text>
            </Flex>
          )}
        </Flex>
      </Link>
    </Flex>
  );
}

const NavLink = ({ name, path, icon, target }) => {
  return (
    <Link
      position={'relative'}
      m={'0 0.5rem'}
      fontSize={'1rem'}
      fontWeight={500}
      textDecoration={'none'}
      _hover={{
        textDecoration: 'none',
        boxShadow: '0px -1px 0px var(--orangeAlt) inset',
      }}
      target={target}
      href={path}
      p={'0.4rem 0.8rem'}>
      {name}
    </Link>
  );
};
