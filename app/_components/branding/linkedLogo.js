'use client';

// hooks
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';

// chakra-ui
import { Flex, Link } from '@chakra-ui/react';

// local components
import Logo from './logo';

export default function LinkedLogo({ link = '/', logo = 'circle' }) {
  const isMobile = useIsMobile();
  const widths = {
    circle: isMobile ? '3rem' : '3rem',
  };

  return (
    <Link href={link}>
      <Flex
        align={'center'}
        gap={'0.5rem'}>
        <Logo
          logo={logo}
          size={widths[logo]}
        />
      </Flex>
    </Link>
  );
}
