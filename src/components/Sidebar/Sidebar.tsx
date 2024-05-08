import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BsArrowRight } from 'react-icons/bs';

import styles from './styles.module.scss';
import { useProfileActions } from '../../store/profile/profile.slice';
import {
  getRouteLogin,
  getRouteOrders,
  getRoutePersonalInformation,
  getRouteWishlist
} from '../../app/routerConfig.tsx';

interface SidebarPrors
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: FC<SidebarPrors> = ({ className, ...props }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { clearDataUser, logout } = useProfileActions();

  const onLogout = () => {
    clearDataUser();
    logout();
    navigate(getRouteLogin());
  };
  return (
    <div className={`${styles.sidebar} ${className}`} {...props}>
      <ul className={styles.sidebar__menu}>
        <li>
          <NavLink to={getRoutePersonalInformation()}>
            {({ isActive }) => (
              <div className={styles.sidebar__item}>
                {isActive ? (
                  <BsArrowRight className={styles.arrow} />
                ) : (
                  <div className={styles.arrow}></div>
                )}
                <p>{t('profile.links.link1')}</p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={getRouteOrders()}>
            {({ isActive }) => (
              <div className={styles.sidebar__item}>
                {isActive ? (
                  <BsArrowRight className={styles.arrow} />
                ) : (
                  <div className={styles.arrow}></div>
                )}
                <p>{t('profile.links.link2')}</p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={getRouteWishlist()}>
            {({ isActive }) => (
              <div className={styles.sidebar__item}>
                {isActive ? (
                  <BsArrowRight className={styles.arrow} />
                ) : (
                  <div className={styles.arrow}></div>
                )}
                <p>{t('profile.links.link3')}</p>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
      <div className={styles.sidebar__item}>
        <div className={styles.arrow}></div>
        <button className={styles.log_out} onClick={onLogout}>
          {t('profile.links.link4')}
        </button>
      </div>
    </div>
  );
};
