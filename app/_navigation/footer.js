'use client';

// recoil
import { useRecoilValue } from 'recoil';
import { loadingState } from '@/app/loading';

// context
import { ContactContext } from '../_lib/context/ContactProvider';

// hooks
import { useContext } from 'react';

// components
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Highlight,
} from '@chakra-ui/react';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const { contactOnOpen } = useContext(ContactContext);
  const loading = useRecoilValue(loadingState);

  return (
    <>
      {!loading && (
        <footer
          style={{
            background: 'var(--lightestBlue)',
            borderTop: '1px solid var(--lightOrange)',
          }}>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            p={{ base: '4rem 2rem 2rem 2rem', md: '7rem 2rem 5rem 2rem' }}>
            <Stack
              borderBottom={{
                base: '1px solid var(--lighterGray)',
                md: 'none',
              }}
              mb={{ base: '3rem', md: '0' }}
              pb={{ base: '3rem', md: '0' }}
              maxW={'25rem'}
              mr={{ base: 0, md: '7rem' }}>
              <Heading
                mb={'0.25rem'}
                size={'md'}
                color={'var(--midOrangeAlt)'}>
                _tL
              </Heading>
              <Text>
                <Highlight
                  query={"taNrleMn's"}
                  styles={{
                    fontWeight: 600,
                  }}>
                  taNrleMn&apos;s art explores the unity of shared pain and the
                  transformative power of connection.
                </Highlight>
              </Text>
              <Flex mt={{ base: '0', md: '1rem' }}>
                <Link
                  href='https://www.instagram.com/tanrlemn/'
                  isExternal>
                  <Instagram
                    size={20}
                    color={'var(--midGray)'}
                    style={{ marginRight: '1rem' }}
                  />
                </Link>
              </Flex>
            </Stack>
            <Flex
              gap={'3rem'}
              flexDirection={{ base: 'column', md: 'row' }}>
              <Box>
                <Heading
                  size={{ base: 'md' }}
                  mb={'0.5rem'}>
                  Art
                </Heading>
                <Stack gap={0}>
                  <Link href='/gallery'>Gallery</Link>
                  <Link href='/about'>About</Link>
                </Stack>
              </Box>
              <Box>
                <Heading
                  size={{ base: 'md' }}
                  mb={'0.5rem'}>
                  Shop
                </Heading>
                <Stack gap={0}>
                  <Link href='/shop'>Official Shop</Link>
                  <Link href='/subscriptions'>Subscriptions</Link>
                  <Link href='/commissions'>Commissions</Link>
                </Stack>
              </Box>
              <Box>
                <Heading
                  size={{ base: 'md' }}
                  mb={'0.5rem'}>
                  Support
                </Heading>
                <Stack gap={0}>
                  <Text
                    cursor={'pointer'}
                    onClick={contactOnOpen}>
                    Contact
                  </Text>
                  <Link href='/privacy'>Privacy</Link>
                  <Link href='/terms'>Terms</Link>
                </Stack>
              </Box>
            </Flex>
          </Flex>

          <Flex
            borderTop={'1px solid var(--lighterGray)'}
            justify={'center'}
            flexDirection={'column'}
            textAlign={'center'}
            p={'2rem 1rem 1.5rem 1rem'}
            m={'0 2rem'}>
            <Text fontSize={'0.8rem'}>
              © 2024 Thought Co, All Rights reserved
            </Text>
          </Flex>
        </footer>
      )}
    </>
  );
}
