// Code: StartScreen component

// recoil
import { useRecoilState } from 'recoil';
import { isloadingState } from '@/app/_state/atoms';

// hooks
import { useRef, useEffect, use } from 'react';

// gsap
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Button,
  Center,
  Text,
  VStack,
} from '@chakra-ui/react';

export function StartScreen() {
  const [loading, setLoading] = useRecoilState(isloadingState);
  const buttonRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  useGSAP(
    () => {
      if (loading) return;

      gsap.to(buttonRef.current, {
        y: -10,
        x: 3,
        repeat: -1,
        yoyo: true,
        ease: 'Power1.easeInOut',
        duration: 1.5,
      });
      gsap.from(titleRef.current, {
        scale: 0.5,
        ease: 'Power4.easeIn',
        duration: 1,
      });
    },

    { dependencies: [loading], scope: buttonRef }
  );

  const onStartClick = () => {
    console.log('Start the game!');
  };

  return (
    <>
      <Center
        h={'100vh'}
        w={'100vw'}>
        <Box
          bg={'url(https://i.imgur.com/uGWFxs0.jpg)'}
          backgroundPosition={'center'}
          backgroundSize={'cover'}
          position={'absolute'}
          h={'100vh'}
          w={'100vw'}
        />
        <VStack
          justify={'center'}
          backdropFilter={'blur(4px) brightness(0.7)'}
          position='absolute'
          h={'100vh'}
          w={'100vw'}
          spacing={4}>
          {loading ? (
            <></>
          ) : (
            <>
              <Heading
                ref={titleRef}
                size={'4xl'}>
                taNrleMn
              </Heading>
              <Text
                fontWeight={600}
                mb={'1rem'}>
                A quest to find art and donuts.
              </Text>
              <Button
                ref={buttonRef}
                colorScheme='teal'
                size='lg'
                onClick={onStartClick}>
                Start
              </Button>
            </>
          )}
        </VStack>
      </Center>
    </>
  );
}
