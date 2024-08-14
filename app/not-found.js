'use client';

// chakra-ui
import {
  Box,
  Button,
  Container,
  Link,
  Text,
  Heading,
  Tag,
} from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Container p={'5rem 1rem'}>
      <Tag
        size={'md'}
        textTransform={'uppercase'}
        colorScheme={'pink'}
        mb={'0.5rem'}
        maxW={'fit-content'}
      >
        404
      </Tag>
      <Heading maxW={'500px'} mb={'1rem'} size={'3xl'} fontWeight={800}>
        Oops... That&apos;s an error
      </Heading>
      <Text mb={'2rem'}>
        We couldn&apos;t find the page you were looking for. Please try again.
      </Text>
      <Box>
        <Link mb={'2rem'} maxW={'fit-content'} href={'/'}>
          <Button
            _hover={{
              outline: '1px solid',
              outlineColor: 'pink.300',
            }}
            mr={'1rem'}
            colorScheme={'blue'}
          >
            Return home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
