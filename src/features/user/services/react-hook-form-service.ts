import { userApi } from '../api/user-api';
import { FormService } from '../model/form-service';
import { UserFormData } from '../model/user-form-types';

export class ReactHookFormService implements FormService {
  async submit(data: UserFormData): Promise<void> {
    return userApi.createUser(data);
  }
}
