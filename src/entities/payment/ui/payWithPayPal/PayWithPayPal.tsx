import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import {
  PayPalButtons,
  PayPalButtonsComponentProps
} from '@paypal/react-paypal-js';
import { useTranslation } from 'react-i18next';
import { usePaymentInitMutation } from '../../model/api/paymentInit/paymentInit.ts';
import { useCart } from '../../../cart';
import { useCheckout } from '../../../../pages/checkoutPage/model/selectors/getCheckout.ts';
import { useCreateOrderMutation } from '../../model/api/createOrder/createOrder.ts';

export interface IPayWithPayPal {}

export const PayWithPayPal: FC<IPayWithPayPal> = () => {
  const { t } = useTranslation();
  const cart = useCart();
  const checkout = useCheckout();
  const [loading, setLoading] = useState(false);
  const [isChecked, setChecked] = useState<boolean>(false);
  const [createOrder, { data, error }] = useCreateOrderMutation();
  const [paymentInit, { data: paymentData, error: paymentError }] =
    usePaymentInitMutation();

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  useEffect(() => {
    const handleCreateOrder = async () => {
      if (loading) {
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
            sizeId: item.sizes.find((size) => size.size === item.currentSize)
              ?.id,
            discountPrice: item.discountPrice,
            price: item.defaultPrice,
            colorId: item.id
          }))
        };
        createOrder(order);
      }
    };

    handleCreateOrder();
  }, [loading, cart, checkout, createOrder]);

  useEffect(() => {
    if (data) {
      paymentInit(data.id);
      localStorage.setItem('orderId', String(data.id));
    }
  }, [data, paymentInit]);

  useEffect(() => {
    if (paymentData) {
      window.location.href = paymentData.redirectUrl;
    }
  }, [paymentData]);

  if (error || paymentError) {
    return <div>erorr</div>;
  }

  const onCreateOrder: PayPalButtonsComponentProps['createOrder'] = async (
    _data,
    actions
  ) => {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: `${cart.reduce((total, item) => {
              const price =
                item.discountPrice !== null
                  ? item.discountPrice
                  : item.defaultPrice;
              const quantity = item.quantity;
              return total + price * quantity;
            }, 0)}`
          }
        }
      ]
    });
  };

  const onApproveOrder: PayPalButtonsComponentProps['onApprove'] = async () => {
    try {
      setLoading(true);
    } catch (error) {
      console.error('Error capturing order:', error);
    }
  };

  return (
    <div className={styles.payment}>
      <span>{t('checkout.authorized.payment.online.text')}</span>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {t('checkout.authorized.payment.online.btn')}
        </label>
      </div>
      <PayPalButtons
        disabled={!isChecked}
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => onCreateOrder(data, actions)}
        onApprove={(data, actions) => onApproveOrder(data, actions)}
      />
    </div>
  );
};
