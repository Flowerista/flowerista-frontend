import { FC } from 'react';
import styles from './styles.module.scss';
import { Cart } from '../../../components';
import { Title } from '../../../components/Title/Title';
import { getTotalPrice } from '../../../utils/helpers';
import { useAppSelector } from '../../../store/store';
import { useTranslation } from 'react-i18next';

export interface IOrder {}

export const Order: FC<IOrder> = () => {
  const { t } = useTranslation();
  const { cart } = useAppSelector((store) => store.cart);
  const totalPrice = getTotalPrice(cart);

  return (
    <div className={styles.order}>
      <div className={styles.order__content}>
        <Title text={t('checkout.order.title')} />
        <Cart mode="checkout" />
        <div className={styles.price}>
          <p>{t('checkout.order.price')}</p>
          <div className={styles.price__item}>
            {totalPrice}
            <span> USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};
