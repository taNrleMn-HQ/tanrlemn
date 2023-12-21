'use client';

// images
import whalerider from '@/public/images/paintings/whalerider.webp';
import owner from '@/public/images/paintings/owner.webp';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useContext, useEffect } from 'react';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Tag,
  Skeleton,
  Link,
} from '@chakra-ui/react';
import { BookImage, Brush, MoveRight, Paintbrush2 } from 'lucide-react';
import HeroImage from './_components/images/heroImage';

export default function Home() {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      p={{ base: '4rem 1rem', md: '1rem' }}
      align={'center'}
      justify={'space-around'}
      background={'var(--lightestBlue30)'}>
      <Stack
        maxW={{ base: '100%', md: '550px' }}
        p={{ base: '0', md: '2rem' }}
        mb={{ base: '3rem', md: '0' }}>
        <Link
          maxW={'fit-content'}
          borderRadius={'full'}
          background={'var(--lightestGreen)'}
          p={'0.35rem 1rem 0.35rem 0.5rem'}
          mb={'0.35rem'}
          href={'/commissions'}
          display={'flex'}
          transition={'all 0.2s ease-in-out'}
          _hover={{
            textDecoration: 'none',
            background: 'var(--lightestGreen)',
            padding: '0.35rem 1.5rem 0.35rem 0.5rem',
          }}>
          <Tag
            mr={'0.5rem'}
            textTransform={'uppercase'}
            size={'sm'}
            fontWeight={500}
            maxW={'fit-content'}
            colorScheme={'blue'}
            borderRadius={'full'}>
            accepting commissions
          </Tag>
          <Flex align={'center'}>
            <Text
              mr={'0.5rem'}
              fontSize={'0.85rem'}>
              Send a request
            </Text>
            <MoveRight size={15} />
          </Flex>
        </Link>
        <Heading
          mb={'0.5rem'}
          size={'4xl'}
          fontWeight={800}>
          A tool for healing.
        </Heading>
        <Text mb={'1rem'}>
          taNrleMn&apos;s art explores the profound unity found in shared pain.
          It strives to uncover the true essence of humanity through intricate
          embellishments and natural elements.
        </Text>
        <Flex>
          <Link
            href={'/shop'}
            maxW={'fit-content'}>
            <Button
              _hover={{
                outline: '1px solid var(--lightOrange, #F8AD4F)',
                borderRadius: 'var(--mainBorderRadius)',
              }}
              mr={'1rem'}
              background={'var(--midOrange)'}>
              View shop
            </Button>
          </Link>
          <Link href={'/gallery'}>
            <Button
              _hover={{
                outline: '1px solid var(--lightOrange)',
                borderRadius: 'var(--mainBorderRadius)',
              }}
              colorScheme={'gray'}
              leftIcon={<BookImage size={20} />}>
              View my work
            </Button>
          </Link>
        </Flex>
      </Stack>
      <Stack
        m={{ base: '0', md: '1rem' }}
        mr={{ base: '0', md: '-7rem' }}
        p={{ base: '0', md: '1rem' }}
        borderRadius={'9px'}>
        <Flex>
          <Skeleton
            mr={'1rem'}
            isLoaded={!loading}
            h={{ base: '100%', md: '22rem' }}
            w={{ base: '100%', md: '17rem' }}>
            <HeroImage
              src={owner.src}
              alt='Owner painting'
              mr={'1rem'}
            />
          </Skeleton>
          <Skeleton
            isLoaded={!loading}
            h={{ base: '100%', md: '22rem' }}
            w={{ base: '100%', md: '17rem' }}>
            <HeroImage
              src={whalerider.src}
              alt='Whalerider painting'
              mr={'0'}
            />
          </Skeleton>
        </Flex>
      </Stack>
    </Flex>
  );
}
