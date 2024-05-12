import { FC } from 'react';

import styles from './styles.module.scss';
import { Title } from '../../../shared/ui/Title';
import { Button } from '../../../shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { getRouteHome } from '../../../shared/consts/router.ts';
import { Modal } from '../../../shared/ui/modal';

interface PasswordSuccessProps {
  isOpen: boolean;
  setOpen: (state: false) => void;
}

export const PasswordSuccessModal: FC<PasswordSuccessProps> = (props) => {
  const { isOpen, setOpen } = props;
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
        text="Password Updated Successfully"
        className={styles.modal__title}
      />
      <div className={styles.list__wrapper}>
        <ol className={styles.modal__list}>
          <li className={styles.modal__item}>
            Congratulations! Your password has been successfully updated. You
            can now log in to your account using the new password.
          </li>
          <li className={styles.modal__item}>
            If you have any further questions or require assistance, feel free
            to contact our customer support.
          </li>
          <li className={styles.modal__item}>
            Thank you for choosing our service!
          </li>
        </ol>
      </div>
      <Button
        text="Go to main page"
        onClick={() => toMainPage()}
        style={{ marginTop: '50px' }}
        sizeMode="full"
      />
      <Button
        text="Go to profile page"
        colorMode="white"
        onClick={onClose}
        style={{ marginTop: '20px' }}
        sizeMode="full"
      />
    </Modal>
  );
};
