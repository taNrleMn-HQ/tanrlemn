'use client';

// images
const commissionImageLinks = [
  'https://i.imgur.com/CljkHnsh.jpg',
  'https://i.imgur.com/G9Un4Syh.jpg',
  'https://i.imgur.com/drgPiJyh.jpg',
  'https://i.imgur.com/fNISTWSh.jpg',
];

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
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

// local components
import CommissionRequest from '@/app/_components/forms/commissionRequest';

export default function Commissions() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const color = useColorModeValue('purple.500', 'pink.300');
  const bg = useColorModeValue('green.100', 'gray.700');

  return (
    <Box p={{ base: '3rem 0', md: '6rem 3rem' }} fontSize={'1.1rem'}>
      <CommissionRequest isOpen={isOpen} onClose={onClose} />

      <Container
        maxW={'650px'}
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}
      >
        <Stack
          w={'100%'}
          mb={'3rem'}
          pb={'2rem'}
          borderBottom={'1px solid'}
          borderBottomColor={'gray.200'}
        >
          <Tag colorScheme={'pink'} maxW={'fit-content'}>
            Custom art is cool
          </Tag>
          <Heading mb={'1rem'} size={'3xl'} fontWeight={800}>
            Commission a painting
          </Heading>

          <Text maxW={'750px'} mb={'2rem'}>
            <Highlight
              query={['one-on-one']}
              styles={{
                fontWeight: 600,
                color: color,
              }}
            >
              Work one-on-one with me to turn your idea into reality. I will
              work with you to create a custom piece of art that is unique to
              you and your space.
            </Highlight>
          </Text>

          <Button
            onClick={onOpen}
            maxW={'fit-content'}
            mb={'2rem'}
            colorScheme={'purple'}
            mr={'1rem'}
          >
            Submit a request
          </Button>
          <Grid mb={'2rem'} templateColumns={'repeat(4, 1fr)'} gap={'0.3rem'}>
            {commissionImageLinks.map((link, i) => (
              <GridItem key={i} h={'auto'} w={'100%'}>
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
          <Box
            mb={'3rem'}
            borderBottom={'1px solid'}
            borderBottomColor={'gray.200'}
          >
            <Heading mb={'1rem'}>How It Works</Heading>
            <OrderedList mb={'3rem'}>
              <ListItem mb={'1rem'}>
                <Highlight
                  query={'Discover and Connect'}
                  styles={{
                    fontWeight: 600,
                    color: color,
                  }}
                >
                  Discover and Connect – Begin by browsing through the gallery
                  to get a feel for my style and range. If something speaks to
                  you, or if you have a vision of your own, let&apos;s start the
                  conversation!
                </Highlight>
              </ListItem>
              <ListItem mb={'1rem'}>
                <Highlight
                  query={'Define Your Vision'}
                  styles={{
                    fontWeight: 600,
                    color: color,
                  }}
                >
                  Define Your Vision – Whether it&apos;s a particular subject,
                  color scheme, or emotion you want to capture, I will work
                  closely with you to bring your vision to life.
                </Highlight>
              </ListItem>
              <ListItem mb={'1rem'}>
                <Highlight
                  query={'Crafting Your Masterpiece'}
                  styles={{
                    fontWeight: 600,
                    color: color,
                  }}
                >
                  Crafting Your Masterpiece – We embark on the artistic journey
                  of creating your piece. Progress updates and insights into the
                  creative process will be provided.
                </Highlight>
              </ListItem>
              <ListItem mb={'1rem'}>
                <Highlight
                  query={'The Reveal'}
                  styles={{
                    fontWeight: 600,
                    color: color,
                  }}
                >
                  The Reveal – Your personalized artwork is ready to claim its
                  place in your life.
                </Highlight>
              </ListItem>
            </OrderedList>
          </Box>
          <Box
            mb={'3rem'}
            pb={'2rem'}
            borderBottom={'1px solid'}
            borderBottomColor={'gray.200'}
          >
            <Heading mb={'1.5rem'}>Why taNrleMn?</Heading>
            <Text mb={'1rem'}>
              <Highlight
                query={'Personalized Experience:'}
                styles={{
                  fontWeight: 600,
                  color: color,
                }}
              >
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
                  color: color,
                }}
              >
                Expert Craftsmanship: With years of experience and a passion for
                art, I bring a blend of skill, creativity, and attention to
                detail to every piece.
              </Highlight>
            </Text>
            <Text mb={'1rem'}>
              <Highlight
                query={'Quality Assured:'}
                styles={{
                  fontWeight: 600,
                  color: color,
                }}
              >
                Quality Assured: I use high quality materials, ensuring that
                your artwork not only looks beautiful but also stands the test
                of time.
              </Highlight>
            </Text>
            <Text mb={'1rem'}>
              <Highlight
                query={'Satisfaction Guaranteed:'}
                styles={{
                  fontWeight: 600,
                  color: color,
                }}
              >
                Satisfaction Guaranteed: My process is collaborative and
                transparent, ensuring that the final piece meets your
                expectations and our high standards.
              </Highlight>
            </Text>
          </Box>
          <Box mt={'3rem'} p={'3rem 2rem'} borderRadius={'9px'} background={bg}>
            <Heading size={'lg'} mb={'0.5rem'}>
              Start Your Artistic Journey Today
            </Heading>
            <Text mb={'1.5rem'}>
              Ready to transform your idea into a stunning work of art? Contact
              us today to begin your commission journey with me.
            </Text>
            <Button
              maxW={'fit-content'}
              onClick={onOpen}
              mb={'2rem'}
              colorScheme={'purple'}
              mr={'1rem'}
            >
              Submit a request
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
