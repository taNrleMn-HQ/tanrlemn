'use client';

// server
import { createBrowserClient } from '@supabase/ssr';

// recoil
import { atom, useRecoilState, useRecoilValue } from 'recoil';

// hooks
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const sessionState = atom({
  key: 'sessionState',
  default: null,
});

export const profileState = atom({
  key: 'profileState',
  default: null,
});

export function useSession() {
  const [session, setSession] = useRecoilState(sessionState);
  const router = useRouter();
  const pathname = usePathname();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  useEffect(() => {
    const getSession = async () => {
      if (session === null) {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        setSession(session);

        if (session === null && pathname === '/account') {
          router.push('/dashboard/sign-in');
        }
      }
    };

    // handle account creation errors:
    //http://localhost:3000/?error=server_error&error_code=500&error_description=Database+error+saving+new+user#error=server_error&error_code=500&error_description=Database+error+saving+new+user

    supabase.auth.onAuthStateChange(() => {
      getSession();
    });
  }, [session, supabase, setSession, router, pathname]);

  return { session };
}

export function useProfile() {
  const session = useRecoilValue(sessionState);
  const [profile, setProfile] = useRecoilState(profileState);

  useEffect(() => {
    const getProfile = async () => {
      if (profile === null) {
        const res = await fetch('/api/supabase/getProfile');

        const { data, error } = await res.json();

        if (error) {
          console.error(error);
        }

        setProfile(data[0]);
      }
    };

    session != null && getProfile();
  }, [profile, setProfile, session]);

  return { profile, setProfile };
}
