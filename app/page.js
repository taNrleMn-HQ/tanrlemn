'use client';

// images
const whaleriderSrc = 'https://i.imgur.com/fNISTWSl.jpg';
const ownerSrc = 'https://i.imgur.com/v3TtoGIl.jpg';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Tag,
  Link,
} from '@chakra-ui/react';
import { BookImage, MoveRight } from 'lucide-react';
import HeroImage from './_components/images/heroImage';

export default function Home() {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      p={{ base: '4rem 1rem', md: ' 4rem 1rem' }}
      align={'center'}
      justify={'space-around'}>
      <Stack
        maxW={{ base: '100%', md: '550px' }}
        p={{ base: '0', md: '2rem' }}
        mb={{ base: '3rem', md: '0' }}>
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
            background: 'green.100',
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
              mr={'1rem'}
              colorScheme={'purple'}>
              Shop now
            </Button>
          </Link>
          <Link href={'/gallery'}>
            <Button
              colorScheme={'gray'}
              leftIcon={<BookImage size={20} />}>
              View works
            </Button>
          </Link>
        </Flex>
      </Stack>
      <Stack
        m={{ base: '0', md: '1rem' }}
        mr={{ base: '0' }}
        p={{ base: '0', md: '1rem' }}
        borderRadius={'9px'}>
        <Flex>
          <HeroImage
            mr={'1rem'}
            h={{ base: '100%', md: '22rem' }}
            w={{ base: '100%', md: '17rem' }}
            src={ownerSrc}
            alt='Owner painting'
          />
          <HeroImage
            h={{ base: '100%', md: '22rem' }}
            w={{ base: '100%', md: '17rem' }}
            src={whaleriderSrc}
            alt='Whalerider painting'
            mr={'0'}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
