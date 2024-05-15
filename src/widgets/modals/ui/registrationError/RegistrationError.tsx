import { FC } from 'react';

import styles from './styles.module.scss';
import { Title } from '../../../../shared/ui/Title';
import { Button } from '../../../../shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRouteHome } from '../../../../shared/consts/router.ts';
import { Modal } from '../../../../shared/ui/modal';

interface RegistrationErrorProps {
  isOpen: boolean;
  setOpen: (state: false) => void;
}

export const RegistrationError: FC<RegistrationErrorProps> = ({
  isOpen,
  setOpen
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onClose = () => {
    setOpen(false);
  };
  const toMainPage = () => {
    onClose();
    navigate(getRouteHome());
  };
  return (
    <Modal className={styles.modal} isOpen={isOpen} onClose={onClose}>
      <Title
        text={`${t('register.error.title')}`}
        className={styles.modal__title}
      />
      <div className={styles.list__wrapper}>
        <ol className={styles.modal__list}>
          <li className={styles.modal__item}>{t('register.error.text1')}</li>
          <li className={styles.modal__item}>{t('register.error.text2')}</li>
          <li className={styles.modal__item}>{t('register.error.text3')}</li>
        </ol>
      </div>
      <Button
        text={`${t('register.error.btn1')}`}
        onClick={onClose}
        style={{ marginTop: '50px' }}
      />
      <Button
        text={`${t('register.error.btn2')}`}
        colorMode="white"
        onClick={() => toMainPage()}
        style={{ marginTop: '20px' }}
      />
    </Modal>
  );
};
