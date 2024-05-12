import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

import { SecondHeader } from '../../../widgets/secondHeader';
import { CheckOutFooter } from '../../../widgets/checkoutFooter';
import loader from '../../../shared/assets/image/checkOut/loader.gif';
import { usePaymentCaptureMutation } from '../model/api/paymentCapture/paymentCapture.ts';
import {
  getRouteErrorAfterPayment,
  getRouteThanksYou
} from '../../../shared/consts/router.ts';

export interface ICheckOutPendingPage {}

const CheckoutPendingPage: FC<ICheckOutPendingPage> = () => {
  const token = new URLSearchParams(window.location.search).get('token');
  const navigate = useNavigate();
  const [createCapture, { data }] = usePaymentCaptureMutation();

  useEffect(() => {
    if (token) {
      createCapture(token);
    }
  }, [createCapture, token]);

  useEffect(() => {
    if (data?.status === 'success') {
      navigate(getRouteThanksYou());
    }
  }, [data?.status, navigate]);

  useEffect(() => {
    if (data?.status === 'error') {
      navigate(getRouteErrorAfterPayment());
    }
  }, [data?.status, navigate]);

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <SecondHeader />
        <div className={styles.main}>
          <h1>Your payment is now being processed</h1>
          <p>Please wait a few seconds to confirm your payment.</p>
          <div className={styles.image}>
            <img src={loader} alt="" />
          </div>
        </div>
      </div>
      <CheckOutFooter />
    </main>
  );
};

export default CheckoutPendingPage;
