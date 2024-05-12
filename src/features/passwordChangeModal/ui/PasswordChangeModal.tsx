import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Title } from '../../../shared/ui/Title';
import { Button } from '../../../shared/ui/button';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useChangePassword } from '../model/api/changePassword/changePassword.ts';
import { Modal } from '../../../shared/ui/modal';
import { Form } from '../../../shared/ui/form';
import { InputsWrapper } from '../../../shared/ui/InputsWrapper';
import { PasswordInput } from '../../../shared/ui/PasswordInput';
import { PasswordChangeSchema } from '../model/validators/PasswordChangeSchema.ts';

interface Inputs {
  passwordNew: string;
  passwordOld: string;
}

interface PasswordChangeProps {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
  showNext: (state: boolean) => void;
}

export const PasswordChangeModal: FC<PasswordChangeProps> = ({
  isOpen,
  setOpen,
  showNext
}) => {
  const { t } = useTranslation();
  const [changePassword, { isLoading, error }] = useChangePassword();

  const onClose = () => {
    setOpen(false);
  };
  const showSuccessModal = () => {
    showNext(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(PasswordChangeSchema)
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const passwords = {
      currentPassword: data.passwordOld,
      newPassword: data.passwordNew
    };
    await changePassword(passwords);
    reset();
    onClose();
    showSuccessModal();
  };

  if (error) {
    return <div>error</div>;
  }
  return (
    <Modal className={styles.modal} isOpen={isOpen} onClose={onClose}>
      <Title text={`${t('profile.modal.title')}`} />
      <ol className={styles.modal__list}>
        <li className={styles.modal__item}>{t('profile.modal.text1')}</li>
        <li className={styles.modal__item}>{t('profile.modal.text2')}</li>
      </ol>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <PasswordInput
            register={register}
            error={errors.passwordOld?.message}
            registerName={'passwordOld'}
            label={`${t('profile.modal.input1')}`}
          />
          <PasswordInput
            register={register}
            error={errors.passwordNew?.message}
            registerName={'passwordNew'}
            label={`${t('profile.modal.input2')}`}
          />
        </InputsWrapper>
        <Button
          sizeMode="full"
          text={`${t('profile.modal.btn')}`}
          style={{ marginTop: '50px' }}
          loading={isLoading}
        />
      </Form>
    </Modal>
  );
};
