import { FC } from 'react';
import styles from './styles.module.scss';
import { Logo } from '../../../widgets/header/ui/Logo';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import {
  getRouteCatalog,
  getRouteHome
} from '../../../shared/consts/router.ts';
import { Button } from '../../../shared/ui/button';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <main data-testid="NotFoundPage" className={styles.notFound}>
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
              onClick={() => navigate(getRouteCatalog())}
              sizeMode="full"
            />
            <Button
              text={t('notFoundPage.btn2')}
              onClick={() => navigate(getRouteHome())}
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
