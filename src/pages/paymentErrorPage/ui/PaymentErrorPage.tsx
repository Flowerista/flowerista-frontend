import { FC } from 'react';
import styles from './styles.module.scss';
import { SecondHeader } from '../../../widgets/secondHeader';
import { CheckOutFooter } from '../../../widgets/checkoutFooter';
import errorImage from '../../../shared/assets/image/checkOut/error.png';
import { useNavigate } from 'react-router-dom';
import { getRouteCheckOut } from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/Buttons/Button.tsx';

export interface IPaymentErrorPage {}

export const PaymentErrorPage: FC<IPaymentErrorPage> = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SecondHeader />
        <main className={styles.main}>
          <div className={styles.info}>
            <h1>Oh, No</h1>
            <h1>Something Went Wrong</h1>
            <p>
              Sorry we were unable to process your payment, please try again.
            </p>
            <form target={'_top'} className={styles.button}>
              <Button
                onClick={() => navigation(getRouteCheckOut())}
                text={'Go to Check out'}
              />
            </form>
          </div>
          <div className={styles.image}>
            <img src={errorImage} alt="" />
          </div>
        </main>
      </div>
      <CheckOutFooter />
    </div>
  );
};
