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

export default function OrderSuccess() {
  return (
    <Container p={'5rem 1rem'}>
      <Tag
        size={'md'}
        textTransform={'uppercase'}
        colorScheme={'green'}
        mb={'0.5rem'}
        maxW={'fit-content'}>
        Woo!
      </Tag>
      <Heading
        maxW={'500px'}
        mb={'1rem'}
        size={'4xl'}
        fontWeight={800}>
        Your order has been placed!
      </Heading>
      <Text mb={'2rem'}>You will receive an email confirmation shortly.</Text>
      <Box>
        <Link
          mb={'2rem'}
          maxW={'fit-content'}
          href={'/shop'}>
          <Button
            colorScheme={'blue'}
            mr={'1rem'}>
            Continue Shopping
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
