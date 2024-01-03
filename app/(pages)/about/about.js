'use client';

// images
const aboutTannerSrc = 'https://i.imgur.com/BFWf7ku.jpg';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

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
} from '@chakra-ui/react';
import { MoveRight } from 'lucide-react';

export default function About() {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Box
      p={{ base: '3rem 0', md: '6rem 3rem' }}
      fontSize={'1.1rem'}>
      <Container
        maxW={'650px'}
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}>
        <Stack
          pb={'3rem'}
          borderBottom={'1px solid var(--gray)'}
          mb={'4rem'}
          w={'100%'}>
          <Tag
            size={'sm'}
            textTransform={'uppercase'}
            colorScheme={'purple'}
            maxW={'fit-content'}>
            Some words about
          </Tag>
          <Heading size={'lg'}>The brain of an artist</Heading>
          <Heading
            mb={'1rem'}
            size={'4xl'}
            fontWeight={800}
            color={'var(--purple)'}>
            A world that never sleeps.
          </Heading>

          <Text maxW={'750px'}>
            <Highlight
              query={'taNrleMn'}
              styles={{
                fontWeight: 600,
              }}>
              taNrleMn is an oil painter who is passionately committed to
              capturing the vibrancy of the world around us. As a self-taught
              artist with over a decade of experience, he continuously evolves
              his craft.
            </Highlight>
          </Text>
          <Text mb={'2rem'}>
            With a curious mind, he always seeks new ideas and innovative ways
            to express himself. Currently, he is fully immersed in the creative
            process, diligently working on his latest projects. Each canvas
            holds a unique story waiting to be unveiled.
          </Text>
          <Link
            mb={'2rem'}
            maxW={'fit-content'}
            href={'/commissions'}>
            <Button
              _hover={{
                outline: '1px solid var(--lightOrange, #F8AD4F)',
                borderRadius: 'var(--mainBorderRadius)',
              }}
              mr={'1rem'}
              rightIcon={<MoveRight />}
              background={'var(--midOrange)'}>
              Request a commission
            </Button>
          </Link>
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
              }}>
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
              }}>
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
              }}>
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
