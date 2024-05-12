import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BsArrowRight } from 'react-icons/bs';

import styles from './styles.module.scss';
import { useProfileActions } from '../../pages/profile/model/slice/profile/profile.slice.ts';
import { Tab, TabList } from '@headlessui/react';
import { profileLinks } from '../../shared/consts/profileLinks.ts';
import { getRouteLogin } from '../../shared/consts/router.ts';

interface SidebarPros
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: FC<SidebarPros> = ({ className }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { logoutAll } = useProfileActions();

  const onLogout = () => {
    logoutAll();
    navigate(getRouteLogin());
  };

  return (
    <TabList as={'div'} className={`${styles.sidebar} ${className}`}>
      <ul className={styles.sidebar__menu}>
        {profileLinks.map((link) => (
          <li key={link.id}>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button className={styles.sidebar__item}>
                  {selected ? (
                    <BsArrowRight className={styles.arrow} />
                  ) : (
                    <div className={styles.arrow}></div>
                  )}
                  <p>{link.name}</p>
                </button>
              )}
            </Tab>
          </li>
        ))}
      </ul>
      <div className={styles.sidebar__item}>
        <div className={styles.arrow}></div>
        <button className={styles.log_out} onClick={onLogout}>
          {t('profile.links.link4')}
        </button>
      </div>
    </TabList>
  );
};
