'use client';

// hooks
import { useEffect, useState, useContext } from 'react';

// components
import ProductInfo from '@/app/_components/products/productInfo';
import { Box } from '@chakra-ui/react';

export default function Product({ slug }) {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`/api/supabase/getProducts/${slug}`);
      const data = await res.json();
      setCurrentProduct(data);
      // setLoading(false);
    };

    if (currentProduct === null) {
      getProduct();
    }
  }, [currentProduct, slug]);

  return (
    <Box
      p={{
        base: '2rem 1rem',
        md: '2rem 2rem',
      }}>
      {currentProduct !== null && (
        <ProductInfo
          product={currentProduct}
          collection={null}
        />
      )}
    </Box>
  );
}
