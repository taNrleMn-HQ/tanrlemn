'use client';

// hooks
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryState } from 'nuqs';

// chakra-ui
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Tag,
  Text,
} from '@chakra-ui/react';

// local components
import LoadingDiv from './_components/interactive/loadingDiv';
import { StartScreen } from './_components/animations/startScreen';

export default function Home() {
  const [code] = useQueryState('code');

  return (
    <Container
      maxW={'100%'}
      p={0}>
      {code && code !== 'undefined' && code !== null ? (
        <LoadingDiv />
      ) : (
        <>
          <StartScreen />
        </>
      )}
    </Container>
  );
}
