'use client';

// hooks
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page({ params }) {
  const slug = params.slug;

  const router = useRouter();

  useEffect(() => {
    switch (slug) {
      case 'sign-in':
        router.push('/dashboard/sign-in?view=sign_in');
        break;
      case 'sign-up':
        router.push('/dashboard/sign-in?view=sign_up');
        break;
      case 'forgot-password':
        router.push('/dashboard/sign-in?view=forgot_password');
        break;
      default:
        router.push('/dashboard/sign-in');
        break;
    }
  }, [router, slug]);

  return null;
}
