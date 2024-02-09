import { useColorModeValue } from '@chakra-ui/react';

export default function Underscore() {
  const color = useColorModeValue(
    'var(--chakra-colors-orange-400)',
    'var(--chakra-colors-purple-400)'
  );
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='2'
      viewBox='0 0 14 2'
      fill='none'>
      <path
        d='M1 0H0V2H1V0ZM13 2C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0V2ZM1 2H13V0H1V2Z'
        fill={color}
      />
    </svg>
  );
}
