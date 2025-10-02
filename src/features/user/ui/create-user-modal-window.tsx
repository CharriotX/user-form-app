'use client';

import { ModalWindow } from '@/shared/ui/modal-window';
import { CreateUserForm } from './create-user-form';
import { Button } from '@/shared/ui/button';

export const CreateUserModalWindow = () => {
  return (
    <ModalWindow>
      <ModalWindow.Trigger>
        <Button variant="default">Создать пользователя</Button>
      </ModalWindow.Trigger>
      <ModalWindow.Content>
        <ModalWindow.Header>Создание пользователя</ModalWindow.Header>
        <ModalWindow.Body>
          <CreateUserForm />
        </ModalWindow.Body>
      </ModalWindow.Content>
    </ModalWindow>
  );
};
