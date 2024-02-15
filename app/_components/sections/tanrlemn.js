'use client';

// images
const featuredSrc = 'https://i.imgur.com/lfKDiOmh.jpg';

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

export default function TaNrLeMnSection() {
  const highlightColor = useColorModeValue('purple.700', 'purple.200');
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
      <Flex
        mb={{ base: '3rem', md: '0' }}
        justify={'center'}
        flexGrow={1}>
        <Image
          src={featuredSrc}
          objectFit={'cover'}
          borderRadius={'9px'}
          alt={'Featured Art by taNrleMn'}
          maxH={'80vh'}
        />
      </Flex>
      <Container
        maxW={{ base: '100%', md: '50%' }}
        p={{ base: '0', md: '2rem' }}
        mb={{ base: '3rem', md: '0' }}>
        <Tag mb={'0.5rem'}>taNrleMn</Tag>
        <Heading
          mb={'1rem'}
          size={'2xl'}>
          A passion for the human condition.
        </Heading>
        <Text mb={'2rem'}>
          <Highlight
            query={'taNrleMn'}
            styles={{ fontWeight: 600, color: highlightColor }}>
            taNrleMn is a self-taught artist with a passion for the human
            condition. He explores the unity of shared pain and the
            transformative power of connection. His work is a reflection of his
            own journey through depression and anxiety, and the healing power of
            art.
          </Highlight>
        </Text>
        <Link
          href={'/shop'}
          maxW={'fit-content'}>
          <Button
            mr={'1rem'}
            colorScheme={'purple'}>
            Shop now
          </Button>
        </Link>
      </Container>
    </Flex>
  );
}
