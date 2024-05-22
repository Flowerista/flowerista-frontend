import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Title } from '../../../shared/ui/Title';

import Flower from '../../../shared/assets/image/restoring_access/restoring_access.png';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useResetPasswordMutation } from '../model/api/resetPassword/resetPassword.ts';
import {
  getRouteLogin,
  getRouteRestoringAccessSuccess
} from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/button';
import { InputsWrapper } from '../../../shared/ui/InputsWrapper';
import { Form } from '../../../shared/ui/form';
import { EmailInput } from '../../../shared/ui/emailInput';
import { FormLink } from '../../../shared/ui/FormLink';
import { RestoringAccessSchema } from '../model/validators/RestoringAccessSchema.ts';

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
    <div data-testid="RegistrationAccessPage" className={styles.restoring}>
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
