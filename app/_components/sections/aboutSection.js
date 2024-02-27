'use client';

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
import { MoveRight } from 'lucide-react';

export default function AboutSection() {
  const highlightColor = useColorModeValue('purple.500', 'purple.200');
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      p={{ base: '4rem 1rem' }}
      mb={{ base: '3rem' }}
      align={'center'}
      justify={'center'}>
      <Stack
        maxW={{ base: '100%', md: '650px' }}
        mb={{ base: '3rem', md: '0' }}>
        <Tag
          textTransform={'uppercase'}
          size={'sm'}
          mb={'0.5rem'}
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
            commissions for visual artworks.
          </Highlight>
        </Text>
        <Flex
          wrap={'wrap'}
          gap={'1rem'}>
          <Link
            href={'/about'}
            maxW={'fit-content'}
            mr={'1rem'}>
            <Button colorScheme={'purple'}>Learn more</Button>
          </Link>
          <Link
            href={'/commissions'}
            maxW={'fit-content'}>
            <Button
              rightIcon={<MoveRight size={17} />}
              mr={'1rem'}
              colorScheme={'gray'}>
              Request a commission
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Flex>
  );
}
