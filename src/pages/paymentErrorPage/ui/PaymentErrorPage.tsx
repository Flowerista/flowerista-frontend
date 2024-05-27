import { FC } from 'react';
import styles from './styles.module.scss';
import { SecondHeader } from '../../../widgets/secondHeader';
import { CheckOutFooter } from '../../../widgets/checkoutFooter';
import errorImage from '../../../shared/assets/image/checkOut/error.png';
import { useNavigate } from 'react-router-dom';
import { getRouteCheckOut } from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/button';
import { useTranslation } from 'react-i18next';

export const PaymentErrorPage: FC = () => {
  const navigation = useNavigate();
  const { t } = useTranslation();
  return (
    <div data-testid="PaymentErrorPage" className={styles.wrapper}>
      <div className={styles.container}>
        <SecondHeader />
        <main className={styles.main}>
          <div className={styles.info}>
            <h1>{t('errorPayment.title')}</h1>
            <h1>{t('errorPayment.text1')}</h1>
            <p>{t('errorPayment.text2')}</p>
            <form target={'_top'} className={styles.button}>
              <Button
                onClick={() => navigation(getRouteCheckOut())}
                text={t('errorPayment.text3')}
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
