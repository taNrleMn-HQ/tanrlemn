'use client';

// images
import logo from '@/app/_assets/donut-logo.svg';

// chakra-ui
import { Flex, Heading, Link, Box, useColorModeValue } from '@chakra-ui/react';

// local components
import Donut from './donut';

export default function Logo({ shouldLink = true, p = '0.3125rem 1.4375rem' }) {
  const text = 'taNrleMn';
  const color = useColorModeValue('gray.700', 'gray.300');
  return (
    <>
      {shouldLink ? (
        <Link
          pt={'0.2rem'}
          mr={'1.25rem'}
          href='/'
          _hover={{ textDecoration: 'none' }}
          textDecoration={'none'}
        >
          <LogoContent color={color} text={text} p={p} />
        </Link>
      ) : (
        <LogoContent color={color} text={text} p={p} />
      )}
    </>
  );
}

export const LogoContent = ({ color, text, p }) => {
  return (
    <Flex
      maxW={'fit-content'}
      minW={'fit-content'}
      pt={'0.2rem'}
      color={color}
      borderRadius={'9px'}
      _hover={{
        outline: '1px solid',
        outlineColor: 'pink.300',
      }}
      align={'center'}
      p={p}
    >
      <Box w={'2rem'} h={'2rem'} mr={'0.35rem'}>
        <Donut />
      </Box>
      <Heading
        mr={'0.125rem'}
        color={color}
        fontWeight={700}
        whiteSpace={'nowrap'}
        lineHeight={'1.56288rem'}
        letterSpacing={'-0.02688rem'}
        size={'md'}
      >
        {text}
      </Heading>
    </Flex>
  );
};
