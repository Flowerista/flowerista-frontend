import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import styles from '../../../widgets/footer/ui/styles.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormError } from '../../../shared/ui/formError';
import { useSubscriptionMutation } from '../model/api/setSubscription/setSubscription.ts';
import { EmailSchema } from '../model/validations/emailSchema.ts';

export const Subscribe: FC = () => {
  const [subscription] = useSubscriptionMutation();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<{ email: string }>({
    mode: 'onBlur',
    resolver: yupResolver(EmailSchema)
  });

  const onSubmit = async (data: { email: string }) => {
    await subscription(data.email);
    reset();
  };

  return (
    <div className={styles.footer__subscribe}>
      <h3>{t('footer.subscribe')}</h3>
      <p>{t('footer.subscribe_description')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="E-mail" {...register('email')} />
        <button type="submit">
          <span>{t('footer.btn')}</span>
          <BsArrowRight style={{ fontSize: '24px', fill: 'white' }} />
        </button>
        {errors.email && (
          <div style={{ marginRight: '150px' }}>
            <FormError error={errors.email.message} />
          </div>
        )}
      </form>
    </div>
  );
};
