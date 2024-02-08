'use client';

// recoil
import { useRecoilValue } from 'recoil';
import { userProfileSelector } from '@/app/_state/selectors';

// hooks
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
} from '@chakra-ui/react';

// icons
import { LogOut } from 'lucide-react';

// supabase
import { createClient } from '@/app/_lib/utils/supabase/client';

const supabase = createClient();

export default function Dashboard() {
  const router = useRouter();
  const profile = useRecoilValue(userProfileSelector);

  const [loadingBillingSession, setLoadingBillingSession] = useState(false);
  const [billingSessionUrl, setBillingSessionUrl] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [customerExists, setCustomerExists] = useState(false);

  useEffect(() => {
    const getBillingSession = async () => {
      setLoadingBillingSession(true);
      const response = await fetch('/api/stripe/stripeBillingSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: profile.email,
        }),
      });

      const { url } = await response.json();

      setBillingSessionUrl(url);
      setLoadingBillingSession(false);
    };
    if (profile !== null && !billingSessionUrl) {
      getBillingSession();
    }
  }, [profile, billingSessionUrl]);

  const handleManageBilling = async () => {
    setLoadingBillingSession(true);

    router.replace(billingSessionUrl);
  };

  const signOut = async () => {
    setLoggingOut(true);

    await supabase.auth.signOut({ scope: 'local' });
    router.replace('/auth/login');
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
              <Heading size={'md'}>{profile.name}</Heading>
              <Text textDecoration={'none'}>{profile.email}</Text>
            </Box>
            <Flex
              flexWrap={'wrap'}
              gap={3}>
              {billingSessionUrl ? (
                <Button
                  isLoading={loadingBillingSession}
                  onClick={handleManageBilling}
                  _hover={{
                    outline: '1px solid var(--blue)',
                  }}
                  size={'sm'}
                  maxW={'fit-content'}
                  background={'var(--lightBlue)'}>
                  Manage subscriptions
                </Button>
              ) : (
                <Button
                  isLoading={loadingBillingSession}
                  onClick={() => router.push('/subscriptions')}
                  _hover={{
                    outline: '1px solid var(--blue)',
                  }}
                  size={'sm'}
                  maxW={'fit-content'}
                  background={'var(--lightBlue)'}>
                  Find a plan
                </Button>
              )}
            </Flex>
            <Divider m={'2rem 0 1rem 0'} />
            <Button
              isLoading={loggingOut}
              onClick={signOut}
              size={'sm'}
              variant={'outline'}
              rightIcon={<LogOut size={'15px'} />}
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
