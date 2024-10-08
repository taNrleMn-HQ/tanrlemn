'use client';

// hooks
import { useEffect } from 'react';

// chakra-ui
import {
  Box,
  Button,
  Container,
  Tag,
  Text,
  Heading,
  Link,
  Code,
} from '@chakra-ui/react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container p={'5rem 1rem'}>
      <Tag
        size={'md'}
        textTransform={'uppercase'}
        colorScheme={'red'}
        maxW={'fit-content'}
      >
        Error
      </Tag>
      <Heading maxW={'500px'} mb={'1rem'} size={'3xl'} fontWeight={800}>
        Oops... That&apos;s an error
      </Heading>
      <Text mb={'0.5rem'}>
        We couldn&apos;t make that request. Please try again.
      </Text>
      <Code mb={'2rem'} colorScheme={'red'}>
        Error: {error.name}
        <br /> Message: {error.message}
      </Code>
      <Box>
        <Button onClick={() => reset()} mr={'1rem'} colorScheme={'pink'}>
          Try again
        </Button>
        <Link mb={'2rem'} maxW={'fit-content'} href={'/'}>
          <Button variant={'ghost'} colorScheme={'blue'} mr={'1rem'}>
            Return home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
