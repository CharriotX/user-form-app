import { z } from 'zod';

export const userFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be less than 20 characters'),
  email: z.email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be less than 20 characters'),
});

export type UserFormData = z.infer<typeof userFormSchema>;
