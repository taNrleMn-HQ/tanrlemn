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
import { Flex, Box } from '@chakra-ui/react';

// local components
import Logo from '../_components/branding/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
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

  return (
    <>
      <Box
        zIndex={1000}
        position={'sticky'}
        top={'0'}>
        <Flex
          zIndex={1000}
          background={'blue.50'}
          backdropFilter={'blur(10px) saturate(100%)'}
          w={'100%'}
          p={'0.75rem'}
          borderBottom={'1px solid var(--lightOrange)'}>
          <Flex
            w={'100%'}
            align={'center'}
            justify={{ base: 'space-between' }}>
            <Logo />
            {loading ? (
              <></>
            ) : isMobile ? (
              <MobileNav routes={routes} />
            ) : (
              <DesktopNav routes={routes} />
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
