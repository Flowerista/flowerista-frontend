import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Title } from '../../../shared/ui/Title';

import Flower from '../../../shared/assets/image/registration/flower.png';
import styles from './styles.module.scss';
import { upFirstChar } from '../../../shared/lib/helpers';
import { useTranslation } from 'react-i18next';
import { usePostRegistration } from '../api/postRegistration/postRegistration.ts';
import { useLazyGetCheckEmailQuery } from '../api/checkEmail/checkEmail.ts';
import { useLazyGetCheckPhoneQuery } from '../api/checkPhone/checkPhone.ts';
import { getRouteLogin } from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/button';
import { InputsWrapper } from '../../../shared/ui/InputsWrapper';
import { Form } from '../../../shared/ui/form';
import { NameInput } from '../../../shared/ui/NameInput';
import { SurnameInput } from '../../../shared/ui/SurnameInput';
import { EmailInput } from '../../../shared/ui/emailInput';
import { PhoneInput } from '../../../shared/ui/PhoneInput';
import { PasswordInput } from '../../../shared/ui/PasswordInput';
import { FormLink } from '../../../shared/ui/FormLink';
import { RegisterInterface } from '../types/registerInterface.ts';
import { RegisterSchema } from '../validators/registerSchema.ts';
import {
  RegistrationCompleted,
  RegistrationError
} from '../../../widgets/modals';

type Inputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
};

const Registration: FC = () => {
  const { t } = useTranslation();
  const [showRegisterCompleted, setShowRegisterCompleted] =
    useState<boolean>(false);
  const [showRegisterError, setShowRegisterError] = useState<boolean>(false);
  const [sendRequest, { data, isLoading, isError }] = usePostRegistration();
  const [checkEmail] = useLazyGetCheckEmailQuery();
  const [checkPhone] = useLazyGetCheckPhoneQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setError
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      phone: ''
    },
    resolver: yupResolver(RegisterSchema)
  });

  const onSubmit: SubmitHandler<Inputs> = async ({
    password,
    email,
    name,
    surname,
    phone
  }) => {
    const newName = upFirstChar(name);
    const newSurname = upFirstChar(surname);
    const newPhone = +phone.slice(4).replace(/\D/g, '');
    const newData: RegisterInterface = {
      password,
      email,
      firstName: newName,
      lastName: newSurname,
      phoneNumber: newPhone
    };
    const { data: checkedEmail } = await checkEmail(email);

    if (checkedEmail) {
      setError('email', { type: 'checkEmail', message: 'Mail already exists' });
    } else {
      const { data: checkedPhone } = await checkPhone(String(newPhone));
      if (checkedPhone) {
        setError('phone', {
          type: 'checkPhone',
          message: 'Phone already exists'
        });
      } else {
        await sendRequest(newData);
      }
    }
  };

  useEffect(() => {
    if (data || data === null) {
      setShowRegisterCompleted(true);
      reset();
    } else if (isError) {
      setShowRegisterError(true);
    }
  }, [data, isError, reset]);

  return (
    <div data-testid="RegistrationPage" className={styles.registration}>
      <div className={styles.registration__container}>
        <Title text={`${t('register.title')}`} />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputsWrapper>
            <NameInput register={register} error={errors.name?.message} />
            <SurnameInput register={register} error={errors.surname?.message} />
            <EmailInput register={register} error={errors.email?.message} />
            <PhoneInput control={control} error={errors.phone?.message} />
            <PasswordInput
              register={register}
              error={errors.password?.message}
            />
          </InputsWrapper>
          <Button
            loading={isLoading}
            text={`${t('register.btn1')}`}
            style={{ marginTop: '40px' }}
          />
        </Form>

        <div className={styles.flex}>
          <FormLink to={getRouteLogin()} text={`${t('register.btn2')}`} />
        </div>
      </div>
      <RegistrationCompleted
        isOpen={showRegisterCompleted}
        setOpen={setShowRegisterCompleted}
      />
      <RegistrationError
        isOpen={showRegisterError}
        setOpen={setShowRegisterError}
      />
      <div className={styles.img}>
        <img src={Flower} alt="flower" />
      </div>
    </div>
  );
};
export default Registration;
