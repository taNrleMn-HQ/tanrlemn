'use client';

// supabase
import { createBrowserClient } from '@supabase/ssr';

// recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { loadingState } from '@/app/loading';

// hooks
import { useEffect, useState } from 'react';
import { useSession, useProfile } from '@/app/_lib/hooks/useUser';
import { useIsMobile } from '@/app/_lib/hooks/useIsMobile';

// chakra-ui
import {
  Avatar,
  Flex,
  Link,
  Button,
  Text,
  FormLabel,
  FormControl,
  Input,
  VStack,
  Box,
  useToast,
} from '@chakra-ui/react';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function AccountButton() {
  const { session } = useSession();
  const isMobile = useIsMobile();

  const loading = useRecoilValue(loadingState);

  return (
    <>
      {!loading && (
        <Link
          w={isMobile ? '100%' : 'auto'}
          m={isMobile ? '1rem 0 1rem 0' : '0 0 0 1rem'}
          p={0}
          _hover={{ textDecoration: 'none' }}
          href={session === null ? '/dashboard/sign-in' : '/dashboard'}>
          {session === null ? (
            <Button
              size={isMobile ? 'lg' : 'sm'}
              w={isMobile ? '100%' : 'auto'}
              fontSize={'0.8rem'}
              colorScheme={'teal'}
              variant={'solid'}>
              Sign in
            </Button>
          ) : (
            <Button
              size={isMobile ? 'lg' : 'sm'}
              w={'100%'}
              fontSize={'0.8rem'}
              colorScheme={'teal'}
              variant={'solid'}>
              Dashboard
            </Button>
          )}
        </Link>
      )}
    </>
  );
}

export const AccountAvatar = ({ uid, url, size, onUpload, isUploadWidget }) => {
  const { profile } = useProfile();

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useRecoilState(loadingState);

  const toast = useToast();

  useEffect(() => {
    async function downloadImage() {
      try {
        const { data, error } = await supabase.storage
          .from('avatars')
          .download(profile.avatar_url);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log('Error downloading image: ', error);
      }
    }

    downloadImage();
  }, [profile.avatar_url]);

  const uploadAvatar = async (event) => {
    try {
      setLoading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      toast({
        title: 'Error uploading avatar!',
        status: 'error',
        isClosable: true,
        duration: 9000,
        description: error.message,
        position: 'top-right',
      });
    }
  };

  return (
    <VStack
      align={'center'}
      w={'fit-content'}
      mb={'1rem'}
      gap={3}>
      {profile !== null && (
        <>
          <Avatar
            size={size ? size : 'md'}
            name={profile.full_name || null}
            src={avatarUrl || null}
            bg={'var(--orange)'}
            color={'var(--white)'}
          />
          {isUploadWidget && (
            <FormControl>
              <Flex
                justify={'center'}
                maxW={'fit-content'}
                maxH={'fit-content'}>
                <Button
                  position={'relative'}
                  size={'xs'}
                  w={'5rem'}
                  zIndex={-1}
                  isLoading={loading}
                  htmlFor='single'>
                  {loading ? 'Uploading ...' : 'Upload'}
                </Button>
                <Input
                  position={'absolute'}
                  opacity={0}
                  left={0}
                  top={0}
                  h={'100%'}
                  type='file'
                  id='single'
                  accept='image/*'
                  onChange={uploadAvatar}
                  disabled={loading}
                />
              </Flex>
            </FormControl>
          )}
        </>
      )}
    </VStack>
  );
};
