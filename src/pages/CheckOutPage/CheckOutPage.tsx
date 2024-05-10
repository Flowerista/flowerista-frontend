import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { CheckOutHeader } from './CheckOutHeader';
import { CheckOutFooter } from './CheckOutFooter';
import { Title } from '../../components/Title/Title.tsx';
import { Cart } from '../../components';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store/store.ts';
import { getTotalPrice } from '../../utils/helpers';
import { UserInformation } from './Delivery/UserInformation';
import { UserInformationUnregistered } from './Delivery/UserInformationUnregistered';
import { CheckoutModal } from '../../components/Modals/checkoutModal';
import { CheckoutPaymentAccordion } from './Accordions/CheckoutPaymentAccordion';
import { CheckoutDeliveryAccordion } from './Accordions/CheckoutDeliveryAccordion';
import { useCheckoutActions } from '../../store/checkout/checkout.slice.ts';

export interface ICheckOutPage {}

const CheckOutPage: FC<ICheckOutPage> = () => {
  const { t } = useTranslation();
  const { cart } = useAppSelector((store) => store.cart);
  const totalPrice = getTotalPrice(cart);
  const [isShow, setIsShow] = useState<boolean>(false);
  const { resetAllState } = useCheckoutActions();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    return () => {
      resetAllState();
    };
  }, [resetAllState]);

  return (
    <main className={styles.wrapper}>
      <CheckoutModal setIsOpen={setIsShow} isOpen={isShow} />
      <CheckOutHeader />
      <div className={styles.checkOut}>
        <div className={styles.container}>
          <div className={styles.delivery}>
            {user ? (
              <UserInformation user={user} setVisible={setIsShow} />
            ) : (
              <UserInformationUnregistered />
            )}
            <div className={`${user ? '' : styles.unregistered}`}>
              <div className={styles.userDelivery}>
                <CheckoutDeliveryAccordion />
              </div>
              <div className={styles.userDelivery}>
                <CheckoutPaymentAccordion />
              </div>
            </div>
          </div>
        </div>
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
      </div>
      <CheckOutFooter />
    </main>
  );
};

export default CheckOutPage;
