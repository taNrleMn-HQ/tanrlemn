'use client';

import { usePathname } from 'next/navigation';

export function useOrigin() {
  const pathname = usePathname();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const fullPagePath = `${origin}${pathname}`;
  return { pathname, origin, fullPagePath };
}
