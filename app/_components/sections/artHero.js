'use client';

// images
const whaleriderSrc = 'https://i.imgur.com/fNISTWSl.jpg';
const ownerSrc = 'https://i.imgur.com/v3TtoGIl.jpg';
import etsyOrange from '@/public/logos/etsy.png';
import estyWhite from '@/public/logos/etsy-white.png';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Tag,
  Link,
  useColorModeValue,
  Image,
  VStack,
} from '@chakra-ui/react';
import { BookImage, ExternalLink, MoveRight } from 'lucide-react';
import HeroImage from '../images/heroImage';

export default function ArtHero() {
  const tagBg = useColorModeValue('gray.100', 'gray.700');
  const etsyLogo = useColorModeValue(etsyOrange, estyWhite);
  const textColor = useColorModeValue('gray.600', 'gray.400');

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
            background: tagBg,
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
          He strives to uncover the true essence of humanity through intricate
          embellishments and natural elements.
        </Text>
        <Flex>
          <VStack
            m={0}
            mr={'1rem'}
            w={'fit-content'}
            gap={0}>
            <Link
              href='https://tanrlemnxyz.etsy.com'
              isExternal>
              <Button
                colorScheme={'gray'}
                rightIcon={<ExternalLink size={15} />}>
                <Image
                  src={etsyLogo.src}
                  alt={'Etsy'}
                  objectFit={'contain'}
                  w={'3rem'}
                />
              </Button>
            </Link>
            <Text
              mt={'0.25rem'}
              color={textColor}
              fontSize={'0.75rem'}>
              Shop prints
            </Text>
          </VStack>
          <Link href={'/gallery'}>
            <Button
              colorScheme={'gray'}
              variant={'outline'}
              leftIcon={<BookImage size={15} />}>
              View works
            </Button>
          </Link>
        </Flex>
      </Stack>
      <Stack
        maxW={{ base: '100%', md: '50%' }}
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
