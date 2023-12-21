'use client';

// hooks
import { createContext } from 'react';

// chakra-ui
import { useDisclosure } from '@chakra-ui/react';

// local components
import ContactDrawer from '@/app/_components/sections/contactDrawer';

export const ContactContext = createContext();

export function ContactProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const contactIsOpen = isOpen;
  const contactOnOpen = () => onOpen();
  const contactOnClose = () => onClose();

  return (
    <ContactContext.Provider
      value={{ contactIsOpen, contactOnOpen, contactOnClose }}>
      {children}
      <ContactDrawer
        onClose={onClose}
        isOpen={isOpen}
      />
    </ContactContext.Provider>
  );
}
