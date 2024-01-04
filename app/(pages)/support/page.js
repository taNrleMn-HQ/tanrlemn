'use client';

// context
import { LoadingContext } from '@/app/_lib/context/LoadingProvider';

// hooks
import { useContext, useEffect } from 'react';

// chakra-ui
import { Box } from '@chakra-ui/react';

export default function Support() {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return <Box minH={'50vh'}></Box>;
}
