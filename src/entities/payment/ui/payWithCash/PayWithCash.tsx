import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../../../shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRouteThanksYou } from '../../../../shared/consts/router.ts';
import { useCreateOrderMutation } from '../../model/api/createOrder/createOrder.ts';
import { useCart } from '../../../cart/model/selectors/getCart/getCart.ts';
import { useCheckout } from '../../../../pages/checkoutPage/model/selectors/getCheckout.ts';

export interface IPayWithCash {}

export const PayWithCash: FC<IPayWithCash> = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();

  const [createOrder, { data }] = useCreateOrderMutation();
  const [isChecked, setChecked] = useState(false);
  const cart = useCart();
  const checkout = useCheckout();

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const createOrderHandler = async () => {
    if (checkout) {
      const order = {
        address: checkout,
        sum: cart.reduce((total, item) => {
          const price =
            item.discountPrice !== null
              ? item.discountPrice
              : item.defaultPrice;
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
    }
  };
  useEffect(() => {
    if (data) {
      localStorage.setItem('orderId', String(data.id));
      navigation(getRouteThanksYou());
    }
  }, [data, navigation]);

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
