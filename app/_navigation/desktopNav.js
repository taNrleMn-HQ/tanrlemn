'use client';

// chakra-ui
import { Link, Flex, useColorModeValue, Button, Image } from '@chakra-ui/react';

// local components
import { ExternalLink } from 'lucide-react';

export default function DesktopNavbar({ routes }) {
  return (
    <Flex align={'center'} gap={'1rem'} pr={{ base: '0', md: '2rem' }}>
      <Flex fontSize={'0.9rem'}>
        {routes.map((route) =>
          route.isExternal ? (
            <ExternalNavLink
              key={route.name}
              name={route.name}
              path={route.path}
            />
          ) : (
            <NavLink key={route.name} name={route.name} path={route.path} />
          )
        )}
      </Flex>
      <Link maxW={'fit-content'} href={'/contact'}>
        <Button colorScheme={'purple'} size={'sm'}>
          Get in touch
        </Button>
      </Link>
    </Flex>
  );
}

const NavLink = ({ name, path }) => {
  return (
    <Link
      position={'relative'}
      m={'0 0.5rem'}
      fontSize={'1rem'}
      fontWeight={500}
      textDecoration={'none'}
      borderRadius={'0.25rem'}
      _hover={{
        textDecoration: 'none',
        background: 'purple.100',
        color: 'purple.700',
        borderRadius: '0.35rem',
      }}
      href={path}
      p={'0.4rem 0.8rem'}
    >
      {name}
    </Link>
  );
};

const ExternalNavLink = ({ name, path }) => {
  return (
    <Link
      position={'relative'}
      m={'0 0.5rem'}
      fontSize={'1rem'}
      fontWeight={500}
      textDecoration={'none'}
      borderRadius={'0.25rem'}
      _hover={{
        textDecoration: 'none',
        background: 'purple.100',
        color: 'purple.700',
        borderRadius: '0.35rem',
      }}
      target={'_blank'}
      href={path}
      p={'0.4rem 0.8rem'}
    >
      <Flex align={'center'} gap={'0.35rem'}>
        {name}
        <ExternalLink size={15} />
      </Flex>
    </Link>
  );
};
