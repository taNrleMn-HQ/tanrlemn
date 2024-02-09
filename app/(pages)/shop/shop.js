'use client';

// recoil
import { useRecoilValue } from 'recoil';
import { shopProductsSelector } from '@/app/_state/selectors';

// hooks
import { useProducts } from '@/app/_lib/hooks/useProducts';

// chakra-ui
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

// components
import ProductCard from '@/app/_components/products/productCard';
import LoadingDiv from '@/app/_components/interactive/loadingDiv';

export default function Shop() {
  const { loading } = useProducts();
  const shopProducts = useRecoilValue(shopProductsSelector);

  const categoryText = {
    all: 'Shop All of taNrleMn',
    prints: 'Fine Art Prints',
    originals: 'Original Paintings by taNrleMn',
    apparel: 'taNrleMn Apparel',
    sale: 'Sale Items',
    default: 'The Official Shop – taNrleMn',
    null: 'The Official Shop – taNrleMn',
  };

  return (
    <Box
      p={{
        base: '2rem 1rem',
        md: '4rem 2rem',
      }}>
      {loading && (
        <LoadingDiv
          isLoading={loading}
          id={'shop'}
        />
      )}
      {shopProducts !== null && (
        <Box>
          <Box mb={'1.5rem'}>
            <Heading>{categoryText[null]}</Heading>
            <Text>
              {shopProducts.length === 1
                ? `${shopProducts.length} product`
                : `${shopProducts.length} products`}
            </Text>
          </Box>
          <Flex
            gap={{ base: '1.5rem' }}
            flexWrap={'wrap'}>
            {shopProducts.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  product={product}
                />
              );
            })}
          </Flex>
        </Box>
      )}
    </Box>
  );
}
