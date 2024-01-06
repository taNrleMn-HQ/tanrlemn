'use client';

// recoil
import { useRecoilState } from 'recoil';
import { loadingState } from '@/app/loading';

// hooks
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { useCart } from '@/app/_lib/hooks/useCart';

// chakra-ui
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';

// local components
import CartItem from '@/app/_components/cart/cartItem';
import CheckoutForm from '@/app/_components/cart/checkoutForm';
import OrderSuccess from '@/app/_components/cart/orderSuccess';

export default function Cart() {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useRecoilState(loadingState);

  const { cart, numCartItems, clearCart } = useCart();

  const isMobile = useIsMobile();

  const [success, setSuccess] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const toast = useToast();

  useEffect(() => {
    if (searchParams.get('success')) {
      if (!success) {
        clearCart();
        setSuccess(true);
      }
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (searchParams.get('canceled')) {
      router.replace('/cart');
      setSuccess(false);

      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );

      const toastId = 'order-canceled';

      if (!toast.isActive(toastId)) {
        toast({
          id: toastId,
          title: 'Order canceled.',
          description:
            'Continue to shop around and checkout when you’re ready.',
          status: 'warning',
          duration: 9000,
          isClosable: true,
        });
      }
    }

    if (cart !== null) {
      setIsClient(true);
      setLoading(false);
    }
  }, [
    searchParams,
    router,
    cart,
    numCartItems,
    clearCart,
    success,
    setLoading,
    toast,
  ]);

  const alignRight = {
    textAlign: 'right',
  };

  const mobileBorder = {
    borderBottom: 'var(--blue-light-border)',
  };

  return (
    <Box>
      {success && <OrderSuccess />}
      {isClient ? (
        <>
          {!success && cart !== null && (
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              w={'100%'}
              p={{ base: '1rem', md: '2rem' }}>
              <Box
                flexGrow={1}
                mr={{ base: 0, md: '2rem' }}>
                <Box w={'100%'}>
                  <Box
                    w={'100%'}
                    mb={'1.5rem'}
                    borderBottom={'1px solid var(--lighterOrange)'}>
                    <Box
                      mb={'1rem'}
                      style={mobileBorder}>
                      <Heading>Shopping Bag</Heading>
                    </Box>
                  </Box>
                  {numCartItems > 0 ? (
                    <>
                      {!isMobile && (
                        <Grid
                          borderBottom={'var(--blue-light-border)'}
                          mb={'1rem'}
                          templateColumns={'1fr 2fr repeat(3, 1fr)'}
                          gap={5}
                          w={'100%'}
                          direction='row'
                          justifyContent='space-between'
                          alignItems='center'>
                          <GridItem w={'100%'}></GridItem>
                          <GridItem w={'100%'}>
                            <Text>Item</Text>
                          </GridItem>
                          <GridItem w={'100%'}>
                            <Text style={alignRight}>Item Price</Text>
                          </GridItem>
                          <GridItem w={'100%'}>
                            <Text style={alignRight}>Quantity</Text>
                          </GridItem>
                          <GridItem w={'100%'}>
                            <Text style={alignRight}>Total Price</Text>
                          </GridItem>
                        </Grid>
                      )}
                      {cart &&
                        cart.length > 0 &&
                        cart.map((item) => {
                          return (
                            <GridItem
                              borderBottom={'var(--blue-light-border)'}
                              pb={'1rem'}
                              mb={'1rem'}
                              key={item.id}>
                              <CartItem item={item} />
                            </GridItem>
                          );
                        })}
                    </>
                  ) : (
                    <Box m={'2rem'}>
                      <Heading
                        size={'lg'}
                        mt={'1rem'}>
                        Nothing here...
                      </Heading>
                      <Text>Your shopping bag is empty!</Text>

                      <Link href={'/shop'}>
                        <Button
                          mt={'1rem'}
                          colorScheme={'blue'}>
                          Fill your bag
                        </Button>
                      </Link>
                    </Box>
                  )}
                </Box>
              </Box>
              {numCartItems > 0 && (
                <Box minW={{ base: '100%', md: '17rem' }}>
                  <CheckoutForm />
                </Box>
              )}
            </Flex>
          )}
        </>
      ) : (
        <Box m={'2rem'}>
          <Heading
            size={'lg'}
            mt={'1rem'}>
            Loading...
          </Heading>
          <Text>Hang tight while we load your cart.</Text>
        </Box>
      )}
    </Box>
  );
}
