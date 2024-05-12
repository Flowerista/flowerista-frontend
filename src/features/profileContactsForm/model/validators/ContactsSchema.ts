import * as yup from 'yup';
import { emailValid, phoneValid } from '../../../../shared/lib/validations';

export const ContactsSchema = yup
  .object({
    email: emailValid,
    phone: phoneValid
  })
  .required();
