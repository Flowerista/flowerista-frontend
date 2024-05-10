import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PersonalInformationSchema } from '../../../../utils/yup';
import {
  Form,
  InputsWrapper,
  NameInput,
  SurnameInput
} from '../../../../components/AppForm';
import { Button } from '../../../../components/Buttons/Button';
import { Title } from '../../../../components/Title/Title';

import styles from './styles.module.scss';
import { useAppSelector } from '../../../../store/store';
import { upFirstChar } from '../../../../utils/helpers';
import { useTranslation } from 'react-i18next';
import { useChangePersonalInformation } from '../../../../services/UserService/changePersonalInfo/changePersonalInfo';

interface Inputs {
  name: string;
  surname: string;
}

interface PersonalFormProps {
  onOpen: () => void;
}

export const PersonalInformationForm: FC<PersonalFormProps> = ({ onOpen }) => {
  const { t } = useTranslation();
  const { user } = useAppSelector((state) => state.user);
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
    setValue('name', user.firstName);
    setValue('surname', user.lastName);
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
