import { FC } from 'react';
import Modal from '../Modal';

import styles from './styles.module.scss';
import { Title } from '../../Title/Title';
import { Button } from '../../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import { DataRoute } from '../../../data/routes';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setWishlistModalOpen } from '../../../store/modals/modals.slice';

interface WishlistModalInfoProps {}

const WishlistModal: FC<WishlistModalInfoProps> = () => {
  const dispatch = useAppDispatch();
  const { wishlistModalOpen } = useAppSelector((state) => state.modals.modals);
  const navigate = useNavigate();
  const onClose = () => {
    dispatch(setWishlistModalOpen(false));
  };
  const toLogin = () => {
    onClose();
    navigate(DataRoute.Login);
  };
  const toRegister = () => {
    onClose();
    navigate(DataRoute.Registration);
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
