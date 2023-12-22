'use client'; // Error components must be Client Components

import { Box, Button, Container, Tag, Text } from '@chakra-ui/react';
import { Heading } from 'lucide-react';
// hooks
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container p={'5rem 0'}>
      <Tag
        size={'md'}
        textTransform={'uppercase'}
        colorScheme={'red'}
        maxW={'fit-content'}>
        Error
      </Tag>
      <Heading
        maxW={'500px'}
        mb={'1rem'}
        size={'4xl'}
        fontWeight={800}>
        Oops... That&apos;s an error
      </Heading>
      <Text mb={'2rem'}>
        We couldn&apos;t make that request. Please try again.
      </Text>
      <Box>
        <Button
          _hover={{
            outline: '1px solid var(--lightOrange, #F8AD4F)',
            borderRadius: 'var(--mainBorderRadius)',
          }}
          onClick={() => reset()}
          mr={'1rem'}
          background={'var(--midOrange)'}>
          Try again
        </Button>
      </Box>
    </Container>
  );
}
