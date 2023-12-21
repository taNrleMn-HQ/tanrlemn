'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';

// local components
import StripeHigherPricingTable from '@/app/_components/products/stripeHigherPricingTable';
import StripeLowerPricingTable from '@/app/_components/products/stripeLowerPricingTable';
import { MoveRight } from 'lucide-react';

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
          <StripeHigherPricingTable />
        </Box>
      </Box>
      <Divider
        mb={'4rem'}
        borderColor={'var(--lighterOrange)'}
      />
      <Box
        h={'fit-content'}
        mb={'5rem'}>
        <VStack>
          <Heading
            top={'0'}
            size={'md'}
            mb={'2rem'}
            textAlign={'center'}>
            Basic Subscriptions
          </Heading>
        </VStack>
        <StripeLowerPricingTable />
      </Box>
    </Box>
  );
}
