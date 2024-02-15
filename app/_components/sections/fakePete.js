'use client';

// images
const featuredSrc = 'https://i.imgur.com/vum03cY.gif';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Button,
  Tag,
  Link,
  useColorModeValue,
  Container,
  Image,
  Highlight,
} from '@chakra-ui/react';

export default function FakePeteSection() {
  const highlightColor = useColorModeValue('purple.500', 'purple.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      mb={{ base: '3rem' }}
      borderBottom={'1px solid'}
      borderColor={borderColor}
      p={{ base: '4rem 1rem', md: ' 2rem 1rem 4rem 1rem' }}
      direction={{ base: 'column', md: 'row' }}
      w={'100%'}
      justify={'center'}
      align={'center'}>
      <Container
        maxW={{ base: '100%', md: '50%' }}
        p={{ base: '0', md: '2rem' }}
        mb={{ base: '3rem', md: '0' }}>
        <Tag mb={'0.5rem'}>Fake Pete</Tag>
        <Heading
          mb={'1rem'}
          size={'2xl'}>
          Music for the __.
        </Heading>
        <Text mb={'2rem'}>
          <Highlight
            query={'Fake Pete'}
            styles={{ fontWeight: 600, color: highlightColor }}>
            Fake Pete makes [insert statement about music here].
          </Highlight>
        </Text>
        <Link
          href={'/shop'}
          maxW={'fit-content'}>
          <Button
            mr={'1rem'}
            colorScheme={'purple'}>
            Listen now
          </Button>
        </Link>
      </Container>
      <Flex
        mb={{ base: '3rem', md: '0' }}
        justify={'flex-start'}>
        <Image
          src={featuredSrc}
          objectFit={'cover'}
          borderRadius={'9px'}
          alt={'Featured Art by taNrleMn'}
          maxW={{ base: '100%', md: '500px' }}
        />
      </Flex>
    </Flex>
  );
}
