'use client';

// context
import { LoadingContext } from '../lib/context/LoadingProvider';
import { ContactContext } from '../lib/context/ContactProvider';

// hooks
import { useContext } from 'react';

// components
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  Link,
  Highlight,
} from '@chakra-ui/react';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const { contactOnOpen } = useContext(ContactContext);
  const { loading } = useContext(LoadingContext);

  return (
    <>
      {!loading && (
        <footer
          style={{
            background: 'var(--lightestBlue)',
            borderTop: '1px solid var(--lightOrange)',
          }}>
          <Flex p={'7rem 2rem 5rem 2rem'}>
            <Stack
              maxW={'25rem'}
              mr={'7rem'}>
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
              <Flex mt={'1rem'}>
                <Link
                  href='https://www.instagram.com/tanrlemn/'
                  isExternal>
                  <Instagram
                    size={24}
                    color={'var(--midGray)'}
                    style={{ marginRight: '1rem' }}
                  />
                </Link>
              </Flex>
            </Stack>
            <Flex gap={'3rem'}>
              <Box>
                <Heading
                  size={'md'}
                  mb={'0.5rem'}>
                  The Artist
                </Heading>
                <Stack gap={0}>
                  <Link href='/gallery'>Gallery</Link>
                  <Link href='/about'>About</Link>
                </Stack>
              </Box>
              <Box>
                <Heading
                  size={'md'}
                  mb={'0.5rem'}>
                  Shop
                </Heading>
                <Stack gap={0}>
                  <Link href='/subscriptions'>Subscriptions</Link>
                  <Link href='/commissions'>Commissions</Link>
                  <Link href='/shop?category=prints'>Prints</Link>
                  <Link href='/shop?category=originals'>Originals</Link>
                </Stack>
              </Box>

              <Box>
                <Heading
                  size={'md'}
                  mb={'0.5rem'}>
                  Support
                </Heading>
                <Stack gap={0}>
                  <Text
                    cursor={'pointer'}
                    onClick={contactOnOpen}>
                    Contact
                  </Text>
                  <Link href='/support/faqs'>FAQs</Link>
                </Stack>
              </Box>
            </Flex>
          </Flex>

          <Flex
            borderTop={'1px solid var(--lighterGray)'}
            justify={'center'}
            p={'2rem 1rem 1.5rem 1rem'}
            m={'0 2rem'}>
            <Text fontSize={'0.8rem'}>
              © 2024 taNr leMn, All Rights reserved
            </Text>
          </Flex>
        </footer>
      )}
    </>
  );
}
