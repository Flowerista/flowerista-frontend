import * as yup from 'yup';
import dayjs from 'dayjs';
import {
  cityValid,
  entranceValid,
  flatValid,
  houseValid,
  streetValid
} from '../../../../shared/lib/validations';

export const CheckOutAddressSchema = yup
  .object({
    city: cityValid,
    street: streetValid,
    house: houseValid,
    entrance: entranceValid,
    flat: flatValid,
    date: yup
      .string()
      .nullable()
      .required('date is required')
      .test(
        'not-past',
        'The date cannot be less than today.',
        function (value) {
          if (!value) return true;
          const selectedDate = dayjs(value).format('YYYY-MM-DD');
          return selectedDate >= dayjs(new Date()).format('YYYY-MM-DD');
        }
      ),
    time: yup.string().nullable().required('time is required')
  })
  .required();
