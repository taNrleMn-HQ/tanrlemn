'use client';

// recoil
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { shopProductsSelector } from '@/app/_state/selectors';
import { loadingState } from '@/app/loading';

// hooks
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryState } from 'next-usequerystate';

// components
import ProductCard from '@/app/_components/products/productCard';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useProducts } from '@/app/_lib/hooks/useProducts';

export default function Shop() {
  useProducts();
  const shopProducts = useRecoilValue(shopProductsSelector);

  const [category, setCategory] = useQueryState('category');

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
      {shopProducts !== null && (
        <Box>
          <Box mb={'1.5rem'}>
            <Heading>{categoryText[category]}</Heading>
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
