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

export default function NotFound() {
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Container p={'5rem 1rem'}>
      <Tag
        size={'lg'}
        textTransform={'uppercase'}
        colorScheme={'red'}
        maxW={'fit-content'}>
        404
      </Tag>
      <Heading
        maxW={'500px'}
        mb={'1rem'}
        size={'4xl'}
        fontWeight={800}>
        Oops... That&apos;s an error
      </Heading>
      <Text mb={'2rem'}>
        We couldn&apos;t find the page you were looking for. Please try again.
      </Text>
      <Box>
        <Link
          mb={'2rem'}
          maxW={'fit-content'}
          href={'/'}>
          <Button
            _hover={{
              outline: '1px solid var(--lightOrange, #F8AD4F)',
            }}
            mr={'1rem'}
            background={'var(--lightBlue)'}>
            Return home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
