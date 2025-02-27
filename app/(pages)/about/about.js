'use client';

// images
const aboutTannerSrc = 'https://i.imgur.com/o5olhWRh.png';

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
} from '@chakra-ui/react';
import { MoveRight } from 'lucide-react';

export default function About() {
  const color = useColorModeValue('purple.500', 'purple.300');
  return (
    <Box p={{ base: '3rem 0', md: '6rem 3rem' }} fontSize={'1.1rem'}>
      <Container
        maxW={'650px'}
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}
      >
        <Stack
          pb={'3rem'}
          borderBottom={'1px solid'}
          borderBottomColor={'gray.200'}
          mb={'4rem'}
          w={'100%'}
        >
          <Tag colorScheme={'pink'} maxW={'fit-content'}>
            I am an artist
          </Tag>
          <Heading mb={'1rem'} size={'3xl'} fontWeight={800}>
            Some words about my brain
          </Heading>

          <Text maxW={'750px'} mb={'0.5rem'}>
            My work is a reflection of the beauty and complexity of the human
            experience, exploring themes of identity, connection, and healing.
          </Text>
          <Text>
            I create art to inspire and uplift others, to encourage empathy and
            understanding, and to foster a sense of community and connection.
          </Text>
        </Stack>
        <Image
          src={aboutTannerSrc}
          alt={'Tanner Lemon'}
          w={{ base: '100%', md: '450px' }}
          borderRadius={'1rem'}
          mb={'3rem'}
        />
        <Box>
          <Heading mb={'1rem'}>Artist Statement</Heading>
          <Text mb={'1rem'}>
            In a world often clouded by assumptions, the truth tends to remain
            unseen. Within each individual, there are secrets and untold stories
            yearning to be expressed. There is always more...
          </Text>
          <Text mb={'1rem'}>
            <Highlight
              query={'taNrleMn'}
              styles={{
                fontWeight: 600,
                color: color,
              }}
            >
              As we navigate the pain passed down through generations, we
              journey through life in search of answers to heal or make the pain
              disappear. The artist, taNrleMn, strongly believes in the
              transformative power of connection and the importance of exploring
              the hidden depths of others to gain new perspectives on healing
              our own wounds. We are all teachers on this healing journey.
            </Highlight>
          </Text>
          <Text mb={'1rem'}>
            <Highlight
              query={'taNrleMn'}
              styles={{
                fontWeight: 600,
                color: color,
              }}
            >
              taNrleMn&apos;s artistry delves into the complex relationship
              between the profound pain that unites us and the visible, shared
              aspects of our lives. The artist strives to uncover the true
              essence of their subjects, using intricate embellishments that
              reflect their personalities or simple phrases and elements from
              nature.
            </Highlight>
          </Text>
          <Text mb={'1rem'}>
            <Highlight
              query={'taNrleMn'}
              styles={{
                fontWeight: 600,
                color: color,
              }}
            >
              People serve as beacons of inspiration, brimming with the beauty
              and anguish of existence. For taNrleMn, painting becomes a medium
              for sharing and mutual understanding—a tool to aid in the healing
              process.
            </Highlight>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
