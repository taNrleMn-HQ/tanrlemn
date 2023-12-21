'use client';

// chakra-ui
import { Flex, Heading, Link, Box } from '@chakra-ui/react';

// local components
import Underscore from './underscore';

export default function Logo({
  color = 'var(--midGray)',
  shouldLink = true,
  animate = false,
  isDesktop = false,
  text = 'taNrleMn',
}) {
  return (
    <>
      {shouldLink ? (
        <Link
          pt={isDesktop ? 0 : '0.2rem'}
          mr={isDesktop ? 0 : '1.25rem'}
          href='/'
          _hover={{ textDecoration: 'none' }}
          textDecoration={'none'}>
          <LogoContent
            color={color}
            text={text}
          />
        </Link>
      ) : (
        <LogoContent
          color={color}
          animate={animate}
          text={text}
        />
      )}
    </>
  );
}

export const LogoContent = ({ color, animate, text }) => {
  return (
    <Flex
      maxW={'fit-content'}
      minW={'fit-content'}
      pt={'0.2rem'}
      color={color}
      borderRadius={'var(--mainBorderRadius)'}
      _hover={{
        outline: '1px solid var(--neonBlue)',
      }}
      align={'flex-end'}
      p={'0.3125rem 1.4375rem'}>
      <Box
        pb={'0.3rem'}
        className={animate && 'animateUnderscore'}>
        <Underscore color={'var(--orange)'} />
      </Box>
      <Heading
        mr={'0.125rem'}
        className={animate && 'animateText'}
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
