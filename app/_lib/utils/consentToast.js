'use client';

// hooks
import { useEffect, useState, useRef } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

// chakra-ui
import { Button, Flex, Link, Text, useToast } from '@chakra-ui/react';

export function ConsentToast() {
  const toast = useToast();
  const toastIdRef = useRef();
  const id = 'consentToast';

  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const acceptCookie = () => {
      setShowConsent(false);
      setCookie('localConsent', 'true', {});

      close();
    };

    const close = () => {
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
    };

    const addToast = () => {
      if (toast.isActive(id)) return;
      toastIdRef.current = toast({
        id,
        title: 'Cookie Consent',
        render: () => (
          <Flex
            align={'center'}
            background={'orange.100'}
            p={'1rem'}
            borderRadius={'var(--mainBorderRadius)'}>
            <Text fontSize={'0.85rem'}>
              This website uses cookies to improve user experience. By using our
              website you consent to all cookies in accordance with our{' '}
              <Link href='/cookies'>Cookie Policy</Link>.
            </Text>
            <Button
              onClick={acceptCookie}
              fontSize={'0.85rem'}
              colorScheme='gray'>
              Accept
            </Button>
          </Flex>
        ),
        duration: null,
      });
    };

    setShowConsent(!hasCookie('localConsent'));

    showConsent && addToast();
  }, [showConsent, toast, id]);
}
