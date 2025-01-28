'use client';

// chakra-ui
import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';

// local components
import CustomerSupportForm from '@/app/_components/forms/customerSupportForm';

export default function Contact() {
  return (
    <Container py={{ base: '3rem', md: '7rem' }}>
      <Heading mb={'1rem'}>Get in touch</Heading>
      <Text>
        Here to help! Whether you have a question about your order, need
        assistance with our products, or just want to provide feedback, we are
        ready to listen.
      </Text>
      <Box mt={'3rem'}>
        <CustomerSupportForm />
      </Box>
    </Container>
  );
}
