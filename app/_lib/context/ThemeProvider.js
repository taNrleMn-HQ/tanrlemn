'use client';

// chakra-ui
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';

// local
import { theme } from '../styles/theme';

export function ThemeProvider({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;
  return (
    <>
      <ChakraProvider
        theme={theme}
        colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    </>
  );
}
