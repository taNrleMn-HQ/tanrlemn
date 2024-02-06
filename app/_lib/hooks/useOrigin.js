'use client';

import { usePathname } from 'next/navigation';

const MODE = process.env.MODE;

export function useOrigin() {
  const pathname = usePathname();
  const origin =
    typeof window !== 'undefined'
      ? MODE === 'production'
        ? `${window.location.protocol}//${window.location.hostname}`
        : `${window.location.protocol}//${window.location.host}`
      : '';

  console.log('origin', origin);

  const fullPagePath = `${origin}${pathname}`;
  return { pathname, origin, fullPagePath };
}
