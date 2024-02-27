'use client';

// hooks
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// chakra-ui
import { Box } from '@chakra-ui/react';

export default function Cart() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/shop', undefined, { shallow: true });
  }, [router]);

  return <Box></Box>;
}
