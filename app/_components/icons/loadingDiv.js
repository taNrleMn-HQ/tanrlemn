'use client';

// recoil
import { atomFamily, useRecoilState } from 'recoil';

// hooks
import { useEffect } from 'react';

// chakra-ui
import { Box, Flex } from '@chakra-ui/react';

// local components
import Lottie from 'lottie-react';
import gooeyBalls from '@/app/_assets/lottie/gooeyBalls.json';

export const loadingDivStateFamily = atomFamily({
  key: 'loadingDivState',
  default: false,
});

export default function LoadingDiv({ id, isLoading }) {
  const [loadingDiv, setLoadingDiv] = useRecoilState(loadingDivStateFamily(id));

  useEffect(() => {
    setLoadingDiv(isLoading);
  }, [isLoading, setLoadingDiv]);

  return (
    <>
      {loadingDiv && (
        <Flex
          justify={'center'}
          align={'center'}
          position={'relative'}
          top={'0'}
          left={'0'}
          width={'100%'}
          height={'100%'}
          backdropFilter={'blur(1px)'}
          zIndex={'10000'}>
          <Box
            position={'relative'}
            maxW={'4rem'}>
            <Lottie
              animationData={gooeyBalls}
              loop={true}
            />
          </Box>
        </Flex>
      )}
    </>
  );
}
