import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { CheckOutHeader } from '../../../widgets/checkoutHeader';
import { CheckOutFooter } from '../../../widgets/checkoutFooter';
import { Title } from '../../../shared/ui/Title';
import { useTranslation } from 'react-i18next';
import { getTotalPrice } from '../../../shared/lib/helpers';
import { CheckoutUserInformation } from '../../../widgets/checkoutUserInformation';
import { CheckOutUserInformationUnregistered } from '../../../widgets/checkoutUserInformationUnregistered';
import { CheckoutPaymentAccordion } from '../../../widgets/accordions/CheckoutPaymentAccordion';
import { CheckoutDeliveryAccordion } from '../../../widgets/accordions/CheckoutDeliveryAccordion';
import { useCheckoutActions } from '../model/slice/checkout.slice.ts';
import { Cart } from '../../../widgets/cart';
import { CheckoutModal } from '../../../widgets/checkoutModal';
import { useUser } from '../../profile/model/selectors/getUser.ts';
import { useCart } from '../../../entities/cart/model/selectors/getCart/getCart.ts';

const CheckoutPage: FC = () => {
  const { t } = useTranslation();
  const cart = useCart();

  const totalPrice = getTotalPrice(cart);
  const [isShow, setIsShow] = useState<boolean>(false);
  const { resetAllState } = useCheckoutActions();
  const user = useUser();

  useEffect(() => {
    return () => {
      resetAllState();
    };
  }, [resetAllState]);

  return (
    <main data-testid="CheckoutPage" className={styles.wrapper}>
      <CheckoutModal setIsOpen={setIsShow} isOpen={isShow} />
      <CheckOutHeader />
      <div className={styles.checkOut}>
        <div className={styles.container}>
          <div className={styles.delivery}>
            {user ? (
              <CheckoutUserInformation user={user} setVisible={setIsShow} />
            ) : (
              <CheckOutUserInformationUnregistered />
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

export default CheckoutPage;
