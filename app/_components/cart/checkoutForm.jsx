'use client';

// recoil
import { useSetRecoilState } from 'recoil';
import { loadingState } from '@/app/loading';

// hooks
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrigin } from '@/app/_lib/hooks/useOrigin';
import { useCart } from '@/app/_lib/hooks/useCart';

// components
import {
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function CheckoutForm() {
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const { cart, numCartItems, cartTotal } = useCart();
  const [checkoutSession, setCheckoutSession] = useState(null);

  const [subtotal, setSubtotal] = useState(null);
  const [shipping, setShipping] = useState(null);
  const [tax, setTax] = useState(null);

  const { fullPagePath } = useOrigin();
  const router = useRouter();

  useEffect(() => {
    if (checkoutSession) {
      setLoadingCheckout(true);

      router.push(checkoutSession);
    }
    if (subtotal === null || shipping === null || tax === null) {
      if (cartTotal) {
        setSubtotal(cartTotal.subtotal);
        setShipping(cartTotal.shipping);
        setTax(cartTotal.tax);
      }
    }
    if (cartTotal) {
      if (subtotal !== cartTotal.subtotal) {
        setSubtotal(cartTotal.subtotal);
        setShipping(cartTotal.shipping);
        setTax(cartTotal.tax);
      }
    }
  }, [
    cart,
    numCartItems,
    checkoutSession,
    router,
    cartTotal,
    shipping,
    tax,
    subtotal,
    setLoadingCheckout,
  ]);

  const handleCheckout = async () => {
    const getCheckoutSession = async () => {
      const res = await fetch('/api/stripe/checkoutSession', {
        method: 'POST',
        body: JSON.stringify({
          origin: fullPagePath,
          cart: cart,
        }),
      });

      const sessionUrl = await res.json();

      setCheckoutSession(sessionUrl);
    };

    if (checkoutSession === null) {
      setLoadingCheckout(true);

      getCheckoutSession();
    }
  };

  const alignRight = {
    textAlign: 'right',
  };

  return (
    <FormControl
      p={'1rem'}
      position={{ base: 'relative', md: 'sticky' }}
      top={{ base: '0', md: '5rem' }}
      borderRadius={'var(--mainBorderRadius)'}
      border={'1px solid var(--lighterOrange)'}>
      <Heading size={'md'}>Order Summary</Heading>
      <Divider m={'0.75rem 0'} />
      {subtotal !== null &&
        tax !== null &&
        shipping !== null &&
        cartTotal !== null && (
          <>
            <VStack
              mb={'1rem'}
              align={'flex-start'}
              w={'100%'}>
              <Flex
                w={'100%'}
                justify={'space-between'}>
                <Text>Subtotal</Text>
                <Text style={alignRight}>{`$${subtotal.toFixed(2)}`}</Text>
              </Flex>
              <Flex
                w={'100%'}
                justify={'space-between'}>
                <Text>Shipping</Text>
                <Text style={alignRight}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </Text>
              </Flex>
              <Flex
                w={'100%'}
                justify={'space-between'}>
                <Text>Estimated Tax</Text>
                <Text style={alignRight}>{`$${tax.toFixed(2)}`}</Text>
              </Flex>
              <Flex
                w={'100%'}
                justify={'space-between'}
                color={'var(--darkest-gray)'}
                fontWeight={600}>
                <Text>Total</Text>
                <Text style={alignRight}>{`$${cartTotal.total.toFixed(
                  2
                )}`}</Text>
              </Flex>
            </VStack>
            <Button
              isLoading={loadingCheckout}
              w={'100%'}
              colorScheme={'blue'}
              onClick={(e) => handleCheckout(e)}>
              Proceed to Checkout
            </Button>
          </>
        )}
    </FormControl>
  );
}
