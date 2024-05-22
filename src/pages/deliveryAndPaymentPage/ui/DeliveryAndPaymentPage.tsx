import { FC } from 'react';
import styles from './styles.module.scss';
import rose from '../../../shared/assets/image/deliveryAndPayment/rose.png';
import { useTranslation } from 'react-i18next';

const DeliveryAndPaymentPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div data-testid="DeliveryAndPaymentPage" className={styles.container}>
      <div className={styles.container__info}>
        <h1>{t('deliveryAndPayment.title')}</h1>
        <div className={styles.container__info_content}>
          <h2>{t('deliveryAndPayment.delivery.title')}</h2>
          <ul>
            <li>{t('deliveryAndPayment.delivery.text1')}</li>
            <li>{t('deliveryAndPayment.delivery.text2')}</li>
            <li>{t('deliveryAndPayment.delivery.text3')}</li>
            <li>{t('deliveryAndPayment.delivery.text4')}</li>
          </ul>
        </div>
        <div className={styles.container__info_content}>
          <h2>{t('deliveryAndPayment.payment.title')}</h2>
          <ul>
            <li>{t('deliveryAndPayment.payment.text1')}</li>
            <li>{t('deliveryAndPayment.payment.text2')}</li>
          </ul>
          <p>{t('deliveryAndPayment.text1')}</p>
          <p>{t('deliveryAndPayment.text2')}</p>
        </div>
      </div>
      <div className={styles.container__image}>
        <img src={rose} alt="rose" />
      </div>
    </div>
  );
};
export default DeliveryAndPaymentPage;
