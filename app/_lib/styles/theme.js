// chakra-ui
import { extendTheme } from '@chakra-ui/react';

const config = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  global: {
    html: {
      background: 'var(--white)',
      color: 'var(--blackAlt)',
    },
    body: {
      background: 'var(--white)',
      color: 'var(--blackAlt)',
    },
  },
});

export const theme = extendTheme({ config });
