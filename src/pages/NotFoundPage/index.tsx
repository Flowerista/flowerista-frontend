import { FC } from 'react';
import styles from './styles.module.scss';
import { Logo } from '../../components/Header/Logo';
import { useNavigate } from 'react-router-dom';
import { DataRoute } from '../../data/routes';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <main className={styles.notFound}>
      <div className={styles.notFound__container}>
        <div className={styles.notFound__header}>
          <div className={styles.logo_wrp}>
            <Logo type="footer" />
          </div>
        </div>
        <div className={styles.notFound__main}>
          <h2>{t('notFoundPage.title')}</h2>
          <span>{t('notFoundPage.sub_title')}</span>
          <p>{t('notFoundPage.description')}</p>
          <div className={styles.btn_wrp}>
            <Button
              text={t('notFoundPage.btn1')}
              onClick={() => navigate(DataRoute.Catalog)}
              sizeMode="full"
            />
            <Button
              text={t('notFoundPage.btn2')}
              onClick={() => navigate(DataRoute.Home)}
              colorMode="white"
              className={styles.btn}
              sizeMode="full"
            />
          </div>
        </div>
        <div className={styles.notFound__footer}>
          {t('notFoundPage.rights')}
        </div>
      </div>
    </main>
  );
};
