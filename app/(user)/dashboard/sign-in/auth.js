'use client';

// recoil
import { useRecoilState } from 'recoil';
import { loadingState } from '@/app/loading';

// supabase
import { createBrowserClient } from '@supabase/ssr';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

// hooks
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from '@/app/_lib/hooks/useUser';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { useOrigin } from '@/app/_lib/hooks/useOrigin';

// chakra-ui
import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Button,
  Stack,
} from '@chakra-ui/react';

// local components
import AuthSplashSection from './splashSection';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const views = [
  {
    id: 'sign_in',
    title: 'Welcome back',
    description: 'Sign in to your account',
    link: '/dashboard/sign-in',
  },
  {
    id: 'sign_up',
    title: 'Get started',
    description: 'Create a new account',
    link: '/dashboard/sign-up',
  },
  {
    id: 'forgotten_password',
    title: 'Reset your password',
    description:
      "Type in your email and we'll send you a link to reset your password",
    link: '/dashboard/forgot-password',
  },
];

export default function AuthUI() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const origin = useOrigin();

  const searchParams = useSearchParams();
  const viewParam = searchParams.get('view');

  const { session } = useSession();
  const [loading, setLoading] = useRecoilState(loadingState);
  const [view, setView] = useState(views[0]);

  const handleViewChange = (view) => {
    setView(view);
    window.history.replaceState(
      {
        ...window.history.state,
        as: view.link,
        url: view.link,
      },
      '',
      view.link
    );
  };

  useEffect(() => {
    if (session !== null) {
      router.push('/dashboard');
    } else {
      setLoading(false);
    }

    if (viewParam !== null) {
      switch (viewParam) {
        case 'sign_in':
          handleViewChange(views[0]);
          break;
        case 'sign_up':
          handleViewChange(views[1]);
          break;
        case 'forgot_password':
          handleViewChange(views[2]);
          break;
        default:
          handleViewChange(views[0]);
          break;
      }
    }
  }, [session, router, setLoading, viewParam]);

  const ForgotPasswordLink = () => {
    return (
      <Button
        variant={'link'}
        fontSize={'0.8rem'}
        textDecor={'underline'}
        fontWeight={400}
        onClick={() => {
          handleViewChange(views[2]);
        }}>
        Forgot your password?
      </Button>
    );
  };

  const SignUpLink = () => {
    return (
      <Button
        variant={'link'}
        fontSize={'0.8rem'}
        textDecor={'underline'}
        fontWeight={400}
        onClick={() => {
          handleViewChange(views[1]);
        }}>
        Don&apos;t have an account? Sign up
      </Button>
    );
  };

  const SignInLink = () => {
    return (
      <Button
        variant={'link'}
        fontSize={'0.8rem'}
        textDecor={'underline'}
        fontWeight={400}
        onClick={() => {
          handleViewChange(views[0]);
        }}>
        Already have an account? Sign in
      </Button>
    );
  };

  return (
    <>
      {!loading && (
        <Flex
          w={'100vw'}
          justify={'space-between'}
          align={'center'}>
          <Box
            borderRight={'1px solid var(--midLightBlueAlt)'}
            background={'var(--lightestBlue)'}
            p={{ base: '1rem', md: '3rem' }}
            pt={{ base: '7rem', md: '7rem' }}
            h={'100vh'}
            w={{ base: '100%', md: '450px' }}>
            <Heading
              size={'lg'}
              mb={'0.5rem'}>
              {view.title}
            </Heading>
            <Text>{view.description}</Text>
            <Box
              w={'100%'}
              mb={'5rem'}>
              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                }}
                providers={['google']}
                queryParams={{ access_type: 'offline', prompt: 'consent' }}
                redirectTo={`${origin}/dashboard`}
                view={view.id}
                showLinks={false}
              />
              <Stack
                textAlign={'center'}
                mt={'1rem'}>
                {view.id === 'sign_in' && (
                  <>
                    <ForgotPasswordLink />
                    <SignUpLink />
                  </>
                )}
                {view.id === 'sign_up' && <SignInLink />}
                {view.id === 'forgotten_password' && <SignInLink />}
              </Stack>
            </Box>
            <Text
              textAlign={'center'}
              fontSize={'0.75rem'}>
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
          </Box>
          {!isMobile && <AuthSplashSection />}
        </Flex>
      )}
    </>
  );
}
