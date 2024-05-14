import styles from './styles.module.scss';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCheckoutActions } from '../../../../pages/checkoutPage/model/slice/checkout.slice.ts';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/button';
import { Form } from '../../../../shared/ui/form';
import { FormError } from '../../../../shared/ui/formError';

interface InterfaceCheckoutPickUpFromTheStore {
  setIsActive: (isActive: boolean) => void;
}

interface Inputs {
  date?: string | undefined;
  time?: string | undefined;
}

export const CheckoutPickUpFromTheStore: FC<
  InterfaceCheckoutPickUpFromTheStore
> = ({ setIsActive }) => {
  const { t } = useTranslation();
  const { setCity, setDate, setHouse, setStreet, setTime } =
    useCheckoutActions();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      date: undefined,
      time: undefined
    },
    resolver: yupResolver(
      yup
        .object({
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
          time: yup
            .string()
            .nullable()
            .required('time is required')
            .test(
              'not-past',
              'The store is open from 9:00 to 20:00.',
              function (value) {
                if (!value) return true;
                const selectedHour = dayjs(value).hour();
                return selectedHour >= 9 && selectedHour < 20;
              }
            )
        })
        .required()
    )
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setDate(dayjs(data.date).format('YYYY-MM-DD'));
    setTime(dayjs(data.time).format('HH:mm'));
    setCity('Київ');
    setStreet('Перемоги');
    setHouse('45');
    setIsActive(true);
    reset();
  };

  return (
    <div className={styles.firstTab}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <span>{`${t('checkout.authorized.delivery.street')}`}</span>
        <div className={styles.wrappPicker}>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <div>
                <DatePicker
                  {...field}
                  className={styles.datePicker}
                  label="Date"
                  sx={{
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                      {
                        border: 'none',
                        borderBottom: '2px solid #C5B4B9',
                        borderRadius: '0px'
                      }, // at page load
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                      {
                        border: 'none',
                        borderBottom: '2px solid #231104',
                        borderRadius: '0px'
                      }, // at hover state
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                      {
                        border: 'none',
                        borderBottom: '2px solid #231104',
                        borderRadius: '0px'
                      } // at focused state
                  }}
                />
                {errors.date?.message && (
                  <FormError error={errors.date.message} />
                )}
              </div>
            )}
          />
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <div>
                <TimePicker
                  {...field}
                  className={styles.timePicker}
                  ampm={false}
                  sx={{
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                      {
                        border: 'none',
                        borderBottom: '2px solid #C5B4B9',
                        borderRadius: '0px'
                      }, // at page load
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                      {
                        border: 'none',
                        borderBottom: '2px solid #231104',
                        borderRadius: '0px'
                      }, // at hover state
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                      {
                        border: 'none',
                        borderBottom: '2px solid #231104',
                        borderRadius: '0px'
                      } // at focused state
                  }}
                />
                {errors.time?.message && (
                  <div className={styles.FormError}>
                    <FormError error={errors.time.message} />
                  </div>
                )}
              </div>
            )}
          />
        </div>
        <Button
          text={`${t('checkout.authorized.delivery.btn3')}`}
          type={'submit'}
          colorMode="black"
          style={{ marginTop: '40px' }}
        />
      </Form>
    </div>
  );
};
