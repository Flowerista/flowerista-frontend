import * as yup from 'yup';
import {
  cityValid,
  entranceValid,
  flatValid,
  houseValid,
  streetValid
} from '../../../../shared/lib/validations';

export const AddressSchema = yup.object({
  city: cityValid,
  street: streetValid,
  house: houseValid,
  entrance: entranceValid,
  flat: flatValid
});
