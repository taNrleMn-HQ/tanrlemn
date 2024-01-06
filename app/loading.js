'use client';

// recoil
import { atom, useRecoilValue } from 'recoil';

// chakra-ui
import { Box, Flex } from '@chakra-ui/react';

// local components
import Lottie from 'lottie-react';
import gooeyBalls from '@/app/_assets/lottie/gooeyBalls.json';

export const loadingState = atom({
  key: 'loadingState',
  default: true,
});

export default function Loading() {
  const loading = useRecoilValue(loadingState);

  return (
    <>
      {loading && (
        <Box position={'relative'}>
          <Flex
            backdropFilter={'blur(1px)'}
            zIndex={'10000'}
            justify={'center'}
            align={'center'}
            top={'0'}
            left={'0'}
            width={'100vw'}
            height={'100vh'}
            position={'absolute'}>
            <Box
              position={'relative'}
              maxW={'4rem'}>
              <Lottie
                animationData={gooeyBalls}
                loop={true}
              />
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}
