'use client';

// hooks
import { useEffect, useState } from 'react';

// chakra-ui
import {
  Box,
  Button,
  Heading,
  Link,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';

// components
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { MoveRight } from 'lucide-react';

// local components
import ArtworkCard from '@/app/_components/products/artworkCard';
import LoadingDiv from '@/app/_components/interactive/loadingDiv';

export default function Gallery() {
  const [artworks, setArtworks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch('/api/supabase/getArtworks');
      const data = await res.json();
      setArtworks(data.artworks);
      setLoading(false);
    };

    if (artworks === null) {
      getProjects();
    }
  }, [artworks]);

  return (
    <Box p={'4rem 0'}>
      {loading && (
        <LoadingDiv
          isLoading={loading}
          id={'gallery'}
        />
      )}
      {artworks !== null && (
        <>
          <VStack
            textAlign={'center'}
            w={'100%'}
            mb={'4rem'}
            h={'fit-content'}
            position={'relative'}>
            <VStack maxW={'550px'}>
              <Tag
                textTransform={'uppercase'}
                size={'sm'}
                fontWeight={500}
                maxW={'fit-content'}
                colorScheme={'green'}
                borderRadius={'full'}>
                accepting commissions
              </Tag>
              <Heading textAlign={'center'}>Artwork by taNrleMn</Heading>
              <Text mb={'1.5rem'}>
                These works range in creation date from early 2014 to the
                present. They traverse a plethora of identities and styles.
              </Text>
              <Link
                maxW={'fit-content'}
                href={'/commissions'}>
                <Button
                  colorScheme={'purple'}
                  mr={'1rem'}
                  rightIcon={<MoveRight />}>
                  Request a commission
                </Button>
              </Link>
            </VStack>
          </VStack>
          <Box p={'1rem'}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter={'0.75rem'}>
                {artworks.map((artwork) => {
                  return (
                    <ArtworkCard
                      key={artwork.id}
                      artwork={artwork}
                    />
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
          </Box>
        </>
      )}
    </Box>
  );
}
