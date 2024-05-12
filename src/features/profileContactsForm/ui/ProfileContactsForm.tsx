import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '../../../features/profileContactsForm/ui/styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Form } from '../../../shared/ui/form';
import { Title } from '../../../shared/ui/Title';
import { InputsWrapper } from '../../../shared/ui/InputsWrapper';
import { EmailInput } from '../../../shared/ui/emailInput';
import { PhoneInput } from '../../../shared/ui/PhoneInput';
import { ContactsSchema } from '../model/validators/ContactsSchema.ts';
import { useUser } from '../../../pages/profile/model/selectors/getUser.ts';

interface Inputs {
  email: string;
  phone: string;
}

export const ProfileContactsForm: FC = () => {
  const { t } = useTranslation();

  const user = useUser();
  const {
    register,
    formState: { errors },
    control,
    setValue
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(ContactsSchema)
  });

  useEffect(() => {
    if (user) {
      const { email, phoneNumber } = user;
      setValue('email', email ? email : '');
      setValue('phone', `${phoneNumber ? phoneNumber : ''}`);
    }
  }, [setValue, user]);

  return (
    <div className={styles.form__wrapper}>
      <div className={styles.form__head}>
        <Title text={`${t('profile.contacts.title')}`} />
        <p className={styles.form__descr}>{t('profile.contacts.text')}</p>
      </div>
      <div className={styles.form__body}>
        <Form onSubmit={() => {}}>
          <InputsWrapper>
            <EmailInput register={register} error={errors.email?.message} />
            <PhoneInput control={control} error={errors.phone?.message} />
          </InputsWrapper>
        </Form>
      </div>
    </div>
  );
};
