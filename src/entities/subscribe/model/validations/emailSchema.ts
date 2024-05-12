import * as yup from 'yup';
import { emailValid } from '../../../../shared/lib/validations';

export const EmailSchema = yup
  .object({
    email: emailValid
  })
  .required();
