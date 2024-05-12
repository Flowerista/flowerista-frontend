import * as yup from 'yup';
import { emailValid } from '../../../../shared/lib/validations';

export const RestoringAccessSchema = yup
  .object({
    email: emailValid
  })
  .required();
