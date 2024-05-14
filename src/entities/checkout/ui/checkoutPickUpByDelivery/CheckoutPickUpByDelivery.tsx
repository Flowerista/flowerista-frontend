import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useCheckoutActions } from '../../../../pages/checkoutPage/model/slice/checkout.slice.ts';

import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/button';
import { TextInput } from '../../../../shared/ui/TextInput';
import { Form } from '../../../../shared/ui/form';
import { InputsWrapper } from '../../../../shared/ui/InputsWrapper';
import { FormError } from '../../../../shared/ui/formError';
import { CheckOutAddressSchema } from '../../model/validators/CheckOutAddressSchema.ts';
import {
  useCity,
  useEntrance,
  useFlat,
  useHouse,
  useStreet
} from '../../../../pages/checkoutPage/model/selectors/getCheckout.ts';
import { useUser } from '../../../../pages/profile/model/selectors/getUser.ts';

interface InterfaceCheckoutPickUpByDelivery {
  setIsActive: (isActive: boolean) => void;
}

export const CheckoutPickUpByDelivery: FC<
  InterfaceCheckoutPickUpByDelivery
> = ({ setIsActive }) => {
  const { t } = useTranslation();
  const {
    setTime,
    setCity,
    setDate,
    setEntrance,
    setFlat,
    setHouse,
    setStreet
  } = useCheckoutActions();

  const flat = useFlat();
  const house = useHouse();
  const street = useStreet();
  const entrance = useEntrance();
  const city = useCity();
  const user = useUser();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      city: `${user?.address && user?.address.city ? user?.address.city : ''}`,
      street: `${user?.address && user?.address.street ? user?.address.street : ''}`,
      house: `${user?.address && user?.address.house ? user?.address.house : ''}`,
      flat: `${user?.address && user?.address.flat ? user?.address.flat : ''}`,
      entrance: `${user?.address && user?.address.entrance ? user?.address.entrance : ''}`,
      date: undefined,
      time: undefined
    },
    resolver: yupResolver(CheckOutAddressSchema)
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = (data) => {
    setDate(dayjs(data.date).format('YYYY-MM-DD'));
    setTime(dayjs(data.time).format('HH:mm'));
    setCity(data.city);
    setStreet(data.street);
    setHouse(data.house);
    setFlat(data.flat);
    setEntrance(data.entrance);
    setIsActive(true);
    reset();
  };

  return (
    <div className={styles.secondTab}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <TextInput
            label="City"
            placeholder="City"
            register={register}
            registerName="city"
            error={errors.city?.message}
            defaultValue={city}
          />
          <TextInput
            label="Street"
            placeholder="Street"
            register={register}
            registerName="street"
            error={errors.street?.message}
            defaultValue={street}
          />
          <InputsWrapper style={{ flexDirection: 'row', gap: '20px' }}>
            <TextInput
              label="House"
              placeholder="House"
              register={register}
              registerName="house"
              error={errors.house?.message}
              defaultValue={house}
            />
            <TextInput
              label="Entrance"
              placeholder="Entrance"
              register={register}
              registerName="entrance"
              error={errors.entrance?.message}
              defaultValue={entrance}
              required={false}
            />
            <TextInput
              label="Flat"
              placeholder="Flat"
              register={register}
              registerName="flat"
              error={errors.flat?.message}
              defaultValue={flat}
              required={false}
            />
          </InputsWrapper>
          <div className={styles.wrappPicker}>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <div className={styles.datePicker}>
                  <DatePicker
                    {...field}
                    // className={styles.datePicker}
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
                <div className={styles.timePicker}>
                  <TimePicker
                    {...field}
                    // className={styles.timePicker}
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
                    <FormError error={errors.time.message} />
                  )}
                </div>
              )}
            />
          </div>
        </InputsWrapper>
        <Button
          text={`${t('checkout.authorized.delivery.btn3')}`}
          colorMode="black"
          style={{ marginTop: '40px' }}
        />
      </Form>
    </div>
  );
};
