import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useChangePersonalInformation } from '../model/api/changePersonalInfo/changePersonalInfo.ts';
import { Button } from '../../../shared/ui/button';
import { PersonalInformationSchema } from '../model/validations/PersonalInformationSchema.ts';
import { upFirstChar } from '../../../shared/lib/helpers';
import { InputsWrapper } from '../../../shared/ui/InputsWrapper';
import { Title } from '../../../shared/ui/Title';
import { Form } from '../../../shared/ui/form';
import { NameInput } from '../../../shared/ui/NameInput';
import { SurnameInput } from '../../../shared/ui/SurnameInput';
import { useUser } from '../../../pages/profile/model/selectors/getUser.ts';

interface Inputs {
  name: string;
  surname: string;
}

interface PersonalFormProps {
  onOpen: () => void;
}

export const PersonalInformationForm: FC<PersonalFormProps> = ({ onOpen }) => {
  const { t } = useTranslation();
  const user = useUser();
  const [change, { isLoading, error }] = useChangePersonalInformation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(PersonalInformationSchema)
  });

  useEffect(() => {
    if (user) {
      const { firstName, lastName } = user;
      setValue('name', firstName ? firstName : '');
      setValue('surname', lastName ? lastName : '');
    }
  }, [setValue, user]);

  const onSubmit: SubmitHandler<Inputs> = async ({ name, surname }) => {
    const newFirstName = upFirstChar(name);
    const newLastName = upFirstChar(surname);

    const data = { firstName: newFirstName, lastName: newLastName };
    await change(data);
  };
  if (error) {
    return <div>error</div>;
  }
  return (
    <div className={styles.form__wrapper}>
      <div className={styles.form__head}>
        <Title text={`${t('profile.personal.title')}`} />
        <p className={styles.form__descr}>{t('profile.personal.text')}</p>
      </div>
      <div className={styles.form__body}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputsWrapper>
            <NameInput register={register} error={errors.name?.message} />
            <SurnameInput register={register} error={errors.surname?.message} />
            <div className={styles.password} onClick={onOpen}>
              {t('profile.personal.btn1')}
            </div>
          </InputsWrapper>
          <Button
            text={`${t('profile.personal.btn2')}`}
            colorMode="white"
            sizeMode="full"
            className={styles.personal_btn}
            loading={isLoading}
          />
        </Form>
      </div>
    </div>
  );
};
