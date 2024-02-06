'use client';

// recoil
import { useSetRecoilState } from 'recoil';
import { loadingState } from '@/app/loading';

// hooks
import { useEffect } from 'react';

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
import { MoveRight } from 'lucide-react';

export default function OrderSuccess() {
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

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
            _hover={{
              outline: '1px solid var(--lightOrange, #F8AD4F)',
            }}
            mr={'1rem'}
            background={'var(--lightBlue)'}>
            Continue Shopping
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
