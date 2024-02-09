'use client';

// hooks
import { useCart } from '../_lib/hooks/useCart';

// chakra-ui
import { Link, Flex, Text, Box, useColorModeValue } from '@chakra-ui/react';

// local components
import AccountButton from '../_components/interactive/accountButton';
import { ShoppingBagIcon } from 'lucide-react';

export default function DesktopNavbar({ routes }) {
  const { numCartItems } = useCart();

  const bagColor = useColorModeValue('gray.800', 'gray.200');
  const bg = useColorModeValue('red.200', 'orange.500');

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
        _hover={{ textDecoration: 'none' }}
        p={'0.4rem 0.8rem'}
        borderRadius={'full'}
        href='/cart'
        ml={'1rem'}>
        <Flex>
          <Box color={bagColor}>
            <ShoppingBagIcon size={17} />
          </Box>
          {numCartItems > 0 && (
            <Flex
              ml={'0.2rem'}
              top={0}
              w={'1rem'}
              h={'1rem'}
              align={'center'}
              justify={'center'}
              background={bg}
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
      <AccountButton />
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
        background: 'purple.100',
        color: 'purple.700',
        borderRadius: '0.25rem',
      }}
      target={target}
      href={path}
      p={'0.4rem 0.8rem'}>
      {name}
    </Link>
  );
};
