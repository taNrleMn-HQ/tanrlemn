'use client';

import artworks from '@/app/_assets/artworks.json';

// hooks
import { useEffect, useState } from 'react';

// chakra-ui
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

// components
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { MoveRight } from 'lucide-react';

// local components
import ArtworkCard from '@/app/_components/works/artworkCard';

export default function Gallery() {
  const [sortedArtworks, setSortedArtworks] = useState(null);
  const tagBg = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    const sorted = artworks.sort((a, b) => {
      return new Date(b.artwork_date) - new Date(a.artwork_date);
    });
    setSortedArtworks(sorted);
  }, []);
  return (
    <Box p={'4rem 0'}>
      {sortedArtworks && (
        <>
          <VStack
            textAlign={'center'}
            w={'100%'}
            mb={'4rem'}
            h={'fit-content'}
            position={'relative'}
          >
            <VStack maxW={'550px'}>
              <Link
                maxW={'fit-content'}
                borderRadius={'full'}
                p={'0.35rem 1rem 0.35rem 0.5rem'}
                pl={0}
                mb={'0.35rem'}
                href={'/commissions'}
                display={'flex'}
                transition={'all 0.2s ease-in-out'}
                _hover={{
                  textDecoration: 'none',
                  background: tagBg,
                  padding: '0.35rem 1.5rem 0.35rem 0.5rem',
                }}
              >
                <Tag
                  mr={'0.5rem'}
                  textTransform={'uppercase'}
                  size={'sm'}
                  fontWeight={500}
                  maxW={'fit-content'}
                  colorScheme={'green'}
                  borderRadius={'full'}
                >
                  accepting commissions
                </Tag>
                <Flex align={'center'}>
                  <MoveRight size={15} />
                </Flex>
              </Link>
              <Heading textAlign={'center'}>Artwork by taNrleMn</Heading>
              <Text mb={'1.5rem'}>
                These works range in creation date from early 2019 to the
                present. They traverse a plethora of identities and styles.
              </Text>
            </VStack>
          </VStack>
          <Box p={'1rem'}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter={'0.75rem'}>
                {sortedArtworks.map((artwork) => {
                  return <ArtworkCard key={artwork.id} artwork={artwork} />;
                })}
              </Masonry>
            </ResponsiveMasonry>
          </Box>
        </>
      )}
    </Box>
  );
}
