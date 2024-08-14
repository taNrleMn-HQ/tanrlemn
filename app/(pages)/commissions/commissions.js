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
  Flex,
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
  UnorderedList,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

// local components
import CommissionRequest from '@/app/_components/forms/commissionRequest';
import { BadgeDollarSign, Camera, HandCoins, Sofa } from 'lucide-react';

export default function Commissions() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const color = useColorModeValue('pink.600', 'pink.200');
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
          <Tag colorScheme={'pink'} maxW={'fit-content'} size={'lg'}>
            Starting at $1,000
          </Tag>
          <Heading mb={'1rem'} size={'3xl'} fontWeight={800}>
            Commissioned Oil Paintings by taNrleMn
          </Heading>

          <Box maxW={'750px'}>
            <Text mb={'0.5rem'}>
              <Highlight
                query={['unique blend of photography and oil painting']}
                styles={{
                  fontWeight: 600,
                  color: color,
                }}
              >
                A unique blend of photography and oil painting in a journey that
                captures more than just your your essence.
              </Highlight>
            </Text>
            <Text mb={'2rem'}>
              <Highlight
                query={['Nearly Lemon']}
                styles={{
                  fontWeight: 600,
                  color: color,
                }}
              >
                Partnering with Nearly Lemon, we ensure that your portrait is
                more than a beautiful piece of art; it&apos;s a true
                representation of who you are. Through personalized photoshoots
                and intimate painting sessions, taNr transforms your image into
                a timeless masterpiece that reflects your spirit.
              </Highlight>
            </Text>
          </Box>

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
            <Heading mb={'2rem'}>How It Works</Heading>

            <Box mb={'2rem'}>
              <Flex gap={'0.5rem'} color={color} direction={'column'}>
                <Box>
                  <HandCoins size={25} />
                </Box>
                <Heading size={'md'} fontWeight={500}>
                  Initial Payment: $500 Deposit
                </Heading>
              </Flex>
              <Text py={'0.5rem'}>
                Secure your spot with a down payment of $500 to begin the
                process.
              </Text>
            </Box>
            <Box mb={'2rem'}>
              <Flex gap={'0.5rem'} direction={'column'} color={color}>
                <Box>
                  <Camera size={25} />
                </Box>
                <Heading size={'md'} fontWeight={500}>
                  Professional Photoshoot
                </Heading>
              </Flex>
              <Text py={'0.5rem'}>
                Schedule a photoshoot with Nearly Lemon, taNrleMn&apos;s trusted
                partner.
              </Text>
              <Text pb={'0.5rem'}>
                Receive 5 high-quality, professionally taken digital portrait
                photographs.
              </Text>
            </Box>
            <Box mb={'2rem'}>
              <Flex gap={'0.5rem'} direction={'column'} color={color}>
                <Box>
                  <Sofa size={25} />
                </Box>
                <Heading size={'md'} fontWeight={500}>
                  Painting Sessions
                </Heading>
              </Flex>
              <Text py={'0.5rem'}>
                Attend bi-weekly painting sessions with taNr, where he will
                bring your portrait to life.
              </Text>
              <Text pb={'0.5rem'}>
                <strong>Note:</strong> You won&apos;t need to pose during the
                sessions. taNr will paint from one of the photographs, but your
                presence will help ensure the final painting truly captures your
                essence.
              </Text>
            </Box>
            <Box mb={'2rem'}>
              <Flex gap={'0.5rem'} direction={'column'} color={color}>
                <Box>
                  <BadgeDollarSign size={25} />
                </Box>
                <Heading size={'md'} fontWeight={500}>
                  Final Payment: $500 Balance
                </Heading>
              </Flex>
              <Text py={'0.5rem'}>
                Upon completion, pay the remaining $500 to receive your original
                24&quot; x 36&quot; oil painting on canvas, created from the
                selected photograph.
              </Text>
            </Box>
          </Box>
          <Box
            mb={'3rem'}
            pb={'1rem'}
            borderBottom={'1px solid'}
            borderBottomColor={'gray.200'}
          >
            <Heading mb={'2rem'}>Details</Heading>

            <Box mb={'1rem'}>
              <Heading size={'md'} fontWeight={500}>
                What&apos;s Included:
              </Heading>
              <UnorderedList p={'0.5rem'}>
                <ListItem mb={'0.5rem'}>
                  <Highlight
                    query={['Initial Consultation:']}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    Initial Consultation: Discuss your vision and preferences to
                    tailor the experience to your personality.
                  </Highlight>
                </ListItem>
                <ListItem mb={'0.5rem'}>
                  <Highlight
                    query={['Professional Photoshoot:']}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    Professional Photoshoot: A session with Nearly Lemon,
                    resulting in 5 high-quality digital portrait photographs.
                  </Highlight>
                </ListItem>
                <ListItem mb={'0.5rem'}>
                  <Highlight
                    query={['Bi-Weekly Painting Sessions:']}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    Bi-Weekly Painting Sessions: Join taNr as he brings your
                    portrait to life, ensuring the painting resonates with your
                    essence.
                  </Highlight>
                </ListItem>
                <ListItem mb={'0.5rem'}>
                  <Highlight
                    query={['Final Masterpiece:']}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    Final Masterpiece: Receive your 24&quot; x 36&quot; original
                    oil painting on canvas, a true reflection of you.
                  </Highlight>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box mb={'1rem'}>
              <Heading size={'md'} fontWeight={500}>
                Pricing:
              </Heading>
              <UnorderedList p={'0.5rem'}>
                <ListItem mb={'0.5rem'}>
                  <Highlight
                    query={['Total Cost:']}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    Total Cost: $1,000
                  </Highlight>
                  <UnorderedList pt={'0.5rem'}>
                    <ListItem mb={'0.5rem'}>
                      <Highlight
                        query={['$500 Deposit']}
                        styles={{
                          fontWeight: 600,
                          color: color,
                        }}
                      >
                        $500 Deposit to start the process.
                      </Highlight>
                    </ListItem>
                    <ListItem mb={'0.5rem'}>
                      <Highlight
                        query={['$500 Balance']}
                        styles={{
                          fontWeight: 600,
                          color: color,
                        }}
                      >
                        $500 Balance upon completion of the painting.
                      </Highlight>
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box mb={'1rem'}>
              <Heading size={'md'} fontWeight={500}>
                Timeline:
              </Heading>
              <UnorderedList p={'0.5rem'}>
                <ListItem mb={'0.5rem'}>
                  <Highlight
                    query={['Photoshoot:']}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    Photoshoot: Scheduled at your convenience.
                  </Highlight>
                </ListItem>
                <ListItem mb={'0.5rem'}>
                  <Highlight
                    query={['Painting Sessions:']}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    Painting Sessions: Bi-weekly, with the duration depending on
                    the complexity of the portrait.
                  </Highlight>
                </ListItem>
                <ListItem mb={'0.5rem'}>
                  <Highlight
                    query={['Completion:']}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    Completion: Typically within 2-3 months from the first
                    session.
                  </Highlight>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box mt={'3rem'} p={'3rem 2rem'} borderRadius={'9px'} background={bg}>
            <Heading size={'lg'} mb={'0.5rem'}>
              Begin Your Artistic Journey
            </Heading>
            <Text mb={'1.5rem'}>
              Ready to see yourself through the eyes of an artist? Let&apos;s
              start this creative collaboration today. Book your photoshoot with
              Nearly Lemon and secure your place in this personalized artistic
              experience.
            </Text>
            <Button
              maxW={'fit-content'}
              onClick={onOpen}
              mb={'2rem'}
              colorScheme={'purple'}
              mr={'1rem'}
            >
              Schedule a photoshoot
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
