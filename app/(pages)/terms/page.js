'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import { Box, Container, Heading, Link, Tag, Text } from '@chakra-ui/react';

export default function Terms() {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

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
          Terms of Service
        </Heading>
      </Box>

      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Introduction
        </Heading>
        <Text mb={'0.75rem'}>
          Welcome to taNrleMn, an online art store and subscription service.
        </Text>
        <Text>
          By accessing our website and using our services, you agree to these
          Terms of Service.
        </Text>
      </Box>

      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Service Description
        </Heading>
        <Text>
          We offer a subscription service for art enthusiasts, providing access
          to exclusive artwork, prints, and digital content across various
          tiers.
        </Text>
      </Box>

      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          User Accounts
        </Heading>
        <Text mb={'0.75rem'}>
          Users must provide accurate and complete information when creating an
          account.
        </Text>
        <Text>
          Users are responsible for maintaining the confidentiality of their
          account information.
        </Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Subscription and Payment
        </Heading>
        <Text mb={'0.75rem'}>
          Subscriptions are billed on a monthly, quarterly, or annual basis
          through Stripe.
        </Text>
        <Text mb={'0.75rem'}>
          Subscriptions automatically renew unless canceled at least 24 hours
          before the renewal date.
        </Text>
        <Text>No refunds or credits for partial subscription periods.</Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Intellectual Property Rights
        </Heading>
        <Text mb={'0.75rem'}>
          All content on this site, including artwork, images, and text, is
          owned by taNrleMn and is protected by intellectual property laws.
        </Text>
        <Text>
          Users are granted a limited, non-exclusive right to access the content
          for personal, non-commercial use.
        </Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          User Conduct
        </Heading>
        <Text mb={'0.75rem'}>
          Users agree not to misuse the website or its content in any unlawful
          manner.
        </Text>
        <Text>
          Any unauthorized use of the website or its content may result in
          termination of your account.
        </Text>
      </Box>
      <Box mb={'2rem'}>
        <Heading
          mb={'0.5rem'}
          size={'md'}>
          Disclaimers and Limitation of Liability
        </Heading>
        <Text mb={'0.75rem'}>
          The website and its content are provided &quot;as is&quot; without any
          warranty.
        </Text>
        <Text>
          taNrleMn will not be liable for any indirect, incidental, or punitive
          damages arising from the use of the service.
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
