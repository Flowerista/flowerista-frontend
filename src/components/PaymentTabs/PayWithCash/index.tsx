import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCreateOrderMutation } from '../../../services/OrderService/createOrder';
import { useAppSelector } from '../../../store/store';
import { useOrderIdAction } from '../../../store/checkout/checkoutOrderId.slice';
import { getRouteThanksYou } from '../../../app/routerConfig.tsx';

export interface IPayWithCash {}

export const PayWithCash: FC<IPayWithCash> = () => {
  const { t } = useTranslation();
  const navgigation = useNavigate();

  const [createOrder, { data }] = useCreateOrderMutation();
  const [isChecked, setChecked] = useState(false);
  const cart = useAppSelector((state) => state.cart.cart);
  const checkOut = useAppSelector((state) => state.checkout);
  const { setOrderId } = useOrderIdAction();

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const createOrderHandler = async () => {
    const order = {
      address: checkOut,
      sum: cart.reduce((total, item) => {
        const price =
          item.discountPrice !== null ? item.discountPrice : item.defaultPrice;
        const quantity = item.quantity;
        return total + price * quantity;
      }, 0),
      orderItems: cart.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        sizeId: item.sizes.find((size) => size.size === item.currentSize)?.id,
        discountPrice: item.discountPrice,
        price: item.defaultPrice,
        colorId: item.id
      }))
    };
    await createOrder(order);
  };

  useEffect(() => {
    if (data) {
      setOrderId(data.id);
      navgigation(getRouteThanksYou());
    }
  }, [data, navgigation, setOrderId]);

  return (
    <div className={styles.container}>
      <span>{t('checkout.authorized.payment.cash.text')}</span>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {t('checkout.authorized.payment.cash.btn')}
        </label>
      </div>
      <Button
        onClick={createOrderHandler}
        disabled={!isChecked}
        text={t('checkout.authorized.payment.cash.btn2')}
        colorMode="black"
        style={{ marginTop: '25px' }}
      />
    </div>
  );
};
