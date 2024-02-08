'use client';

// hooks
import { useWindowWidth } from '@/app/_lib/hooks/useWindowWidth';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';
import { useState, useEffect } from 'react';
import { useAnimate } from 'framer-motion';

// components
import { Box, Link, Image, Heading, Text, Tag } from '@chakra-ui/react';

export default function ProductCard({ product }) {
  const [scope, animate] = useAnimate();
  const windowSize = useWindowWidth();
  const isMobile = useIsMobile();

  const slug = product.slug;
  const mainImage = product.main_image;
  const hasAdditionalImages = product.additional_images !== null;

  const limitedEdition = product.limited_edition;
  const numEditions = product.num_editions;
  const numAvailable = product.num_available;
  const collection = product.collection;

  const onSale = product.on_sale;

  const [hovering, setHovering] = useState(false);

  const [additionalImages, setAdditionalImages] = useState(
    hasAdditionalImages ? [mainImage, ...product.additional_images] : null
  );

  useEffect(() => {
    const hoveringAnimation = animate(
      scope.current,
      {
        opacity: hovering ? 1 : 0,
      },
      { ease: 'easeInOut' }
    );

    const handleHover = () => {
      setHovering(true);
    };

    const handleLeave = () => {
      setHovering(false);
    };

    if (scope.current) {
      scope.current.addEventListener('mouseenter', handleHover);
      scope.current.addEventListener('mouseleave', handleLeave);
    }

    if (hasAdditionalImages) {
      setAdditionalImages([mainImage, ...product.additional_images]);
    }

    const currentScope = scope.current;

    return () => {
      hoveringAnimation.stop();
      if (currentScope) {
        currentScope.removeEventListener('mouseenter', handleHover);
        currentScope.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, [product, hasAdditionalImages, hovering, animate, mainImage, scope]);

  const collectionName =
    collection === null ? 'Exclusive Collection' : 'General Release';

  const imageWidth = !isMobile ? windowSize / 3.5 : windowSize / 2.5;
  const imageHeight = imageWidth * 1.25;

  const cardStyles = {
    borderBottom:
      collection === 'Exclusive'
        ? 'var(--exclusive-border)'
        : collection == 'General'
        ? 'none'
        : 'var(--collection-border)',
  };

  const imageStyles = {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const tagStyles = {
    backgroundColor:
      collection === 'Exclusive'
        ? 'var(--orange-lightest)'
        : collection == 'General'
        ? 'transparent'
        : 'var(--pink-light)',
    border:
      collection === 'Exclusive'
        ? '1px solid var(--orange-mid)'
        : collection == 'General'
        ? 'var(--blue-light-border)'
        : 'none',
  };

  const saleStyles = {
    textDecoration: 'line-through',
  };

  return (
    <Box
      mb={{ base: '1rem' }}
      w={'fit-content'}
      maxW={'45%'}>
      <Link
        maxW={'fit-content'}
        href={`/shop/${slug}`}
        position={'relative'}>
        <Image
          zIndex={1}
          src={mainImage}
          width={imageWidth}
          height={imageHeight}
          style={cardStyles}
          alt={`image for ${product.name}`}
        />
        <Image
          src={additionalImages[1]}
          width={imageWidth}
          height={imageHeight}
          style={imageStyles}
          alt={`image for ${product.name}`}
          ref={scope}
        />
      </Link>

      <Box mt={'1rem'}>
        <Link
          href={`/shop/${slug}`}
          maxW={'fit-content'}>
          <Heading
            mb={'0.1rem'}
            size={'md'}>
            {product.name}
          </Heading>
          <Text mb={'0.5rem'}>
            <span style={onSale ? saleStyles : null}>
              ${product.price.toFixed(2)}
            </span>{' '}
            <span>{onSale ? `$${product.sale_price.toFixed(2)}` : ''}</span>
          </Text>
        </Link>
        <Box fontSize={{ base: '0.7rem', md: '0.8rem' }}>
          {limitedEdition ? (
            <Box>
              <Tag
                size={'sm'}
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
                size={'sm'}
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
        {collection !== null && (
          <Link href={`shop/collections/${collection.toLowerCase()}`}>
            <Text style={tagStyles}>{collectionName}</Text>
          </Link>
        )}
      </Box>
    </Box>
  );
}
