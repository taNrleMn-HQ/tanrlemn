'use client';

// context
import { ContactContext } from '@/app/lib/context/ContactProvider';

// hooks
import { useContext } from 'react';

// chakra-ui
import { Link, Flex, Text, Button } from '@chakra-ui/react';

export default function DesktopNavbar({ routes }) {
  const { contactOnOpen } = useContext(ContactContext);

  return (
    <>
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

        {/* <Button
          onClick={contactOnOpen}
          ml={'2rem'}
          _hover={{
            background: 'var(--neonGreen)',
          }}
          color={'var(--darkGray)'}
          background={'var(--neonBlue)'}>
          Connect
        </Button> */}
      </Flex>
    </>
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
