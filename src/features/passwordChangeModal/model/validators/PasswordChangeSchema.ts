import * as yup from 'yup';
import { passwordValid } from '../../../../shared/lib/validations';

export const PasswordChangeSchema = yup
  .object({
    passwordNew: passwordValid,
    passwordOld: passwordValid
  })
  .required();
