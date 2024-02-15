'use client';

// Recoil
import { useRecoilValue } from 'recoil';
import { userState } from '@/app/_state/atoms';

// hooks
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { useAuth } from '@/app/_lib/hooks/useAuth';

// chakra-ui
import { Flex, Box, useColorModeValue, Button } from '@chakra-ui/react';

// local components
import Logo from '../_components/branding/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import ColorModeToggle from '@/app/_components/interactive/colorModeToggle';
import SoundCloudPlayer from '@/app/_components/interactive/soundcloudPlayer';
import { routes } from './routes';

export default function Navbar() {
  const { loading } = useAuth();
  const router = useRouter();
  const isMobile = useIsMobile();

  const pathname = usePathname();
  const user = useRecoilValue(userState);
  const loggedIn = !!user;

  const isAuth = pathname.includes('/auth');
  const isUserPage = pathname.includes('/dashboard');

  useEffect(() => {
    if (!loading && !loggedIn && !isAuth && isUserPage) {
      console.log('redirecting to login');
      router.replace(
        '/auth/login?message=You must be logged in to view that page'
      );
    } else if (!loading && loggedIn && isAuth && !isUserPage) {
      console.log('redirecting to dashboard');
      router.replace('/dashboard');
    }
  }, [loading, user, loggedIn, router, isAuth, isUserPage, pathname]);

  const bg = useColorModeValue('blue.50', 'gray.800');
  const borderColor = useColorModeValue('orange.300', 'gray.600');

  return (
    <>
      <Box
        zIndex={1000}
        position={'sticky'}
        h={'fit-content'}
        top={'0'}>
        <Flex
          zIndex={1000}
          background={bg}
          backdropFilter={'blur(10px) saturate(100%)'}
          w={'100%'}
          p={'0.75rem'}
          borderBottom={'1px solid'}
          borderColor={borderColor}>
          <Flex
            w={'100%'}
            align={'center'}
            justify={{ base: 'space-between' }}>
            <Logo />

            {loading ? (
              <Button isLoading={loading}></Button>
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
