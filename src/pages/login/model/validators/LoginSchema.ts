import * as yup from 'yup';
import { emailValid, passwordValid } from '../../../../shared/lib/validations';

export const LoginSchema = yup
  .object({
    email: emailValid,
    password: passwordValid
  })
  .required();
