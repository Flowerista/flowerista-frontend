import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DataRoute } from '../../data/routes';
import { useAppDispatch } from '../../store/store';
import { BsArrowRight } from 'react-icons/bs';

import styles from './styles.module.scss';
import { clearDataUser, logout } from '../../store/profile/profile.slice';

interface SidebarPrors
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: React.FC<SidebarPrors> = ({ className, ...props }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(clearDataUser());
    dispatch(logout());
    navigate(DataRoute.Login);
  };
  return (
    <div className={`${styles.sidebar} ${className}`} {...props}>
      <ul className={styles.sidebar__menu}>
        <li>
          <NavLink to={DataRoute.PersonalInformation}>
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
          <NavLink to={DataRoute.Orders}>
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
          <NavLink to={DataRoute.Wishlist}>
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
