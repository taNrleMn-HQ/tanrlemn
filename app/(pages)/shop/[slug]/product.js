'use client';

// recoil
import { useRecoilValue } from 'recoil';
import { singleProductSelector } from '@/app/_state/selectors';

// hooks
import { useProducts } from '@/app/_lib/hooks/useProducts';

// components
import ProductInfo from '@/app/_components/products/productInfo';
import { Box } from '@chakra-ui/react';

export default function Product({ slug }) {
  const { loading } = useProducts();

  const product = useRecoilValue(singleProductSelector(slug));

  return (
    <Box
      p={{
        base: '2rem 1rem',
        md: '2rem 2rem',
      }}>
      {!loading && product !== null && (
        <ProductInfo
          product={product}
          collection={null}
        />
      )}
    </Box>
  );
}
