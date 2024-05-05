import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { DataRoute } from '../../data/routes';
import { SecondHeader } from '../../components/SecondHeader';
import { CheckOutFooter } from '../CheckOutPage/CheckOutFooter';
import loader from '../../assets/image/checkOut/loader.gif';
import { usePaymentCaptureMutation } from '../../services/OrderService/paymentCapture/paymentCapture';

export interface ICheckOutPendingPage {}

const CheckOutPendingPage: FC<ICheckOutPendingPage> = () => {
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
      navigate(DataRoute.ThanksYou);
    }
  }, [data?.status, navigate]);

  useEffect(() => {
    if (data?.status === 'error') {
      navigate(DataRoute.ErrorAfterPayment);
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

export default CheckOutPendingPage;
