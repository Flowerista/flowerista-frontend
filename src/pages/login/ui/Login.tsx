import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Title } from '../../../shared/ui/Title';

import Flower from '../../../shared/assets/image/login/login_flower.png';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useLazyGetCheckEmailQuery } from '../../registration/api/checkEmail/checkEmail.ts';
import { useLoginMutation } from '../model/api/login/login.ts';

import { useProfileActions } from '../../profile/model/slice/profile/profile.slice.ts';
import {
  getRouteProfile,
  getRouteRegistration,
  getRouteRestoringAccess
} from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/button';
import { Form } from '../../../shared/ui/form';
import { InputsWrapper } from '../../../shared/ui/InputsWrapper';
import { EmailInput } from '../../../shared/ui/emailInput';
import { PasswordInput } from '../../../shared/ui/PasswordInput';
import { FormLink } from '../../../shared/ui/FormLink';
import { LoginSchema } from '../model/validators/LoginSchema.ts';
import Cookies from 'js-cookie';

type Inputs = {
  password: string;
  email: string;
};

const Login: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setProfile } = useProfileActions();
  const [setLogin, { data, isLoading, error }] = useLoginMutation();
  const [checkEmail] = useLazyGetCheckEmailQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(LoginSchema)
  });
  console.log(Cookies.get('refreshToken'));
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { data: checkedEmail } = await checkEmail(data.email);
    if (!checkedEmail) {
      setError('email', {
        type: 'checkEmail',
        message: 'This email is not registered'
      });
    } else {
      await setLogin(data);
    }
  };

  useEffect(() => {
    if (error) {
      setError('password', {
        type: 'setPasswordError',
        message: 'Login failed. Wrong password or email not confirmed'
      });
    } else if (data) {
      setProfile(data.user);
      Cookies.set('token', data.access_token);
      reset();
      navigate(getRouteProfile());
    }
  }, [data, error, navigate, reset, setError, setProfile]);

  return (
    <div data-testid="LoginPage" className={styles.login}>
      <div className={styles.login__container}>
        <Title text={`${t('login.title')}`} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputsWrapper>
            <EmailInput register={register} error={errors.email?.message} />
            <PasswordInput
              register={register}
              error={errors.password?.message}
            />
          </InputsWrapper>
          <Link to={getRouteRestoringAccess()} className={styles.login__link}>
            {t('login.btn1')}
          </Link>
          <Button text={`${t('login.btn2')}`} loading={isLoading} />
        </Form>

        <FormLink to={getRouteRegistration()} text={`${t(`login.btn3`)}`} />
      </div>
      <div className={styles.img}>
        <img src={Flower} alt="flower" />
      </div>
    </div>
  );
};
export default Login;
