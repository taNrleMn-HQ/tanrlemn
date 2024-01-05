'use client';

// context
import { CartContext } from '@/app/_lib/context/CartProvider';

// hooks
import { useState, useContext, useEffect } from 'react';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { useWindowWidth } from '@/app/_lib/hooks/useWindowWidth';

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
  Divider,
  VStack,
} from '@chakra-ui/react';

export default function CartItem({ item }) {
  const { updateCart, removeFromCart } = useContext(CartContext);

  const product = item.product;

  const [currentProductConfig, setCurrentProductConfig] = useState({
    qty: item.qty,
    totalPrice: item.qty * product.price,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(currentProductConfig.qty * product.price);
  }, [currentProductConfig.qty, product.price]);

  const handleUpdateCart = (qty) => {
    if (product) {
      updateCart({ productName: product.title, qty: qty });
    }
    setTotalPrice(product.price * qty);
  };

  const isMobile = useIsMobile();
  const windowWidth = useWindowWidth();
  const imageWidth = isMobile ? windowWidth / 4 : 190;
  const imageHeight = 'auto';

  const onSale = product.on_sale;

  const alignRight = {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const removeItemStyle = {
    textAlign: 'right',
    cursor: 'pointer',
    color: 'var(--medium-gray)',
    fontSize: '0.75em',
    marginBottom: '5px',
  };

  const saleStyles = {
    textDecoration: 'line-through',
  };

  return (
    <Grid
      borderBottom={'1px solid var(--lightestOrange)'}
      pb={'1.5rem'}
      templateColumns={{
        base: '1fr 2fr 1fr',
        md: '1fr 2fr repeat(3, 1fr)',
      }}
      gap={'1rem'}
      w={'100%'}>
      <GridItem>
        <Link href={`/shop/${item.product.slug}`}>
          <Image
            src={product.small_thumbnail}
            alt={product.title}
            width={'auto'}
            height={'auto'}
          />
        </Link>
      </GridItem>
      <GridItem>
        <Link href={`/shop/${product.slug}`}>
          <Heading
            mb={'0.5rem'}
            size={'md'}>
            {product.title}
          </Heading>
        </Link>
        {item.collection && (
          <Text>
            <strong>Collection:</strong> {item.collection}
          </Text>
        )}
        <Text>
          <strong>Color:</strong> {item.color}
        </Text>
        <Text>
          <strong>Size:</strong> {item.size}
        </Text>
        {isMobile && (
          <NumberInput
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
              <span>{onSale ? `$${product.sale_price.toFixed(2)}` : ''}</span>
              <span style={onSale ? saleStyles : null}>
                ${product.price.toFixed(2)}
              </span>
            </Text>
          </GridItem>
          <GridItem>
            <NumberInput
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
                ? `$${(product.sale_price * currentProductConfig.qty).toFixed(
                    2
                  )}`
                : ''}
            </span>
            <span style={onSale ? saleStyles : null}>
              {`$${totalPrice.toFixed(2)}`}
            </span>
          </Text>
          <Text
            style={removeItemStyle}
            onClick={() => removeFromCart({ productId: product.id })}>
            Remove
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  );
}
