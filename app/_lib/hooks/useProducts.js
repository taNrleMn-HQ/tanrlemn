'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { productsState } from '@/app/_state/atoms';

export const useProducts = () => {
  const [products, setProducts] = useRecoilState(productsState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductData = async () => {
      const res = await fetch('/api/stripe/products');
      const { data } = await res.json();

      setProducts(data);
      setLoading(false);
    };

    if (products === null) {
      getProductData();
    }
  }, [setProducts, products]);

  return { loading };
};
