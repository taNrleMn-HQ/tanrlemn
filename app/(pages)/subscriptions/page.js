'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import { Box, Heading, Tag, VStack } from '@chakra-ui/react';

// local components
import StripePricingTable from '@/app/_components/products/stripePricingTable';

export default function Subscriptions() {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Box
      p={{ base: '2rem 1rem', md: '4rem 1rem' }}
      background={'var(--lightestBlue)'}>
      <Box
        mb={'4rem'}
        position={'relative'}>
        <VStack>
          <Tag
            mr={'0.5rem'}
            textTransform={'uppercase'}
            size={'sm'}
            fontWeight={500}
            maxW={'fit-content'}
            colorScheme={'orange'}
            borderRadius={'full'}>
            Subscribe & Save
          </Tag>
          <Heading
            w={'100%'}
            h={'fit-content'}
            top={'19rem'}
            mb={'2rem'}
            textAlign={'center'}>
            Premium Subscriptions
          </Heading>
        </VStack>
        <Box
          background={'var(--lightBlue)'}
          borderRadius={'var(--mainBorderRadius)'}
          p={'2rem 1rem'}>
          <StripePricingTable />
        </Box>
      </Box>
    </Box>
  );
}
