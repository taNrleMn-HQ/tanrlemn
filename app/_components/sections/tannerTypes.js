'use client';

// chakra-ui
import { Flex, Text, Heading, Highlight, Box } from '@chakra-ui/react';

export default function TannerTypes({ heading, text, boldText, icon, color }) {
  return (
    <Box
      maxW={{ base: '100%', md: '45%' }}
      mb={{ base: '5rem', md: '0' }}
      p={{ base: '0', md: '2rem' }}>
      <Flex
        align={'center'}
        mb={'1rem'}>
        {icon}
        <Heading
          color={'var(--lightestGray)'}
          ml={'1rem'}
          fontSize={'1.65rem'}>
          {heading}
        </Heading>
      </Flex>
      <Text
        lineHeight={1.75}
        fontSize={'1.1rem'}>
        <Highlight
          query={boldText}
          styles={{ color: color, fontWeight: 500, whiteSpace: 'wrap' }}>
          {text}
        </Highlight>
      </Text>
    </Box>
  );
}
