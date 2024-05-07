import { CSSProperties, FC, useEffect } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/store';
import { getTotalPrice } from '../../../utils/helpers';
import { Button, Cart } from '../../index';

import { BsArrowLeft, BsXLg } from 'react-icons/bs';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useModalActions } from '../../../store/modals/modals.slice';
import { useTranslation } from 'react-i18next';
import { getRouteCheckOut } from '../../../app/routerConfig.tsx';

interface CartModalProps {
  className?: string;
  style?: CSSProperties;
}

export const CartModal: FC<CartModalProps> = ({ style, className }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cart);
  const { modals } = useAppSelector((state) => state.modals);
  const { setCartModalOpen } = useModalActions();

  const onClose = () => {
    setCartModalOpen(false);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const closeModal = (e: any) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.body.addEventListener('keyup', (e: any) => closeModal(e));

    return () => {
      document.body.removeEventListener('keyup', closeModal);
      setCartModalOpen(false);
    };
  }, []);

  if (!modals.cartModalOpen) {
    return null;
  }

  const totalPrice = getTotalPrice(cart);

  const toCheckOut = () => {
    navigate(getRouteCheckOut());
  };
  return (
    <div className={classNames(styles.modal)} onClick={onClose}>
      <div
        className={classNames(styles.modal__wrapper, className)}
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        <Cart mode="modal" />
        <div className={styles.modal__footer}>
          <div className={styles.price}>
            <p>{t('cart.price')}</p>
            <div className={styles.price__item}>
              {totalPrice}
              <span>USD</span>
            </div>
          </div>
          <div className={styles.btns}>
            <Button
              sizeMode="full"
              text={`${t('cart.btn1')}`}
              onClick={toCheckOut}
              disabled={cart.length === 0}
            />
            <Button
              sizeMode="full"
              colorMode="white"
              text={`${t('cart.btn2')}`}
              onClick={onClose}
            />
          </div>
        </div>
        <div className={styles.modal__btn} onClick={onClose}>
          <BsArrowLeft size={24} />
          {t('cart.back')}
        </div>
        <div className={styles.title}>
          <p className={styles.title__text}>{t('cart.modal')}</p>
          <BsXLg size={24} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
