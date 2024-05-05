import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Form, TextInput } from '../../../../components/AppForm';
import { Button } from '../../../../components/Buttons/Button';
import { Title } from '../../../../components/Title/Title';
import { AddressSchema } from '../../../../utils/yup';

import styles from './styles.module.scss';
import { useAppSelector } from '../../../../store/store';
import { useTranslation } from 'react-i18next';
import { useChangeAddress } from '../../../../services/UserService/changeAddress/changeAddress';

export interface Inputs {
  city: string;
  street: string;
  house: string;
  entrance?: string;
  flat?: string;
}

export const AddressForm: FC = () => {
  const { t } = useTranslation();

  const {
    user: {
      address: { city, street, house, entrance, flat }
    }
  } = useAppSelector((state) => state.user);

  const [changeAddress, { isLoading, error }] = useChangeAddress();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(AddressSchema)
  });

  useEffect(() => {
    setValue('city', city ? city : '');
    setValue('street', street ? street : '');
    setValue('house', house ? house : '');
    setValue('entrance', entrance ? entrance : '');
    setValue('flat', flat ? flat : '');
  }, [city, entrance, flat, house, setValue, street]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { city, street, house, entrance, flat } = data;

    const newAddress = {
      city,
      street,
      house,
      entrance: entrance ? entrance : null,
      flat: flat ? flat : null
    };
    await changeAddress(newAddress);
  };

  if (error) {
    return <div>erorr</div>;
  }

  return (
    <div className={styles.form__wrapper}>
      <div className={styles.form__head}>
        <Title text={`${t('profile.address.title')}`} />
        <p className={styles.form__descr}>{t('profile.address.text')}</p>
      </div>
      <div className={styles.form__body}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs_wpr}>
            <TextInput
              label={`${t('profile.address.city')}`}
              placeholder="City"
              register={register}
              registerName="city"
              error={errors.city?.message}
            />
            <TextInput
              label={`${t('profile.address.street')}`}
              placeholder="Street"
              register={register}
              registerName="street"
              error={errors.street?.message}
            />
            <TextInput
              label={`${t('profile.address.house')}`}
              placeholder="House"
              register={register}
              registerName="house"
              error={errors.house?.message}
            />
            <TextInput
              label={`${t('profile.address.entrance')}`}
              placeholder="Entrance"
              register={register}
              registerName="entrance"
              error={errors.entrance?.message}
            />
            <TextInput
              label={`${t('profile.address.flat')}`}
              placeholder="Flat"
              register={register}
              registerName="flat"
              error={errors.flat?.message}
            />
          </div>
          <Button
            text={`${t('profile.address.btn1')}`}
            colorMode="white"
            sizeMode="full"
            style={{ marginTop: '40px' }}
            loading={isLoading}
          />
        </Form>
      </div>
    </div>
  );
};
