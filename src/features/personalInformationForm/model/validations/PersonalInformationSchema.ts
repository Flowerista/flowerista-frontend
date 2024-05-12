import * as yup from 'yup';
import { nameValid } from '../../../../shared/lib/validations';

export const PersonalInformationSchema = yup
  .object({
    name: nameValid,
    surname: nameValid
  })
  .required();
