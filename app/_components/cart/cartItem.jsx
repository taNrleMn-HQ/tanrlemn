'use client';

// hooks
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { useCart } from '@/app/_lib/hooks/useCart';

// components
import {
  Grid,
  GridItem,
  Image,
  Link,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Heading,
  VStack,
} from '@chakra-ui/react';

// local components
import LoadingDiv from '@/app/_components/interactive/loadingDiv';

export default function CartItem({ item }) {
  const [loadingDiv, setLoadingDiv] = useState(false);

  const { addUpdateItem, deleteItem } = useCart();

  const currentProductConfig = item.options;

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(currentProductConfig.qty * item.price);
  }, [currentProductConfig.qty, item.price]);

  const handleUpdateCart = (qty) => {
    setLoadingDiv(true);
    if (item) {
      addUpdateItem({
        item,
        options: { ...currentProductConfig, qty },
        setLoadingDiv,
      });
    }
    setTotalPrice(item.price * qty);
  };

  const handleRemoveFromCart = () => {
    setLoadingDiv(true);
    deleteItem({ item, setLoadingDiv });
  };

  const isMobile = useIsMobile();

  const onSale = item.on_sale;

  const alignRight = {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const saleStyles = {
    textDecoration: 'line-through',
  };

  return (
    <Grid
      borderBottom={'1px solid'}
      borderColor={'orange.200'}
      pb={'1.5rem'}
      templateColumns={{
        base: '1fr 2fr 1fr',
        md: '1fr 2fr repeat(3, 1fr)',
      }}
      gap={'1rem'}
      w={'100%'}>
      {loadingDiv ? (
        <LoadingDiv
          id={item.id}
          isLoading={loadingDiv}
        />
      ) : (
        <>
          <GridItem>
            <Link href={`/shop/${item.slug}`}>
              <Image
                src={item.main_image}
                alt={item.name}
                width={'auto'}
                height={'auto'}
              />
            </Link>
          </GridItem>
          <GridItem>
            <Link href={`/shop/${item.slug}`}>
              <Heading
                mb={'0.5rem'}
                size={'md'}>
                {item.name}
              </Heading>
            </Link>
            {item.collection && (
              <Text>
                <strong>Collection:</strong> {item.collection}
              </Text>
            )}
            <Text>
              <strong>Color:</strong> {item.options.color}
            </Text>
            <Text>
              <strong>Size:</strong> {item.options.size}
            </Text>
            {isMobile && (
              <NumberInput
                onChange={(valueString) => {
                  handleUpdateCart(Number(valueString));
                }}
                mt={'0.5rem'}
                maxW={'fit-content'}
                defaultValue={currentProductConfig.qty}
                min={1}
                max={20}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            )}
          </GridItem>
          {!isMobile && (
            <>
              <GridItem>
                <Text style={alignRight}>
                  <span>{onSale ? `$${item.sale_price.toFixed(2)}` : ''}</span>
                  <span style={onSale ? saleStyles : null}>
                    ${item.price.toFixed(2)}
                  </span>
                </Text>
              </GridItem>
              <GridItem>
                <NumberInput
                  float={'right'}
                  onChange={(valueString) => {
                    handleUpdateCart(Number(valueString));
                  }}
                  maxW={'8rem'}
                  mb={'2rem'}
                  defaultValue={currentProductConfig.qty}
                  min={1}
                  max={20}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </GridItem>
            </>
          )}

          <GridItem
            w={'100%'}
            h={'100%'}>
            <VStack
              w={'100%'}
              h={'100%'}
              align={'flex-end'}
              justify={{ base: 'space-between', md: 'flex-start' }}>
              <Text textAlign={'right'}>
                <span>
                  {onSale
                    ? `$${(item.sale_price * currentProductConfig.qty).toFixed(
                        2
                      )}`
                    : ''}
                </span>
                <span style={onSale ? saleStyles : null}>
                  {`$${totalPrice.toFixed(2)}`}
                </span>
              </Text>
              <Text
                textAlign={'right'}
                cursor={'pointer'}
                color={'gray.700'}
                fontSize={'0.75em'}
                marginBottom={'5px'}
                onClick={() => {
                  handleRemoveFromCart();
                }}>
                Remove
              </Text>
            </VStack>
          </GridItem>
        </>
      )}
    </Grid>
  );
}
