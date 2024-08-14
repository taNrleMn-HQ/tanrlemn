'use client';

// chakra-ui
import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';

// local components
import CustomerSupportForm from '@/app/_components/forms/customerSupportForm';

export default function Support() {
  return (
    <>
      <Flex
        align={'center'}
        direction={{ base: 'column', md: 'row' }}
        mb={'3rem'}
      >
        <Container
          w={{ base: '100%', md: '50%' }}
          p={{ base: '1rem', md: '4rem' }}
        >
          <Heading mb={'1rem'} size={'2xl'}>
            Get in touch
          </Heading>
          <Text>
            Here to help! Whether you have a question about your order, need
            assistance with our products, or just want to provide feedback, we
            are ready to listen.
          </Text>
        </Container>
        <Box w={{ base: '100%', md: '50%' }} p={{ base: '1rem', md: '4rem' }}>
          <CustomerSupportForm />
        </Box>
      </Flex>
    </>
  );
}
