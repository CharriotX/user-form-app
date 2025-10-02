import { UserFormData } from './user-form-types';

export interface FormService {
  submit: (data: UserFormData) => Promise<void>;
}
