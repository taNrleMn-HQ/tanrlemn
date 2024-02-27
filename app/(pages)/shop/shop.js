'use client';

// images
import etsyOrange from '@/public/logos/etsy.png';
import estyWhite from '@/public/logos/etsy-white.png';

// chakra-ui
import {
  Image,
  Heading,
  Text,
  Button,
  Link,
  Container,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { ExternalLink } from 'lucide-react';

// components

export default function Shop() {
  const etsyLogo = useColorModeValue(etsyOrange, estyWhite);
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Container
      minH={{ base: '70vh', md: '65vh' }}
      p={{
        base: '5rem 1rem',
        md: '6rem 2rem',
      }}>
      <Heading mb={'0.5rem'}>Shop taNrleMn</Heading>
      <Text mb={'1.5rem'}>
        View taNrleMn&apos;s Etsy store to purchase artwork and prints.
      </Text>
      <VStack
        m={0}
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
    </Container>
  );
}
