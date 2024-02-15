// chakra-ui
import { Box, useColorModeValue } from '@chakra-ui/react';

// react-h5-audio-player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function SoundCloudPlayer({ url }) {
  url = 'https://soundcloud.com/fakepetegotheat/shit-aint-real';
  const bg = useColorModeValue('gray.300', 'gray.700');
  const border = useColorModeValue('gray.400', 'gray.600');

  return (
    <Box
      border={'1px solid'}
      borderColor={border}
      borderTop={'none'}
      borderRadius={'0 0 5px 5px'}
      p={0}
      bg={bg}
      ml={'1rem'}
      w={'fit-content'}>
      <AudioPlayer
        src={url}
        showJumpControls={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        customProgressBarSection={[]}
        customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
        layout='horizontal-reverse'
        autoPlayAfterSrcChange={false}
        autoPlay={false}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
        }}
      />
    </Box>
  );
}
