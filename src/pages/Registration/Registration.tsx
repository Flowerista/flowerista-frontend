import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegisterSchema } from '../../utils/yup';
import { DataRoute } from '../../data/routes';
import {
  EmailInput,
  Form,
  FormLink,
  InputsWrapper,
  NameInput,
  PasswordInput,
  PhoneInput,
  SurnameInput
} from '../../components/AppForm';
import { Button } from '../../components/Buttons/Button';
import { Title } from '../../components/Title/Title';
import { IRegister } from '../../interface/register';
import RegistrationCompleted from '../../components/Modals/RegistrationCompleted/RegistrationCompleted';
import RegistrationError from '../../components/Modals/RegistrationError/RegistrationError';

import Flower from '../../assets/image/registration/flower.png';
import styles from './styles.module.scss';
import { upFirstChar } from '../../utils/helpers';
import { useTranslation } from 'react-i18next';
import { usePostRegistration } from '../../services/UserService/postRegistration/postRegistration';
import { useLazyGetCheckEmailQuery } from '../../services/AuthService/checkEmail/checkEmail';
import { useLazyGetCheckPhoneQuery } from '../../services/AuthService/checkPhone/checkPhone';

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
    const newData: IRegister = {
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
    if (data === null) {
      setShowRegisterCompleted(true);
      reset();
    } else if (isError) {
      setShowRegisterError(true);
    }
  }, [data, isError]);

  return (
    <div className={styles.registration}>
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
          <FormLink to={DataRoute.Login} text={`${t('register.btn2')}`} />
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
