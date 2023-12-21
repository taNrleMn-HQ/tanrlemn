'use client';

// chakra-ui
import { Heading, Box, UnorderedList, ListItem } from '@chakra-ui/react';

export default function ListSection({ subheading, listItems, color }) {
  return (
    <Box mb={'3rem'}>
      <Heading
        mb={'1rem'}
        size={'sm'}
        color={color}>
        {subheading}
      </Heading>
      <UnorderedList>
        {listItems.map((item, index) => (
          <ListItem
            key={index}
            mb={index === listItems.length - 1 ? '0' : '1rem'}>
            {item}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}
