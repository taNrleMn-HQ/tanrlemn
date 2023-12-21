import { Button, Flex, Input } from '@chakra-ui/react';
import { MoveRight } from 'lucide-react';

export default function EmailSignup() {
  return (
    <Flex mt={'1rem'}>
      <Input
        border={'1px solid var(--lightOrange)'}
        mr={'0.5rem'}
        type='email'
        placeholder='Enter your email'
        autoComplete='email'
      />
      <Button
        colorScheme={'blue'}
        color={'var(--blackAlt)'}
        background={'var(--midLightBlue)'}
        _hover={{
          background: 'var(--lightBlue)',
          color: 'var(--black)',
        }}
        p={'0.25rem 2rem'}
        rightIcon={<MoveRight size={20} />}>
        Sign up
      </Button>
    </Flex>
  );
}
