import { FC, ReactNode, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { MainLayout } from '../MainLayout';
import { BsChevronCompactDown } from 'react-icons/bs';
import { SidebarModal } from '../../components/Modals/SidebarModal/SidebarModal';
import { useModalActions } from '../../store/modals/modals.slice';
import { getRouteHome, getRouteLogin } from '../../app/routerConfig.tsx';

export interface IProfileLayout {
  children: ReactNode;
  pageName: 'Profile' | 'Wishlist' | 'Orders history';
}

export const ProfileLayout: FC<IProfileLayout> = ({ children, pageName }) => {
  const navigate = useNavigate();
  const { setSidebarModalOpen } = useModalActions();

  const onOpen = () => {
    setSidebarModalOpen(true);
  };
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate(getRouteLogin());
    }
  }, [localStorage.getItem('token')]);

  return (
    <MainLayout>
      <div className={styles.page_wrp}>
        <div className={styles.nav}>
          <Link to={getRouteHome()}>Home</Link>|<p>{pageName}</p>
        </div>
        <button className={styles.btn} onClick={onOpen}>
          {pageName}
          <BsChevronCompactDown size={24} />
        </button>
        <div className={styles.content}>{children}</div>
        <div className={styles.sidebar_wrp}>
          <Sidebar className={styles.sidebar} />
          <div></div>
        </div>
      </div>
      <SidebarModal />
    </MainLayout>
  );
};
