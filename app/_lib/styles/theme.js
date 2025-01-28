// chakra-ui
import { extendTheme } from '@chakra-ui/react';

const config = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export const theme = extendTheme({ config });
