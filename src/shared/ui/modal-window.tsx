'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { X } from 'lucide-react';

type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type ModalProps = {
  children: React.ReactNode;
};

type ModalTriggerProps = {
  children: React.ReactNode;
};

type ModalContentProps = {
  children: React.ReactNode;
};

type ModalHeaderProps = {
  children: React.ReactNode;
};

type ModalBodyProps = {
  children: React.ReactNode;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a Modal');
  }
  return context;
};

const ModalWindow = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalTrigger = ({ children }: ModalTriggerProps) => {
  const { openModal } = useModal();

  return (
    <div onClick={openModal} className="cursor-pointer">
      {children}
    </div>
  );
};

const ModalContent = ({ children }: ModalContentProps) => {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      <div className="relative z-10 w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
};

const ModalHeader = ({ children }: ModalHeaderProps) => {
  const { closeModal } = useModal();

  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 ${className}">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {children}
      </h2>
      <button
        onClick={closeModal}
        className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
};

const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className="p-6">{children}</div>;
};

ModalWindow.Trigger = ModalTrigger;
ModalWindow.Content = ModalContent;
ModalWindow.Header = ModalHeader;
ModalWindow.Body = ModalBody;

export { ModalWindow };
