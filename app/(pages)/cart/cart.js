'use client';

// hooks
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryState } from 'nuqs';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { useCart } from '@/app/_lib/hooks/useCart';

// chakra-ui
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

// local components
import CartItem from '@/app/_components/cart/cartItem';
import CheckoutForm from '@/app/_components/cart/checkoutForm';
import OrderSuccess from '@/app/_components/cart/orderSuccess';

export default function Cart() {
  const [isClient, setIsClient] = useState(false);

  const { cart, numCartItems, clearCart } = useCart();

  const isMobile = useIsMobile();

  const [success, setSuccess] = useState(false);
  const [successParam] = useQueryState('success');
  const [canceledParam] = useQueryState('canceled');

  const router = useRouter();

  const toast = useToast();

  useEffect(() => {
    if (successParam === 'true') {
      if (!success) {
        clearCart();
        setSuccess(true);
      }
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (canceledParam === 'true') {
      router.replace('/cart', undefined, { shallow: true });
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
    }
  }, [
    successParam,
    canceledParam,
    router,
    cart,
    numCartItems,
    clearCart,
    success,
    toast,
  ]);

  const borderColor = useColorModeValue('orange.200', 'gray.600');

  return (
    <Box>
      {success && <OrderSuccess />}
      {isClient && (
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
                    borderBottom={'1px solid'}
                    borderBottomColor={borderColor}>
                    <Box mb={'1rem'}>
                      <Heading>Shopping Bag</Heading>
                    </Box>
                  </Box>
                  {numCartItems > 0 ? (
                    <>
                      {!isMobile && (
                        <Grid
                          borderBottom={'1px solid'}
                          borderBottomColor={borderColor}
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
                            <Text textAlign={'right'}>Item Price</Text>
                          </GridItem>
                          <GridItem w={'100%'}>
                            <Text textAlign={'right'}>Quantity</Text>
                          </GridItem>
                          <GridItem w={'100%'}>
                            <Text textAlign={'right'}>Total Price</Text>
                          </GridItem>
                        </Grid>
                      )}
                      {cart &&
                        cart.length > 0 &&
                        cart.map((item) => {
                          return (
                            <GridItem
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
      )}
    </Box>
  );
}
