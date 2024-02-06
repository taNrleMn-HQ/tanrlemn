// recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState } from '@/app/_state/atoms';

// hooks
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';

// chakra-ui
import { Link, Button } from '@chakra-ui/react';

export default function AccountButton() {
  const isMobile = useIsMobile();
  const user = useRecoilValue(userState);
  const loggedIn = !!user;

  return (
    <>
      <Link
        w={isMobile ? '100%' : 'auto'}
        m={isMobile ? '1rem 0 1rem 0' : '0 0 0 1rem'}
        p={0}
        _hover={{ textDecoration: 'none' }}
        href={loggedIn ? '/dashboard' : '/auth/login'}>
        {loggedIn ? (
          <Button
            size={isMobile ? 'lg' : 'sm'}
            w={'100%'}
            fontSize={'0.8rem'}
            colorScheme={'teal'}
            variant={'solid'}>
            Dashboard
          </Button>
        ) : (
          <Button
            size={isMobile ? 'lg' : 'sm'}
            w={isMobile ? '100%' : 'auto'}
            fontSize={'0.8rem'}
            colorScheme={'teal'}
            variant={'solid'}>
            Sign in
          </Button>
        )}
      </Link>
    </>
  );
}
