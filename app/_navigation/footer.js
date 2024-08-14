'use client';

// hooks
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// components
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Highlight,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  const bg = useColorModeValue('blue.50', 'gray.800');
  const color = useColorModeValue('orange.400', 'purple.200');
  const borderColor = useColorModeValue('orange.300', 'gray.600');

  return (
    <>
      <footer>
        <Box background={bg} borderTop={'1px solid'} borderColor={borderColor}>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            p={{ base: '4rem 2rem 2rem 2rem', md: '7rem 2rem 5rem 2rem' }}
          >
            <Stack
              borderBottom={{
                base: '1px solid',
                md: 'none',
              }}
              borderColor={borderColor}
              mb={{ base: '3rem', md: '0' }}
              pb={{ base: '3rem', md: '0' }}
              maxW={'25rem'}
              mr={{ base: 0, md: '7rem' }}
            >
              <Heading mb={'0.25rem'} size={'md'} color={color}>
                _tL
              </Heading>
              <Text>
                <Highlight
                  query={"taNrleMn's"}
                  styles={{
                    fontWeight: 600,
                    color: color,
                  }}
                >
                  taNrleMn&apos;s art explores the unity of shared pain and the
                  transformative power of connection.
                </Highlight>
              </Text>
            </Stack>
            <Flex gap={'3rem'} flexDirection={{ base: 'column', md: 'row' }}>
              <Box>
                <Heading size={{ base: 'md' }} mb={'0.5rem'}>
                  Art
                </Heading>
                <Stack gap={0}>
                  <Link href='/commissions'>Commissions</Link>
                  <Link href='/gallery'>Gallery</Link>
                  <Link href='/about'>About</Link>
                </Stack>
              </Box>
              <Box>
                <Heading size={{ base: 'md' }} mb={'0.5rem'}>
                  Support
                </Heading>
                <Stack gap={0}>
                  <Link href='/support'>Get Help</Link>
                  <Link href='/privacy'>Privacy</Link>
                  <Link href='/terms'>Terms</Link>
                </Stack>
              </Box>
            </Flex>
          </Flex>
          <Flex
            borderTop={'1px solid'}
            borderColor={borderColor}
            justify={'center'}
            flexDirection={'column'}
            textAlign={'center'}
            p={'2rem 1rem 1.5rem 1rem'}
            m={'0 2rem'}
          >
            <Text fontSize={'0.8rem'}>
              © 2024 Thought Co, All Rights reserved
            </Text>
          </Flex>
        </Box>
      </footer>
    </>
  );
}
