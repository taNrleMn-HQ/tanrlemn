'use client';

// music links
const videoUrl = 'https://www.youtube.com/watch?v=kyRnXNiNOto&t=1s';

// chakra-ui
import { AspectRatio, Box, useColorModeValue } from '@chakra-ui/react';

// react-iframe
import ReactPlayer from 'react-player/youtube';

export default function YouTubePlayer() {
  const bg = useColorModeValue('gray.300', 'gray.700');
  const border = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      border={'1px solid'}
      borderColor={border}
      borderRadius={'9px'}
      p={'1rem'}>
      <AspectRatio
        ratio={16 / 9}
        w={'100%'}>
        <ReactPlayer
          url={videoUrl}
          width={'100%'}
          height={'100%'}
          controls={true}
        />
      </AspectRatio>
    </Box>
  );
}
