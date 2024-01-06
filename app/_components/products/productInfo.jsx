'use client';

import 'react-slideshow-image/dist/styles.css';

// recoil
import { useSetRecoilState } from 'recoil';
import { loadingState } from '@/app/loading';

// hooks
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { useWindowWidth } from '@/app/_lib/hooks/useWindowWidth';

// components
import { Slide } from 'react-slideshow-image';

// chakra-ui
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Link,
  VStack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useDisclosure,
  Text,
  Tag,
} from '@chakra-ui/react';

// local components
import ToCartModal from '../cart/toCartModal';
import { MoveLeft } from 'lucide-react';
import { useCart } from '@/app/_lib/hooks/useCart';

export default function ProductInfo({ product, collection }) {
  const setLoading = useSetRecoilState(loadingState);

  product = product.product;
  const { numCartItems, addUpdateItem } = useCart();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useIsMobile();

  const windowWidth = useWindowWidth();
  const imageWidth = isMobile ? windowWidth - 40 : windowWidth / 3.7;
  const imageHeight = imageWidth * 1.25;

  const mainImage = product.image_url;
  const [currentImage, setCurrentImage] = useState(0);
  const [currentProductConfig, setCurrentProductConfig] = useState({
    qty: 1,
    size: '8 x 12',
    color: 'Multi',
    collection: collection,
  });
  const [additionalImages, setAdditionalImages] = useState(null);
  const [imageElements, setImageElements] = useState(null);
  const hasAdditionalImages = product.additional_images !== null;
  const limitedEdition = product.limited_edition;
  const numEditions = product.num_editions;
  const numAvailable = product.num_available;

  let artworkDate = new Date(product.artwork_date);
  artworkDate = artworkDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    if (additionalImages === null) {
      if (hasAdditionalImages) {
        setAdditionalImages([mainImage, ...product.additional_images]);
      } else {
        setAdditionalImages([mainImage]);
      }
    }

    if (additionalImages !== null && imageElements === null) {
      setImageElements(
        additionalImages.map((image) => {
          return (
            <Image
              position={'sticky'}
              top={'9rem'}
              key={image}
              src={image}
              width={'auto'}
              height={imageHeight}
              alt={`image for ${product.title}`}
            />
          );
        })
      );
      setLoading(false);
    }
  }, [
    product,
    hasAdditionalImages,
    currentImage,
    additionalImages,
    imageWidth,
    imageHeight,
    mainImage,
    imageElements,
    setLoading,
  ]);

  const sliderImages = () => {
    const images = [];
    if (additionalImages === null) {
      images.push({ url: mainImage });
      return images;
    }
    for (let i = 0; i < additionalImages.length; i++) {
      images.push({ url: additionalImages[i] });
    }

    return images;
  };

  const onSale = product.on_sale;

  collection =
    collection !== null
      ? collection.collection.charAt(0).toUpperCase() +
        collection.collection.slice(1)
      : null;

  const collectionTagName =
    collection === 'Exclusive'
      ? `${collection} Collection – Hug & Up`
      : `${collection} Collection`;

  const tagStyles = {
    backgroundColor:
      collection === 'Exclusive'
        ? 'var(--lightestOrange)'
        : collection == 'General'
        ? 'transparent'
        : 'var(--lightPink)',
    border:
      collection === 'Exclusive'
        ? '1px solid var(--midOrange)'
        : collection == 'General'
        ? '1px solid var(--lightBlue)'
        : 'none',
    marginLeft: '-0.2em',
  };

  const currentImageStyles = {
    outline: '1px solid var(--lightOrange)',
    outlineOffset: '0.5rem',
  };

  const saleStyles = {
    textDecoration: 'line-through',
  };

  const sliderOptions = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 300,
    arrows: true,
    infinite: true,
    easing: 'ease',
    showIndicators: false,
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    addUpdateItem({
      item: product,
      options: currentProductConfig,
      fromCart: false,
    });
    onOpen();
  };

  return (
    <>
      <Link href={'/shop'}>
        <Button
          variant={'ghost'}
          mb={'2rem'}>
          <Flex
            gap={'0.3rem'}
            align={'center'}>
            <MoveLeft size={17} />
            <Text>Back to shop</Text>
          </Flex>
        </Button>
      </Link>
      {product !== null && (
        <Flex
          justify={'flex-start'}
          minW={'100%'}
          gap={'3rem'}>
          {!isMobile && (
            <Flex
              gap={'2rem'}
              h={'fit-content'}
              w={'fit-content'}
              position={'relative'}>
              {hasAdditionalImages && additionalImages !== null && (
                <VStack
                  gap={'1rem'}
                  w={'fit-content'}>
                  {additionalImages.map((imageUrl, index) => (
                    <Box
                      w={'10rem'}
                      cursor={'pointer'}
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      style={
                        index === currentImage ? currentImageStyles : null
                      }>
                      <Image
                        src={imageUrl}
                        width={'100%'}
                        height={'auto'}
                        alt={`image for ${product.title}`}
                      />
                    </Box>
                  ))}
                </VStack>
              )}
              {currentImage !== null && imageElements !== null && (
                <Flex
                  maxH={'fit-content'}
                  justify={'center'}
                  w={imageWidth}>
                  {imageElements[currentImage]}
                </Flex>
              )}
            </Flex>
          )}
          <Box w={{ base: '100%', md: 'fit-content' }}>
            <VStack
              position={{ base: 'relative', md: 'sticky' }}
              top={{ base: '0', md: '9rem' }}
              flexGrow={1}
              align={'flex-start'}>
              <Heading>{product.title}</Heading>
              <Stat
                maxH={'fit-content'}
                flex={0}>
                <StatLabel>{artworkDate}</StatLabel>
                <StatNumber>
                  <span style={onSale ? saleStyles : null}>
                    ${product.price.toFixed(2)}
                  </span>{' '}
                  <span>
                    {onSale ? `$${product.sale_price.toFixed(2)}` : ''}
                  </span>
                </StatNumber>
              </Stat>
              <Box fontSize={{ base: '0.7rem', md: '0.8rem' }}>
                {limitedEdition ? (
                  <Box>
                    <Tag
                      ml={'-0.25rem'}
                      textTransform={'uppercase'}
                      colorScheme={'purple'}
                      fontSize={'1.1em'}
                      fontWeight={500}>
                      Limited edition
                    </Tag>
                    <Text>
                      {numEditions} prints {`(${numAvailable} remaining)`}
                    </Text>
                  </Box>
                ) : (
                  <Box>
                    <Tag
                      ml={'-0.25rem'}
                      textTransform={'uppercase'}
                      fontSize={'1.1em'}
                      mb={'0.25rem'}
                      fontWeight={500}>
                      General release
                    </Tag>
                    <Text>Unlimited prints available</Text>
                  </Box>
                )}
              </Box>
              {!isMobile && collection !== null && (
                <div>
                  <Link href={`/shop/collections/${collection.toLowerCase()}`}>
                    <div style={tagStyles}>{collectionTagName}</div>
                  </Link>
                </div>
              )}
              {isMobile && (
                <>
                  <Box w={'100%'}>
                    {currentImage !== null && additionalImages !== null && (
                      <Slide {...sliderOptions}>
                        {sliderImages().map((slideImage) => {
                          return (
                            <Image
                              key={slideImage.url}
                              src={slideImage.url}
                              width={'100%'}
                              height={'auto'}
                              alt={`image for ${product.title}`}
                              style={{ objectFit: 'cover' }}
                            />
                          );
                        })}
                      </Slide>
                    )}
                  </Box>
                  {collection !== null && (
                    <div>
                      <Link
                        href={`/shop/collections/${collection.toLowerCase()}`}>
                        <div style={tagStyles}>{collectionTagName}</div>
                      </Link>
                    </div>
                  )}
                </>
              )}
              {collection !== null && (
                <Link href={`/shop/collections/${collection.toLowerCase()}`}>
                  See all of the {collection} Collection
                </Link>
              )}
              <Heading size={'md'}></Heading>
              <FormControl>
                <FormLabel htmlFor='size'>Size*</FormLabel>
                <Box
                  mb={'1rem'}
                  maxW={'fit-content'}
                  borderRadius='sm'
                  outline={'1px solid var(--lightGreen)'}
                  outlineOffset={'0.2rem'}
                  background={'var(--lightGreen50)'}
                  px={5}
                  py={3}>
                  {currentProductConfig.size}
                </Box>
                <FormLabel htmlFor='qty'>Qty*</FormLabel>
                {currentProductConfig.qty && (
                  <NumberInput
                    onChange={(valueString) => {
                      setCurrentProductConfig({
                        ...currentProductConfig,
                        qty: Number(valueString),
                      });
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
                )}
                <Button
                  colorScheme={'blue'}
                  size={'lg'}
                  onClick={(e) => {
                    handleAddToCart(e);
                  }}>
                  Add to bag
                </Button>
                {collection !== null && (
                  <Link href={`/shop/collections/${collection.toLowerCase()}`}>
                    <div>Shop related items</div>
                  </Link>
                )}
              </FormControl>
              <ToCartModal
                product={product}
                collection={collection}
                isOpen={isOpen}
                onClose={onClose}
                numCartItems={numCartItems}
              />
            </VStack>
          </Box>
        </Flex>
      )}
    </>
  );
}
