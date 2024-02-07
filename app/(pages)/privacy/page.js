'use client';

// recoil
import { useSetRecoilState } from 'recoil';

// hooks
import { useEffect } from 'react';

// chakra-ui
import { Box, Container, Heading, Link, Tag, Text } from '@chakra-ui/react';

export default function Privacy() {
  return (
    <Container p={'5rem 1rem'}>
      <Box mb={'2rem'}>
        <Tag
          size={'sm'}
          textTransform={'uppercase'}
          colorScheme={'purple'}
          maxW={'fit-content'}>
          Policy
        </Tag>
        <Heading
          mb={'1rem'}
          size={'2xl'}
          fontWeight={800}>
          Privacy Policy
        </Heading>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Introduction
        </Heading>
        <Text>
          We are committed to protecting the privacy of our users and
          subscribers.
        </Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Information Collection and Use
        </Heading>
        <Text mb={'0.75rem'}>
          We collect personal information such as name, email address, and
          shipping address for account management and service delivery.
        </Text>
        <Text>
          We use this information to process subscriptions, fulfill orders, and
          communicate with you.
        </Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Cookies and Tracking Technologies
        </Heading>
        <Text mb={'0.75rem'}>
          Our website uses cookies to enhance user experience and analyze
          website traffic.
        </Text>
        <Text>Users can control cookie settings through their browser.</Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Data Sharing and Disclosure
        </Heading>
        <Text mb={'0.75rem'}>
          We may share your information with service providers like FinerWorks
          for order fulfillment.
        </Text>
        <Text>We do not sell user data to third parties.</Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          User Rights
        </Heading>
        <Text mb={'0.75rem'}>
          Users have the right to access, update, or delete their personal
          information.
        </Text>
        <Text>
          Requests can be made by contacting{' '}
          <Link href='mailto:support@tanrlemn.xyz'>support@tanrlemn.xyz</Link>.
        </Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          International Data Transfers
        </Heading>
        <Text>
          User data may be stored and processed in any country where we have
          operations or service providers.
        </Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Changes to Privacy Policy
        </Heading>
        <Text>
          We reserve the right to update this policy at any time. Changes will
          be posted on our website.
        </Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Contact Information
        </Heading>
        <Text>
          For any privacy-related questions, please contact us at{' '}
          <Link href='mailto:support@tanrlemn.xyz'>support@tanrlemn.xyz</Link>.
        </Text>
      </Box>
    </Container>
  );
}
