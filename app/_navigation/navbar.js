'use client';

// hooks
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { usePathname } from 'next/navigation';
import { useSession } from '../_lib/hooks/useUser';

// chakra-ui
import { Flex, Box, Button, Link } from '@chakra-ui/react';

// local components
import Logo from '../_components/brandElements/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import { routes } from './routes';
import ShoppingBag from '../_components/icons/shoppingBag';

export default function Navbar() {
  const isMobile = useIsMobile();
  const { session } = useSession();

  const pathname = usePathname();

  const isAuth =
    (pathname.includes('sign-in') || pathname.includes('sign-up')) &&
    session === null;

  return (
    <>
      {isAuth ? (
        <Box
          zIndex={1000}
          minW={'100%'}
          position={'absolute'}
          top={'0'}>
          <Flex
            zIndex={1000}
            w={'100%'}
            align={'center'}
            justify={{ base: 'space-between' }}
            p={'0.75rem'}>
            <Logo p={isMobile ? '0.3125rem 0' : '0.3125rem 1.4375rem'} />
            {!isMobile && (
              <Link href={'/shop'}>
                <Button
                  colorScheme={'gray'}
                  leftIcon={<ShoppingBag color={'var(--darkGray)'} />}
                  size={'sm'}>
                  View shop
                </Button>
              </Link>
            )}
          </Flex>
        </Box>
      ) : (
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
      )}
    </>
  );
}
