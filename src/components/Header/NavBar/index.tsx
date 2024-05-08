import { FC } from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { ParametersMenu } from '../../ParametersMenu';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import {
  getRouteAboutUs,
  getRouteCatalog,
  getRouteDeliveryAndPayment
} from '../../../app/routerConfig.tsx';

export interface INavBar {
  className?: string;
  type: 'menu' | 'header';
}

export const NavBar: FC<INavBar> = ({ className, type }) => {
  const { t } = useTranslation();
  return (
    <nav className={classNames(styles.navbar, styles[type], className)}>
      <ul className={styles.navbar__menu}>
        <li>
          <NavLink
            to={getRouteCatalog()}
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            {t('header.first-link')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRouteAboutUs()}
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            {t('header.second-link')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRouteDeliveryAndPayment()}
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            {t('header.third-link')}
          </NavLink>
        </li>
      </ul>
      {type === 'header' ? <ParametersMenu /> : null}
    </nav>
  );
};
