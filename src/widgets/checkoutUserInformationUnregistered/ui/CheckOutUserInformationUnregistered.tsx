import { FC } from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  getRouteLogin,
  getRouteRegistration
} from '../../../shared/consts/router.ts';

export const CheckOutUserInformationUnregistered: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.Unregistered}>
      <h1>{t('checkout.unauthorized.title')}</h1>
      <p>{t('checkout.unauthorized.text')} </p>
      <div>
        <NavLink to={getRouteLogin()}>
          {t('checkout.unauthorized.btn1')}
        </NavLink>
        <NavLink to={getRouteRegistration()}>
          {t('checkout.unauthorized.btn2')}
        </NavLink>
      </div>
    </div>
  );
};
