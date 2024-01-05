'use client';

// hooks
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';

// chakra-ui
import { Flex, Box } from '@chakra-ui/react';

// local components
import Logo from '../_components/brandElements/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import { routes } from './routes';

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <Box
      zIndex={1000}
      position={'sticky'}
      top={'0'}>
      <Flex
        zIndex={1000}
        background={'var(--lightestBlue70)'}
        backdropFilter={'blur(10px) saturate(100%)'}
        w={'100%'}
        p={'0.75rem'}
        borderBottom={'1px solid var(--lightOrange)'}>
        <Flex
          w={'100%'}
          align={'center'}
          justify={{ base: 'space-between' }}>
          <Logo />
          {isMobile ? (
            <MobileNav routes={routes} />
          ) : (
            <DesktopNav routes={routes} />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
