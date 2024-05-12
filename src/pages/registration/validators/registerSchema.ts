import * as yup from 'yup';
import {
  emailValid,
  nameValid,
  passwordValid,
  phoneValid
} from '../../../shared/lib/validations';

export const RegisterSchema = yup
  .object({
    name: nameValid,
    surname: nameValid,
    email: emailValid,
    phone: phoneValid,
    password: passwordValid
  })
  .required();
