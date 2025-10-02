import { UserFormData } from '@/features/user/model/user-form-types';

export const userApi = {
  createUser: async (userData: UserFormData): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log('User created successfully:', userData));
      }, 1000);
    });
  },
};
