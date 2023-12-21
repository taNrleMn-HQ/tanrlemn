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
import { MoveRight } from 'lucide-react';
import HeroImage from './_components/images/heroImage';

export default function Home() {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Flex
      p={'1rem'}
      align={'center'}
      justify={'space-around'}
      background={'var(--lightestBlue30)'}>
      <Stack
        maxW={{ base: '100%', md: '550px' }}
        p={{ base: '0', md: '2rem' }}
        mb={{ base: '2rem', md: '0' }}>
        <Link
          size={'lg'}
          maxW={'fit-content'}
          colorScheme={'blackAlpha'}
          borderRadius={'full'}
          href={'/commissions'}
          display={'flex'}
          transition={'all 0.2s ease-in-out'}
          _hover={{
            textDecoration: 'none',
            background: 'var(--lightestGreen)',
            padding: '0.25rem 1rem 0.25rem 0.5rem',
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
          Paint the space.
        </Heading>
        <Text mb={'1rem'}>
          A self-taught artist who&apos;s been painting for over 10 years,
          specializing in portrait painting using oil on canvas.
        </Text>
        <Flex>
          <Link href={'/shop'}>
            <Button
              _hover={{
                outline: '1px solid var(--lightOrange, #F8AD4F)',
                borderRadius: 'var(--mainBorderRadius)',
              }}
              mr={'1rem'}
              rightIcon={<MoveRight />}
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
              color={'var(--darkBlue)'}
              variant={'ghost'}>
              View my work
            </Button>
          </Link>
        </Flex>
      </Stack>
      <Stack
        m={'1rem'}
        mr={'-7rem'}
        p={'1rem'}
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
