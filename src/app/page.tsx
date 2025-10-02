import { CreateUserModalWindow } from '@/features/user/ui/create-user-modal-window';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Регистрация',
}


export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Регистрация</h1>
      <div className="space-y-4">
        <CreateUserModalWindow />
      </div>
    </div>
  );
}
