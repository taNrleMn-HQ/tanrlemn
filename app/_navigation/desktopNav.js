'use client';

// images
import etsyOrange from '@/public/logos/etsy.png';
import estyWhite from '@/public/logos/etsy-white.png';

// chakra-ui
import { Link, Flex, useColorModeValue, Button, Image } from '@chakra-ui/react';

// local components
import { ExternalLink } from 'lucide-react';

export default function DesktopNavbar({ routes }) {
  const etsyLogo = useColorModeValue(etsyOrange, estyWhite);

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
        ml={'1rem'}
        href='https://tanrlemnxyz.etsy.com'
        isExternal>
        <Button
          p={'0.25rem 2rem'}
          colorScheme={'teal'}
          variant={'outline'}
          rightIcon={<ExternalLink size={12} />}>
          <Image
            src={etsyLogo.src}
            alt={'Etsy'}
            objectFit={'contain'}
            w={'2.5rem'}
            minW={'2rem'}
          />
        </Button>
      </Link>
    </Flex>
  );
}

const NavLink = ({ name, path, target }) => {
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
      target={target}
      href={path}
      p={'0.4rem 0.8rem'}>
      {name}
    </Link>
  );
};
