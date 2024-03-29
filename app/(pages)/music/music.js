'use client';

// links
const appleMusicUrl = 'https://apple.co/49xP3Nl';
const spotifyUrl =
  'https://open.spotify.com/artist/1vO08UW05aPIydvqERrsOa?si=Gd48nhI_R-28fCQ6HeWJsA';
const soundcloudUrl = 'https://on.soundcloud.com/6D248';

// images
const aboutTannerSrc = 'https://i.imgur.com/4JF82yZh.jpg';
const spotifyLogo = '/logos/spotify.png';
const appleMusicLogoWhite = '/logos/appleMusic.svg';
const appleMusicLogoBlack = '/logos/appleMusic-black.svg';
const soundcloudLogo = '/logos/soundcloud.png';

// hooks
import { useState, useEffect, useRef } from 'react';
import { useQueryState } from 'nuqs';

// chakra-ui
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Tag,
  Link,
  Container,
  Button,
  Highlight,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

// local components
import SoundCloudPlayer from '@/app/_components/interactive/soundcloudPlayer';
import YouTubePlayer from '@/app/_components/interactive/youtubePlayer';

export default function Music() {
  const soundcloudRef = useRef();
  const youtubeRef = useRef();

  const [scrollto, setScrollto] = useQueryState('scrollto');
  const [isClient, setIsClient] = useState(false);
  const color = useColorModeValue('purple.500', 'purple.300');

  useEffect(() => {
    setIsClient(true);

    console.log('scrollto:', scrollto);

    if (scrollto === 'soundcloud' && soundcloudRef.current) {
      console.log('scrolling to soundcloud');
      soundcloudRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      setScrollto(null);
    }

    if (scrollto === 'youtube' && youtubeRef.current) {
      youtubeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      setScrollto(null);
    }
  }, [scrollto, setScrollto, youtubeRef, soundcloudRef, isClient]);

  return (
    <Box
      p={{ base: '3rem 0', md: '6rem 3rem' }}
      fontSize={'1.1rem'}>
      <Container
        maxW={'900px'}
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}>
        <Flex
          flexDir={{ base: 'column-reverse', md: 'row' }}
          pb={'3rem'}
          borderBottom={'1px solid'}
          mb={'4rem'}
          borderBottomColor={'gray.200'}
          w={'100%'}
          align={'center'}
          gap={'2rem'}>
          <Stack>
            <Tag
              size={'sm'}
              textTransform={'uppercase'}
              colorScheme={'purple'}
              maxW={'fit-content'}>
              The Land of the Living
            </Tag>
            <Heading
              mb={'0.5rem'}
              size={'4xl'}
              fontWeight={800}
              color={color}>
              Fake it til you make it.
            </Heading>
            <Text maxW={'750px'}>
              <Highlight
                query={'Fake Pete'}
                styles={{
                  fontWeight: 600,
                  color: color,
                }}>
                Fake Pete, a vocalist and producer from the Midwest, creates
                music that is introspective yet danceable. His sound, a blend of
                hip-hop, electronic, and indie rock, is influenced by artists
                ranging from Kendrick Lamar to Lorde.
              </Highlight>
            </Text>
            <Flex
              gap={{ base: '1rem', md: '2rem' }}
              mt={'2rem'}
              align={'center'}
              wrap={'wrap'}>
              <Link
                href={spotifyUrl}
                target='_blank'>
                <Button
                  variant={'ghost'}
                  p={'0.25rem'}
                  w={'100px'}
                  h={'40px'}>
                  <Image
                    objectFit={'contain'}
                    src={spotifyLogo}
                    alt={'Spotify'}
                  />
                </Button>
              </Link>
              <Link
                href={appleMusicUrl}
                target='_blank'>
                <Button
                  variant={'ghost'}
                  p={'0.25rem'}
                  w={'100px'}
                  h={'40px'}>
                  <Image
                    objectFit={'contain'}
                    src={useColorModeValue(
                      appleMusicLogoBlack,
                      appleMusicLogoWhite
                    )}
                    alt={'Apple Music'}
                  />
                </Button>
              </Link>
              <Link
                href={soundcloudUrl}
                target='_blank'>
                <Button
                  p={'0.25rem'}
                  variant={'ghost'}
                  w={'100px'}
                  h={'40px'}>
                  <Image
                    filter={useColorModeValue('none', 'invert(1)')}
                    objectFit={'contain'}
                    src={soundcloudLogo}
                    alt={'Soundcloud'}
                  />
                </Button>
              </Link>
            </Flex>
          </Stack>
        </Flex>

        {isClient && (
          <>
            <Box
              ref={soundcloudRef}
              mb={'4rem'}
              id='soundcloud'>
              <Heading mb={'1rem'}>Listen to Fake Pete</Heading>
              <SoundCloudPlayer />
            </Box>
            <Box ref={youtubeRef}>
              <Heading mb={'1rem'}>Watch Fake Pete</Heading>
              <YouTubePlayer />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
