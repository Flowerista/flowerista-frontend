import { FC } from 'react';
import Modal from '../Modal.tsx';

import styles from './styles.module.scss';
import { Title } from '../../Title/Title.tsx';
import { Button } from '../../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../store/store.ts';
import { useModalActions } from '../../../../store/modals/modals.slice.ts';
import { getRouteLogin, getRouteRegistration } from '../../../consts/router.ts';

interface WishlistModalInfoProps {}

const WishlistModal: FC<WishlistModalInfoProps> = () => {
  const { wishlistModalOpen } = useAppSelector((state) => state.modals.modals);
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

export default WishlistModal;
