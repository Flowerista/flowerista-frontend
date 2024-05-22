import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { CheckOutFooter } from '../../../widgets/checkoutFooter';
import { SecondHeader } from '../../../widgets/secondHeader';
import flower from '../../../shared/assets/image/checkOut/thanks_you_flower.png';
import { useNavigate } from 'react-router-dom';

import { useCartActions } from '../../../entities/cart/model/slice/cart.slice.ts';
import {
  getRouteCatalog,
  getRouteHome
} from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/button';
import { useTranslation } from 'react-i18next';

export interface ICheckOutThanksPage {}

const CheckoutThanksPage: FC<ICheckOutThanksPage> = () => {
  const navigation = useNavigate();
  const { cleanCart } = useCartActions();
  const { t } = useTranslation();

  useEffect(() => {
    return () => {
      cleanCart();
    };
  }, [cleanCart]);

  return (
    <div data-testid="CheckoutThanksPage" className={styles.wrapper}>
      <div className={styles.container}>
        <SecondHeader />
        <main className={styles.main}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h1>{t('thanks.title')} </h1>
              <h1>{t('thanks.title2')}</h1>
            </div>
            <p>
              {t('thanks.order')}
              {localStorage.getItem('orderId')}.
            </p>
            <p>{t('thanks.text')}</p>
            <span className={styles.span}>{t('thanks.text2')}</span>
            <div className={styles.buttons}>
              <form target={'_top'}>
                <Button
                  onClick={() => {
                    navigation(getRouteCatalog());
                    localStorage.removeItem('orderId');
                  }}
                  text={t('thanks.btn')}
                />
              </form>
              <form target={'_top'}>
                <Button
                  onClick={() => {
                    navigation(getRouteHome());
                    localStorage.removeItem('orderId');
                  }}
                  colorMode={'white'}
                  text={t('thanks.btn2')}
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
