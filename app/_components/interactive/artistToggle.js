// recoil
import { useRecoilState } from 'recoil';
import { artistState } from '@/app/_state/atoms';

// hooks
import { useEffect } from 'react';

// chakra-ui
import {
  useColorMode,
  Button,
  Switch,
  FormControl,
  FormLabel,
  Box,
} from '@chakra-ui/react';
import { Mic2, Paintbrush2 } from 'lucide-react';

export default function ArtistToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [artist, setArtist] = useRecoilState(artistState);

  const handleToggle = () => {
    toggleColorMode();
  };

  useEffect(() => {
    setArtist(colorMode === 'light' ? 'tanrlemn' : 'fakepete');
  }, [artist, colorMode, setArtist]);

  return (
    <FormControl
      display='flex'
      alignItems='center'>
      <Box color={artist === 'tanrlemn' ? 'orange.500' : 'gray.400'}>
        <Paintbrush2 size={17} />
      </Box>
      <Switch
        mx={'0.5rem'}
        isChecked={artist === 'fakepete'}
        id='artist'
        onChange={handleToggle}
        colorScheme={'purple'}
        size={'sm'}
      />
      <Box color={artist === 'fakepete' ? 'purple.300' : 'gray.500'}>
        <Mic2 size={17} />
      </Box>
    </FormControl>
  );
}
