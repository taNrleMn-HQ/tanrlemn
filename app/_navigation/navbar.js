'use client';

// hooks
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';

// chakra-ui
import { Flex, Box, useColorModeValue, Button } from '@chakra-ui/react';

// local components
import Logo from '../_components/branding/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import ColorModeToggle from '@/app/_components/interactive/colorModeToggle';
import { routes } from './routes';

export default function Navbar() {
  const isMobile = useIsMobile();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const bg = useColorModeValue('blue.50', 'gray.800');
  const borderColor = useColorModeValue('pink.200', 'gray.600');

  return (
    <>
      <Box zIndex={1000} position={'sticky'} h={'fit-content'} top={'0'}>
        <Flex
          zIndex={1000}
          background={bg}
          backdropFilter={'blur(10px) saturate(100%)'}
          w={'100%'}
          p={'0.75rem'}
          borderBottom={'1px solid'}
          borderColor={borderColor}
        >
          <Flex w={'100%'} align={'center'} justify={{ base: 'space-between' }}>
            <Logo />
            {!isClient ? (
              <Button isLoading={true}></Button>
            ) : isMobile ? (
              <MobileNav routes={routes} />
            ) : (
              <>
                <ColorModeToggle />
                <DesktopNav routes={routes} />
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
