'use client';

// recoil
import { useRecoilState } from 'recoil';
import { loadingState } from '@/app/loading';

// supabase
import { createBrowserClient } from '@supabase/ssr';

// hooks
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, useProfile } from '@/app/_lib/hooks/useUser';

// chakra-ui
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Highlight,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

// local components
import { AccountAvatar } from '@/app/(user)/_components/accountButton';
import UpdateProfileForm from '@/app/_components/forms/updateProfileForm';
import { LogOut } from 'lucide-react';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Dashboard() {
  const router = useRouter();

  const { session } = useSession();
  const { profile } = useProfile();

  const [loading, setLoading] = useRecoilState(loadingState);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (session === null) {
      router.push('/dashboard/sign-in');
    } else {
      setLoading(false);
    }
  }, [session, router, setLoading]);

  const handleManageBilling = async () => {
    setLoading(true);
    const response = await fetch('/api/accounts/stripeBillingSession', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId: 'cus_P8rlXIo6AROimp',
      }),
    });

    const { url } = await response.json();

    router.push(url);
  };

  const handleSignOut = async () => {
    setLoading(true);

    await supabase.auth.signOut();

    router.push('/dashboard/sign-in');
  };

  return (
    <Box
      p={{ base: '3rem 0', md: '6rem 3rem' }}
      fontSize={'1.1rem'}>
      {profile !== null && (
        <Container
          maxW={'450px'}
          mb={'4rem'}
          h={'fit-content'}
          position={'relative'}>
          <Stack
            pb={'3rem'}
            mb={'4rem'}
            w={'100%'}>
            <Heading
              size={'xl'}
              fontWeight={800}>
              Welcome back!
            </Heading>
            <Text
              maxW={'750px'}
              mb={'1rem'}>
              <Highlight
                query={'taNrleMn'}
                styles={{
                  fontWeight: 600,
                }}>
                Manage your subscriptions, account settings, billing, and more.
              </Highlight>
            </Text>
            <Box mb={'1rem'}>
              <AccountAvatar size={'lg'} />
              <Heading size={'md'}>{profile.full_name}</Heading>
              <Text>{profile.email}</Text>
            </Box>
            <Flex
              flexWrap={'wrap'}
              gap={3}>
              <Button
                onClick={handleManageBilling}
                _hover={{
                  outline: '1px solid var(--blue)',
                }}
                size={'sm'}
                maxW={'fit-content'}
                background={'var(--lightBlue)'}>
                Manage billing
              </Button>
              <UpdateProfileForm
                isOpen={isOpen}
                onClose={onClose}
              />
              <Button
                onClick={onOpen}
                background={'var(--lightPurple)'}
                _hover={{
                  outline: '1px solid var(--blue)',
                }}
                size={'sm'}
                maxW={'fit-content'}>
                Update profile
              </Button>
            </Flex>
            <Divider m={'2rem 0 1rem 0'} />
            <Button
              onClick={handleSignOut}
              size={'sm'}
              rightIcon={<LogOut size={'1rem'} />}
              colorScheme='red'
              maxW={'fit-content'}>
              Sign out
            </Button>
          </Stack>
        </Container>
      )}
    </Box>
  );
}
