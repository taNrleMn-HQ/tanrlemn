'use client';

// images
const commissionImageLinks = [
  'https://i.imgur.com/CljkHns.jpg',
  'https://i.imgur.com/G9Un4Sy.jpg',
  'https://i.imgur.com/drgPiJyh.jpg',
  'https://i.imgur.com/fNISTWSh.jpg',
];

// recoil
import { useRecoilState } from 'recoil';
import { loadingState } from '@/app/loading';

// hooks
import { useEffect } from 'react';

// chakra-ui
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

// local components
import CommissionRequest from '@/app/_components/forms/commissionRequest';

export default function Commissions() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Box
      p={{ base: '3rem 0', md: '6rem 3rem' }}
      fontSize={'1.1rem'}>
      <CommissionRequest
        isOpen={isOpen}
        onClose={onClose}
      />
      {!loading && (
        <Container
          maxW={'650px'}
          mb={'4rem'}
          h={'fit-content'}
          position={'relative'}>
          <Stack
            w={'100%'}
            mb={'3rem'}
            pb={'2rem'}
            borderBottom={'1px solid var(--lightGray)'}>
            <Tag
              size={'sm'}
              textTransform={'uppercase'}
              colorScheme={'orange'}
              maxW={'fit-content'}>
              Some info about
            </Tag>
            <Heading size={'lg'}>Custom art for your home</Heading>
            <Heading
              mb={'1rem'}
              size={'4xl'}
              fontWeight={800}
              color={'var(--orange)'}>
              Commission a painting
            </Heading>

            <Text
              maxW={'750px'}
              mb={'2rem'}>
              <Highlight
                query={['taNrleMn']}
                styles={{
                  fontWeight: 600,
                }}>
                Work one-on-one with taNrleMn to turn your idea into reality.
                The artist will work with you to create a custom piece of art
                that is unique to you and your home.
              </Highlight>
            </Text>

            <Button
              onClick={onOpen}
              maxW={'fit-content'}
              mb={'2rem'}
              _hover={{
                outline: '1px solid var(--lightOrange, #F8AD4F)',
                borderRadius: 'var(--mainBorderRadius)',
              }}
              mr={'1rem'}
              background={'var(--midOrange)'}>
              Submit a request
            </Button>
            <Grid
              mb={'2rem'}
              templateColumns={'repeat(4, 1fr)'}
              gap={'0.3rem'}>
              {commissionImageLinks.map((link, i) => (
                <GridItem
                  key={i}
                  h={'auto'}
                  w={'100%'}>
                  <Image
                    src={link}
                    alt={'commission'}
                    h={'100%'}
                    w={'100%'}
                    objectFit={'cover'}
                    borderRadius={'1rem'}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>

          <Box>
            <Heading mb={'1rem'}>How It Works</Heading>
            <OrderedList mb={'3rem'}>
              <ListItem mb={'1rem'}>
                <Highlight
                  query={'Discover and Connect'}
                  styles={{
                    fontWeight: 600,
                  }}>
                  Discover and Connect – Begin by browsing through the gallery
                  to get a feel for taNrleMn&apos;s style and range. If
                  something speaks to you, or if you have a vision of your own,
                  let’s start the conversation!
                </Highlight>
              </ListItem>
              <ListItem mb={'1rem'}>
                <Highlight
                  query={'Define Your Vision'}
                  styles={{
                    fontWeight: 600,
                  }}>
                  Define Your Vision – Share your ideas, inspirations, and
                  preferences. Whether it&apos;s a particular subject, color
                  scheme, or emotion you want to capture, taNrleMn will work
                  closely with you to bring your vision to life.
                </Highlight>
              </ListItem>
              <ListItem mb={'1rem'}>
                <Highlight
                  query={'Crafting Your Masterpiece'}
                  styles={{
                    fontWeight: 600,
                  }}>
                  Crafting Your Masterpiece – With your vision as our guide, we
                  embark on the artistic journey of creating your bespoke piece.
                  Progress updates and insights into the creative process will
                  be provided.
                </Highlight>
              </ListItem>
              <ListItem mb={'1rem'}>
                <Highlight
                  query={'The Reveal'}
                  styles={{
                    fontWeight: 600,
                  }}>
                  The Reveal – The moment of unveiling. Your personalized
                  artwork is ready to claim its place in your life, adding
                  beauty, depth, and a personal touch to your space.
                </Highlight>
              </ListItem>
            </OrderedList>
            <Heading mb={'1.5rem'}>Why taNrleMn?</Heading>
            <Text mb={'1rem'}>
              <Highlight
                query={'Personalized Experience:'}
                styles={{
                  fontWeight: 600,
                }}>
                Personalized Experience: Every commission is a journey taken
                together. The final piece is not just an artwork but a
                reflection of your personal story and aesthetic.
              </Highlight>
            </Text>
            <Text mb={'1rem'}>
              <Highlight
                query={'Expert Craftsmanship:'}
                styles={{
                  fontWeight: 600,
                }}>
                Expert Craftsmanship: With years of experience and a passion for
                art, the artist brings a blend of skill, creativity, and
                attention to detail to every piece.
              </Highlight>
            </Text>
            <Text mb={'1rem'}>
              <Highlight
                query={'Quality Assured:'}
                styles={{
                  fontWeight: 600,
                }}>
                Quality Assured: taNrleMn uses high quality materials, ensuring
                that your artwork not only looks beautiful but also stands the
                test of time.
              </Highlight>
            </Text>
            <Text mb={'1rem'}>
              <Highlight
                query={'Satisfaction Guaranteed:'}
                styles={{
                  fontWeight: 600,
                }}>
                Satisfaction Guaranteed: taNrleMn&apos;s process is
                collaborative and transparent, ensuring that the final piece
                meets your expectations and our high standards.
              </Highlight>
            </Text>
            <Box
              mt={'3rem'}
              p={'3rem 2rem'}
              borderRadius={'var(--mainBorderRadius)'}
              background={'var(--lightestGreen)'}>
              <Heading
                size={'lg'}
                mb={'0.5rem'}>
                Start Your Artistic Journey Today
              </Heading>
              <Text mb={'1.5rem'}>
                Ready to transform your idea into a stunning work of art?
                Contact us today to begin your commission journey with taNrleMn.
              </Text>
              <Button
                maxW={'fit-content'}
                onClick={onOpen}
                mb={'2rem'}
                _hover={{
                  outline: '1px solid var(--lightOrange, #F8AD4F)',
                  borderRadius: 'var(--mainBorderRadius)',
                }}
                mr={'1rem'}
                background={'var(--midOrange)'}>
                Submit a request
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
}
