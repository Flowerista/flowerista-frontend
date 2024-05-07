import { FC } from 'react';

import Flower from '../../assets/image/restoring_access/restoring_success.png';
import styles from './styles.module.scss';
import { Title } from '../../components/Title/Title';
import { Form, InputsWrapper, PasswordInput } from '../../components/AppForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetPassword } from '../../utils/yup';

import { useTranslation } from 'react-i18next';
import { useAuthChangePassword } from '../../services/AuthService/changePassword/authChangePassword';
import { getRouteHome } from '../../app/routerConfig.tsx';

const PasswordRecovery: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const token = new URLSearchParams(window.location.search).get(
    'token'
  ) as string;
  const [changePassword] = useAuthChangePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<{ password: string; confirm_password: string }>({
    mode: 'onBlur',
    resolver: yupResolver(ResetPassword)
  });

  const onSubmit: SubmitHandler<{
    password: string;
    confirm_password: string;
  }> = async (data) => {
    try {
      await changePassword({
        passwordRepeated: data.confirm_password,
        password: data.password,
        token
      });
      reset();
    } catch (e) {
      console.log(e);
    }
    navigate(getRouteHome());
  };

  return (
    <div className={styles.restoring}>
      <div className={styles.restoring__wrapper}>
        <Title text={`${t('restoring.info.title')}`} />
        <Form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '50px' }}>
          <InputsWrapper>
            <PasswordInput
              registerName={'password'}
              placeholder={'Enter Password'}
              register={register}
              error={errors.password?.message}
            />
            <PasswordInput
              registerName={'confirm_password'}
              placeholder={'Enter Confirm Password'}
              register={register}
              error={errors.confirm_password?.message}
            />
          </InputsWrapper>
          <Button text={`${t('restoring.info.btn1')}`} />
        </Form>
      </div>
      <div className={styles.img}>
        <img src={Flower} alt="flower" />
      </div>
    </div>
  );
};
export default PasswordRecovery;
