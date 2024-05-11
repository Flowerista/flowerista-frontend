import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { CheckOutFooter } from '../../../widgets/checkoutFooter';
import { SecondHeader } from '../../../widgets/secondHeader';
import { useAppSelector } from '../../../store/store.ts';
import flower from '../../../shared/assets/image/checkOut/thanks_you_flower.png';
import { useNavigate } from 'react-router-dom';

import { useCartActions } from '../../../store/cart/cart.slice.ts';
import {
  getRouteCatalog,
  getRouteHome
} from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/Buttons/Button.tsx';

export interface ICheckOutThanksPage {}

const CheckoutThanksPage: FC<ICheckOutThanksPage> = () => {
  const orderId = useAppSelector((state) => state.checkoutOrderId.orderId);
  const navigation = useNavigate();
  const { cleanCart } = useCartActions();

  useEffect(() => {
    cleanCart();
    // return () => {
    // 	setOrderId(0)
    // };
  }, [cleanCart]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SecondHeader />
        <main className={styles.main}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h1>Thank you </h1>
              <h1>For choosing Us!</h1>
            </div>
            <p>We have received your order № {orderId}.</p>
            <p>A confirmation email has been sent to your email address.</p>
            <span className={styles.span}>
              Our manager will contact you soon.
            </span>
            <div className={styles.buttons}>
              <form target={'_top'}>
                <Button
                  onClick={() => {
                    navigation(getRouteCatalog());
                  }}
                  text={'Go to Catalog '}
                />
              </form>
              <form target={'_top'}>
                <Button
                  onClick={() => {
                    navigation(getRouteHome());
                  }}
                  colorMode={'white'}
                  text={'Go to main page'}
                />
              </form>
            </div>
          </div>
          <div className={styles.image}>
            <img src={flower} alt="flower" />
          </div>
        </main>
      </div>
      <CheckOutFooter />
    </div>
  );
};

export default CheckoutThanksPage;
