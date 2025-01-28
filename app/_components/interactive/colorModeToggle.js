// chakra-ui
import { useColorMode, Switch, FormControl, Box } from '@chakra-ui/react';
import { Moon, Sun } from 'lucide-react';

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <FormControl display='flex' alignItems='center'>
      <Box color={colorMode === 'light' ? 'pink.500' : 'gray.400'}>
        <Sun size={17} />
      </Box>
      <Switch
        mx={'0.5rem'}
        isChecked={colorMode === 'dark'}
        id='color-mode-toggle'
        onChange={handleToggle}
        colorScheme={'purple'}
        size={'sm'}
      />
      <Box color={colorMode === 'dark' ? 'purple.300' : 'gray.500'}>
        <Moon size={17} />
      </Box>
    </FormControl>
  );
}
