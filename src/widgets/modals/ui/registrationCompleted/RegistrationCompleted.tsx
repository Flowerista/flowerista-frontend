import { FC } from 'react';

import styles from './styles.module.scss';
import { Title } from '../../../../shared/ui/Title';
import { Button } from '../../../../shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRouteHome } from '../../../../shared/consts/router.ts';
import { Modal } from '../../../../shared/ui/modal';

interface RegistrationCompletedProps {
  isOpen: boolean;
  setOpen: (state: false) => void;
}

export const RegistrationCompleted: FC<RegistrationCompletedProps> = ({
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
        text={`${t('register.successes.title')}`}
        className={styles.modal__title}
      />
      <div className={styles.list__wrapper}>
        <ol className={styles.modal__list}>
          <li className={styles.modal__item}>
            {t('register.successes.text1')}
          </li>
          <li className={styles.modal__item}>
            {t('register.successes.text2')}
          </li>
          <li className={styles.modal__item}>
            {t('register.successes.text3')}
          </li>
          <li className={styles.modal__item}>
            {t('register.successes.text4')}
          </li>
        </ol>
      </div>
      <Button
        text={`${t('register.successes.btn2')}`}
        onClick={() => toMainPage()}
        style={{ marginTop: '50px' }}
      />
    </Modal>
  );
};
