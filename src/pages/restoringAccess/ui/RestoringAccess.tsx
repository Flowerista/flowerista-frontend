import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  EmailInput,
  Form,
  FormLink,
  InputsWrapper
} from '../../../shared/ui/appForm';
import { Title } from '../../../shared/ui/Title/Title.tsx';

import { RestoringAccessSchema } from '../../../shared/lib/validations';

import Flower from '../../../shared/assets/image/restoring_access/restoring_access.png';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useResetPasswordMutation } from '../../../services/AuthService/resetPassword/resetPassword.ts';
import {
  getRouteLogin,
  getRouteRestoringAccessSuccess
} from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/Buttons/Button.tsx';

interface Inputs {
  email: string;
}

const RestoringAccess: FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(RestoringAccessSchema)
  });
  const navigate = useNavigate();

  const [resetPassword] = useResetPasswordMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await resetPassword(String(data.email));
    navigate(getRouteRestoringAccessSuccess());
    reset();
  };

  return (
    <div className={styles.restoring}>
      <div className={styles.restoring__wrapper}>
        <Title text={`${t('restoring.success.title')}`} />
        <div className={styles.restoring__descr}>
          {t('restoring.success.desc')}
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '40px' }}>
          <InputsWrapper>
            <EmailInput register={register} error={errors.email?.message} />
          </InputsWrapper>
          <Button
            text={`${t('restoring.success.btn1')}`}
            style={{ marginTop: '40px' }}
          />
          <FormLink
            text={`${t('restoring.success.btn2')}`}
            to={getRouteLogin()}
          />
        </Form>
      </div>
      <div className={styles.img}>
        <img src={Flower} alt="flower" />
      </div>
    </div>
  );
};
export default RestoringAccess;
