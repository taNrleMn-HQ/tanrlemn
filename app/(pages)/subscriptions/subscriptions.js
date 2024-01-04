'use client';

// images
const gpaSrc1 = 'https://i.imgur.com/8rfvCeTh.jpg';
const gpaSrc2 = 'https://i.imgur.com/RAF1b2Ph.jpg';

// context
import { LoadingContext } from '@/app/_lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Highlight,
  Image,
  Link,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';

// local components
import StripePricingTable from '@/app/_components/products/stripePricingTable';
import { MoveRight } from 'lucide-react';

export default function Subscriptions() {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Box
      p={{ base: '4rem 1rem' }}
      background={'var(--lightestBlue)'}>
      <Container
        p={0}
        mb={'3rem'}>
        <Tag
          mb={'1rem'}
          size={'sm'}
          textTransform={'uppercase'}
          colorScheme={'green'}
          maxW={'fit-content'}>
          Subscribe & Save
        </Tag>
        <Heading
          size={'md'}
          fontWeight={600}
          mb={'0.5rem'}>
          Welcome to taNrleMn&apos;s Exclusive Art Subscriptions!
        </Heading>
        <Heading
          mb={'1rem'}
          size={'3xl'}
          fontWeight={800}>
          Premium Subscriptions
        </Heading>

        <Text mb={'2rem'}>
          <Highlight
            query={['taNrleMn']}
            styles={{
              fontWeight: 600,
            }}>
            Dive into a world where art meets accessibility. Whether you&apos;re
            an art enthusiast, a seasoned collector, or somewhere in between,
            our subscription tiers are tailored to fit your passion for art.
            Choose the tier that resonates with your artistic journey and let us
            bring the beauty of art directly to you.
          </Highlight>
        </Text>
      </Container>
      <Container
        mb={'3rem'}
        maxW={'1100px'}
        p={0}>
        <Box
          background={'var(--lightBlue)'}
          borderRadius={'var(--mainBorderRadius)'}
          p={'2rem 1rem'}>
          <StripePricingTable />
        </Box>
      </Container>
      <Container
        p={0}
        mb={'3rem'}>
        <Heading mb={'1rem'}>
          Join taNrleMn&apos;s Art Subscription Today
        </Heading>
        <Text>
          Select your tier and start a journey of artistic discovery and
          inspiration. Each subscription is more than just a service; it&apos;s
          an invitation to experience the world of art in a way that is
          intimately yours.
        </Text>
      </Container>
      <Container
        mb={'3rem'}
        maxW={'1100px'}
        p={0}>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          justify={'center'}
          mt={'5rem'}
          p={{ base: '3rem 2rem', md: '4rem' }}
          gap={{ base: '2rem', md: '3rem' }}
          borderRadius={'var(--mainBorderRadius)'}
          background={'var(--lightPurple)'}>
          <HStack maxW={{ base: '100%', md: '40%' }}>
            <Image
              src={gpaSrc1}
              alt={'bliss'}
              borderRadius={'var(--mainBorderRadius)'}
              maxH={'auto'}
              w={'50%'}
            />
            <Image
              src={gpaSrc2}
              alt={'bliss'}
              borderRadius={'var(--mainBorderRadius)'}
              maxH={'auto'}
              w={'50%'}
            />
          </HStack>
          <Box p={0}>
            <Heading
              size={'lg'}
              mb={'0.5rem'}>
              Interested in a Commission?
            </Heading>
            <Text
              mb={'1.5rem'}
              maxW={'500px'}>
              Transform your idea into a stunning work of art. Contact us today
              to begin your commission journey with taNrleMn.
            </Text>
            <Link href={'/commissions'}>
              <Button
                maxW={'fit-content'}
                _hover={{
                  outline: '1px solid var(--lightOrange, #F8AD4F)',
                  borderRadius: 'var(--mainBorderRadius)',
                }}
                mr={'1rem'}
                rightIcon={<MoveRight size={15} />}
                background={'var(--midOrange)'}>
                Submit a request
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
