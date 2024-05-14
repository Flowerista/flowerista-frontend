import { FC } from 'react';

import styles from './styles.module.scss';
import { Title } from '../../../../shared/ui/Title';
import { Button } from '../../../../shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { useModalActions } from '../../model/slice/modals.slice.ts';
import {
  getRouteLogin,
  getRouteRegistration
} from '../../../../shared/consts/router.ts';
import { Modal } from '../../../../shared/ui/modal';
import { useModals } from '../../model/selectors/getModals.ts';

interface WishlistModalInfoProps {}

export const WishlistModal: FC<WishlistModalInfoProps> = () => {
  const wishlistModalOpen = useModals().wishlistModalOpen;
  const navigate = useNavigate();
  const { setWishlistModalOpen } = useModalActions();

  const onClose = () => {
    setWishlistModalOpen(false);
  };

  const toLogin = () => {
    onClose();
    navigate(getRouteLogin());
  };

  const toRegister = () => {
    onClose();
    navigate(getRouteRegistration());
  };

  return (
    <Modal
      className={styles.modal}
      isOpen={wishlistModalOpen}
      onClose={onClose}
    >
      <Title
        text="Wishlist Access Notification"
        className={styles.modal__title}
      />
      <div className={styles.list__wrapper}>
        <ol className={styles.modal__list}>
          <li className={styles.modal__item}>
            Adding an item to the wishlist is available only for registered
            users.
          </li>
          <li className={styles.modal__item}>
            Please log in or register to access this feature.
          </li>
        </ol>
      </div>
      <Button
        text="Have an account"
        onClick={toLogin}
        style={{ marginTop: '50px' }}
      />
      <Button
        text="Register"
        colorMode="white"
        onClick={toRegister}
        style={{ marginTop: '20px' }}
      />
    </Modal>
  );
};
