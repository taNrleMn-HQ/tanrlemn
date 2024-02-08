// recoil
import { useRecoilState } from 'recoil';
import { artistState } from '@/app/_state/atoms';

// chakra-ui
import {
  useColorMode,
  Button,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useEffect } from 'react';

export default function ArtistToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [artist, setArtist] = useRecoilState(artistState);

  const handleToggle = () => {
    toggleColorMode();
  };

  useEffect(() => {
    setArtist(colorMode === 'light' ? 'tanrlemn' : 'fakepete');
    console.log('artist:', artist);
  }, [artist, colorMode, setArtist]);

  return (
    <FormControl
      display='flex'
      alignItems='center'>
      <FormLabel
        fontSize={'0.8rem'}
        fontWeight={artist === 'tanrlemn' ? 600 : 400}
        htmlFor='artist'
        mb='0'>
        taNrleMn
      </FormLabel>
      <Switch
        id='artist'
        onChange={handleToggle}
        colorScheme={'orange'}
        size={'lg'}
      />
      <FormLabel
        fontSize={'0.8rem'}
        fontWeight={artist === 'fakepete' ? 600 : 400}
        htmlFor='artist'
        mb='0'>
        Fake Pete
      </FormLabel>
    </FormControl>
  );
}
