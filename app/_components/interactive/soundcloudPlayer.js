// music links
const playlistUrl =
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1775999577&color=%23805ad5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';

// chakra-ui
import { Box, useColorModeValue } from '@chakra-ui/react';

// react-iframe
import Iframe from 'react-iframe';

export default function SoundCloudPlayer() {
  const bg = useColorModeValue('gray.300', 'gray.700');
  const border = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      w={'100%'}
      border={'1px solid'}
      borderColor={border}
      borderRadius={'9px'}
      p={'1rem'}>
      <Iframe
        src={playlistUrl}
        width={'100%'}
        height={'450'}
        scrolling={'no'}
      />
    </Box>
  );
}
