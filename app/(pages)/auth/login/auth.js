'use client';

// supabase
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@/app/_lib/utils/supabase/client';

// hooks
import { useQueryState } from 'nuqs';
import { useOrigin } from '@/app/_lib/hooks/useOrigin';

// chakra-ui
import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Container,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

// local components
import AuthSplashSection from './splashSection';

export default function AuthUI() {
  const { callbackUrl } = useOrigin();

  const [message] = useQueryState('message');

  const supabase = createClient();

  const bg = useColorModeValue('blue.50', 'gray.800');

  return (
    <>
      <Flex
        background={bg}
        direction={{ base: 'column', md: 'row' }}
        minH={'93vh'}
        align={'center'}>
        <AuthSplashSection />
        <Flex
          align={'center'}
          justify={'center'}>
          <Container
            mb={{ base: '2rem' }}
            p={{ base: '2rem', md: '3rem' }}
            minW={{ base: '100%', md: '400px' }}
            w={{ base: '100%', md: '450px' }}>
            {message && (
              <Tag
                mb={'1rem'}
                colorScheme={'red'}>
                {message}
              </Tag>
            )}
            <Heading
              size={'lg'}
              mb={'0.5rem'}>
              Welcome back!
            </Heading>
            <Text>Sign in to your account to continue.</Text>
            <Box
              w={'100%'}
              mb={'2rem'}>
              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                }}
                providers={['google']}
                showLinks={false}
                onlyThirdPartyProviders
                redirectTo={`${callbackUrl}/auth/callback`}
              />
            </Box>
            <Text fontSize={'0.75rem'}>
              By continuing, you agree to taNrleMn&apos;s{' '}
              <Link
                textDecoration={'underline'}
                href={'/terms'}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                textDecoration={'underline'}
                href={'/privacy'}>
                Privacy Policy
              </Link>
              , and to receive periodic emails with updates.
            </Text>
          </Container>
        </Flex>
      </Flex>
    </>
  );
}
