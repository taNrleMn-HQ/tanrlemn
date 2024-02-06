'use client';

const MODE = process.env.NEXT_PUBLIC_MODE;

export function useOrigin() {
  if (typeof window === 'undefined') {
    return { pathname: '', callbackUrl: '', fullPagePath: '' };
  }

  const origin = window.location.origin;
  const pathname = window.location.pathname;

  const port = window.location.port;
  const href = window.location.href;
  const removePort = href.replace(`:${port}`, '');

  const callbackUrl = MODE === 'production' ? removePort : origin;
  const fullPagePath = `${callbackUrl}${pathname}`;

  // console.log('window.location', window.location);
  console.log('MODE', MODE);
  console.log('useOrigin', { pathname, callbackUrl, fullPagePath });

  return { pathname, callbackUrl, fullPagePath };
}
