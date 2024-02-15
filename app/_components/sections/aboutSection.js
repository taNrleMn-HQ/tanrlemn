'use client';

// images
const whaleriderSrc = 'https://i.imgur.com/fNISTWSl.jpg';
const ownerSrc = 'https://i.imgur.com/v3TtoGIl.jpg';

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
  Highlight,
} from '@chakra-ui/react';

export default function AboutSection() {
  const highlightColor = useColorModeValue('purple.500', 'purple.200');
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      p={{ base: '2rem 1rem' }}
      mb={{ base: '3rem' }}
      align={'center'}
      textAlign={'center'}
      justify={'center'}>
      <Stack
        align={'center'}
        maxW={{ base: '100%', md: '650px' }}
        mb={{ base: '3rem', md: '0' }}>
        <Tag
          textTransform={'uppercase'}
          size={'sm'}
          maxW={'fit-content'}
          colorScheme={'purple'}>
          About the artist
        </Tag>
        <Heading
          mb={'0.5rem'}
          size={'2xl'}
          fontWeight={800}>
          The space between.
        </Heading>
        <Text>
          <Highlight
            query={'taNrleMn'}
            styles={{ color: highlightColor, fontWeight: 600 }}>
            taNrleMn consistently finds himself in a struggle between the desire
            to be himself and the gravity of the world around him. His art is a
            reflection of this struggle, noting the beauty in the space between
            the two.
          </Highlight>
        </Text>
        <Text>
          Although he often finds himself in a state of confusion, he is
          comforted by the fact that he is not alone. His art is a call to
          others who are also struggling, a reminder that they are not alone.
        </Text>
        <Text mb={'1rem'}>
          <Highlight
            query={"taNrleMn's"}
            styles={{ color: highlightColor, fontWeight: 600 }}>
            taNrleMn&apos;s work spans across multiple mediums, including music,
            visual art, woodworking, and more. He is currently accepting
            commissions for visual art and music production.
          </Highlight>
        </Text>
        <Flex>
          <Link
            href={'/about'}
            maxW={'fit-content'}>
            <Button
              mr={'1rem'}
              colorScheme={'purple'}>
              Learn more
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Flex>
  );
}
