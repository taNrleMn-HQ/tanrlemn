'use client';

// chakra-ui
import { Flex, Heading, Link, Box } from '@chakra-ui/react';

// local components
import Underscore from './underscore';

export default function Logo({
  color = 'gray.700',
  shouldLink = true,
  text = 'taNrleMn',
  p = '0.3125rem 1.4375rem',
}) {
  return (
    <>
      {shouldLink ? (
        <Link
          pt={'0.2rem'}
          mr={'1.25rem'}
          href='/'
          _hover={{ textDecoration: 'none' }}
          textDecoration={'none'}>
          <LogoContent
            color={color}
            text={text}
            p={p}
          />
        </Link>
      ) : (
        <LogoContent
          color={color}
          text={text}
          p={p}
        />
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
        outlineColor: 'purple.300',
      }}
      align={'flex-end'}
      p={p}>
      <Box pb={'0.3rem'}>
        <Underscore />
      </Box>
      <Heading
        mr={'0.125rem'}
        color={color}
        fontWeight={700}
        lineHeight={'1.56288rem'}
        letterSpacing={'-0.02688rem'}
        size={'md'}>
        {text}
      </Heading>
    </Flex>
  );
};
