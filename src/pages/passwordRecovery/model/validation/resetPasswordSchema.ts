import * as yup from 'yup';
import { passwordValid } from '../../../../shared/lib/validations';

export const ResetPassword = yup
  .object({
    password: passwordValid,
    confirm_password: passwordValid
  })
  .required();
