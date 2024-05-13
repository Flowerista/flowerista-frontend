import { FC } from 'react';
import styles from './styles.module.scss';
import { SecondHeader } from '../../secondHeader';
import { CheckOutFooter } from '../../checkoutFooter';
import errorImage from '../../../shared/assets/image/checkOut/error.png';
import { Button } from '../../../shared/ui/button';
import { useTranslation } from 'react-i18next';

export const ErrorPage: FC = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SecondHeader />
        <main className={styles.main}>
          <div className={styles.info}>
            <h1>{t('error.title')}</h1>
            <h1>{t('error.text1')}</h1>
            <p>{t('error.text2')}</p>
            <form target={'_top'} className={styles.button}>
              <Button onClick={reloadPage} text={t('error.text3')} />
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
