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
  Tag,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';
import { MoveRight } from 'lucide-react';

export default function Error({ error, reset }) {
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    console.error(error);
    setLoading(false);
  }, [error, setLoading]);

  return (
    <Container p={'5rem 1rem'}>
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
        <Link
          mb={'2rem'}
          maxW={'fit-content'}
          href={'/'}>
          <Button
            variant={'ghost'}
            _hover={{
              background: 'var(--lightBlue)',
            }}
            mr={'1rem'}>
            Return home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
