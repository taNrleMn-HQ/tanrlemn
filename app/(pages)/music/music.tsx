'use client';

// images
import whiteSpotify from '@/public/logos/Spotify_Full_Logo_RGB_White.png';
import blackSpotify from '@/public/logos/Spotify_Full_Logo_RGB_Black.png';
import whiteAppleMusic from '@/public/logos/US-UK_Apple_Music_Listen_on_Lockup_all-wht_100617.svg';
import blackAppleMusic from '@/public/logos/US-UK_Apple_Music_Listen_on_Lockup_all-blk_100617.svg';
import whiteYouTubeMusic from '@/public/logos/music_lockup_standard_144pt_rgb_white.svg';
import blackYouTubeMusic from '@/public/logos/music_lockup_standard_144pt_rgb_black.svg';

// hooks
import { atom, useRecoilState } from 'recoil';

// chakra-ui
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

type StreamingService = 'spotify' | 'appleMusic' | 'youtubeMusic';

const streamingServiceState = atom({
  key: 'streamingServiceState',
  default: 'spotify',
});

export default function Music() {
  const [streamingService, setStreamingService] = useRecoilState(
    streamingServiceState
  );

  const updateStreamingService = (service: StreamingService) => {
    setStreamingService(service);
  };

  const spotifyLogo = useColorModeValue(blackSpotify, whiteSpotify);
  const appleMusicLogo = useColorModeValue(blackAppleMusic, whiteAppleMusic);
  const youtubeMusicLogo = useColorModeValue(
    blackYouTubeMusic,
    whiteYouTubeMusic
  );
  const borderColor = useColorModeValue('black', 'white');

  return (
    <Box p={{ base: '3rem 0', md: '6rem 3rem' }} fontSize={'1.1rem'}>
      <Container
        maxW={'750px'}
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}
      >
        <Flex
          mb={'2rem'}
          gap={{ base: '1rem', md: '2rem' }}
          borderBottom={'1px solid'}
          pb={'1rem'}
        >
          <Flex
            align={'center'}
            justify={'center'}
            w={'120px'}
            borderRadius={'12px'}
            p={'0.5rem'}
            outline={streamingService === 'spotify' ? '1px solid' : 'none'}
            borderColor={borderColor}
          >
            <Image
              src={spotifyLogo.src}
              cursor={'pointer'}
              alt='Spotify logo'
              onClick={() => updateStreamingService('spotify')}
            />
          </Flex>
          <Flex
            align={'center'}
            justify={'center'}
            w={'120px'}
            borderRadius={'12px'}
            p={'0.5rem'}
            outline={streamingService === 'appleMusic' ? '1px solid' : 'none'}
            borderColor={borderColor}
          >
            <Image
              src={appleMusicLogo.src}
              cursor={'pointer'}
              alt='Apple Music logo'
              onClick={() => updateStreamingService('appleMusic')}
            />
          </Flex>
          <Flex
            align={'center'}
            justify={'center'}
            w={'120px'}
            borderRadius={'12px'}
            p={'0.5rem'}
            outline={streamingService === 'youtubeMusic' ? '1px solid' : 'none'}
            borderColor={borderColor}
          >
            <Image
              src={youtubeMusicLogo.src}
              cursor={'pointer'}
              alt='YouTube Music logo'
              onClick={() => updateStreamingService('youtubeMusic')}
            />
          </Flex>
        </Flex>
        {streamingService === 'spotify' && (
          <Box>
            <Box h={{ base: '70vh', md: '450px' }} mb={'2rem'}>
              <iframe
                style={{ borderRadius: '12px' }}
                src='https://open.spotify.com/embed/album/2HxOuLrTAvE2woAgj4uVlN?utm_source=generator'
                width='100%'
                height='100%'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              ></iframe>
            </Box>
            <Box h={{ base: '70vh', md: '450px' }} mb={'2rem'}>
              <iframe
                style={{ borderRadius: '12px' }}
                src='https://open.spotify.com/embed/album/1OAxxhFvQsoSlkWnSILllF?utm_source=generator'
                width='100%'
                height='100%'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              ></iframe>
            </Box>
            <Box h={{ base: '70vh', md: '450px' }} mb={'2rem'}>
              <iframe
                style={{ borderRadius: '12px' }}
                src='https://open.spotify.com/embed/album/4KNOSPgZSHxyC2N5zINBfW?utm_source=generator'
                width='100%'
                height='100%'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              ></iframe>
            </Box>
          </Box>
        )}
        {streamingService === 'appleMusic' && (
          <Box>
            <Box
              h={{ base: '60vh', md: '450px' }}
              mb={'2rem'}
              borderRadius={'12px'}
            >
              <iframe
                allow='autoplay *; encrypted-media *;'
                height='100%'
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  background: 'transparent',
                  borderRadius: '12px',
                }}
                sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
                src='https://embed.music.apple.com/us/album/shit-aint-real/1790598873'
              ></iframe>
            </Box>
            <Box h={{ base: '60vh', md: '450px' }} mb={'2rem'}>
              <iframe
                allow='autoplay *; encrypted-media *;'
                height='100%'
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  background: 'transparent',
                  borderRadius: '12px',
                }}
                sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
                src='https://embed.music.apple.com/us/album/whales-ep/1790593885'
              ></iframe>
            </Box>
            <Box h={{ base: '60vh', md: '450px' }} mb={'2rem'}>
              <iframe
                allow='autoplay *; encrypted-media *;'
                height='100%'
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  background: 'transparent',
                  borderRadius: '12px',
                }}
                sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
                src='https://embed.music.apple.com/us/album/average/1790691173'
              ></iframe>
            </Box>
          </Box>
        )}
        {streamingService === 'youtubeMusic' && (
          <Box>
            <Heading size={'lg'}>Shit Ain&apos;t Real</Heading>
            <Heading size={'md'} mb={'1rem'} fontWeight={500} opacity={0.7}>
              taNrleMn
            </Heading>
            <Box h={'450px'} mb={'2rem'}>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/videoseries?si=RxTQiMf4fCFUJjll&amp;list=OLAK5uy_mUQ023YdQfjQi0cRxP-INNZDx8JRqDmos'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
            </Box>
            <Heading size={'lg'}>Average</Heading>
            <Heading size={'md'} mb={'1rem'} fontWeight={500} opacity={0.7}>
              taNrleMn
            </Heading>
            <Box h={'450px'} mb={'2rem'}>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/videoseries?si=-e8zw1viAvTtds9i&amp;list=OLAK5uy_l5VSZJ04_ZVVMUTpeldqneMPLx_G_NO44'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
