'use client';

// images
const promoImageSrc = 'https://i.imgur.com/5cBCS98h.jpg';

// links
const promoLink = 'https://artists.landr.com/fp-not-scared';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Tag,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { Headphones, MoveRight } from 'lucide-react';
import HeroImage from '../images/heroImage';

export default function MusicHero() {
  const tagBg = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      p={{ base: '4rem 1rem', md: ' 4rem 1rem' }}
      align={'center'}
      justify={'space-around'}>
      <Stack
        maxW={{ base: '100%', md: '550px' }}
        p={{ base: '0', md: '2rem' }}
        mb={{ base: '3rem', md: '0' }}>
        <Link
          target='_blank'
          maxW={'fit-content'}
          borderRadius={'full'}
          p={'0.35rem 1rem 0.35rem 0.5rem'}
          pl={0}
          mb={'0.35rem'}
          href={promoLink}
          display={'flex'}
          transition={'all 0.2s ease-in-out'}
          _hover={{
            textDecoration: 'none',
            background: tagBg,
            padding: '0.35rem 1.5rem 0.35rem 0.5rem',
          }}>
          <Tag
            mr={'0.5rem'}
            textTransform={'uppercase'}
            size={'sm'}
            fontWeight={500}
            maxW={'fit-content'}
            colorScheme={'blue'}
            borderRadius={'full'}>
            Live on Feb 23
          </Tag>
          <Flex align={'center'}>
            <Text
              mr={'0.5rem'}
              fontSize={'0.85rem'}>
              Pre-save now
            </Text>
            <MoveRight size={15} />
          </Flex>
        </Link>
        <Heading
          mb={'0.5rem'}
          size={'4xl'}
          fontWeight={800}>
          Not Scared
        </Heading>
        <Text mb={'1rem'}>A new single from Fake Pete</Text>
        <Flex>
          <Link
            href={'/music?scrollto=soundcloud'}
            maxW={'fit-content'}>
            <Button
              mr={'1rem'}
              colorScheme={'purple'}
              leftIcon={<Headphones size={17} />}>
              Early access
            </Button>
          </Link>
          <Link href={'/music'}>
            <Button colorScheme={'gray'}>Learn more</Button>
          </Link>
        </Flex>
      </Stack>
      <Stack
        maxW={{ base: '100%', md: '50%' }}
        m={{ base: '0', md: '1rem' }}
        mr={{ base: '0' }}
        p={{ base: '0', md: '1rem' }}
        borderRadius={'9px'}>
        <HeroImage
          h={{ base: '22rem', md: '22rem' }}
          w={{ base: '22rem', md: '22rem' }}
          mr={0}
          src={promoImageSrc}
          alt='Promo image for an upcoming Fake Pete release'
        />
      </Stack>
    </Flex>
  );
}
