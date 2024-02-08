'use client';

// chakra-ui
import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';

// local components
import CustomerSupportForm from '@/app/_components/forms/customerSupportForm';
import Instagram from '@/app/_components/icons/instagram';

export default function Support() {
  return (
    <>
      <Flex
        align={'center'}
        direction={{ base: 'column', md: 'row' }}
        mb={'3rem'}>
        <Container
          w={{ base: '100%', md: '50%' }}
          p={{ base: '1rem', md: '4rem' }}>
          <Heading
            mb={'1rem'}
            size={'2xl'}>
            Get in touch
          </Heading>
          <Text>
            We&apos;re here to help! Whether you have a question about your
            order, need assistance with our products, or just want to provide
            feedback, our team is ready to listen.
          </Text>
          <Heading
            mb={'0.5rem'}
            mt={'3rem'}
            size={'md'}>
            Follow Us
          </Heading>
          <Text mb={'0.5rem'}>
            Stay updated and connect with us on our social media:
          </Text>
          <Link
            href='https://www.instagram.com/tanrlemn/'
            isExternal>
            <Instagram
              color='gray.600'
              size={20}
              style={{ marginRight: '1rem' }}
            />
          </Link>
        </Container>
        <Box
          w={{ base: '100%', md: '50%' }}
          p={{ base: '1rem', md: '4rem' }}>
          <CustomerSupportForm />
        </Box>
      </Flex>
    </>
  );
}
