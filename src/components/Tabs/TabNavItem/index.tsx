import { FC } from 'react';
import styles from './styles.module.scss';

interface ITabNavItem {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabNavItem: FC<ITabNavItem> = ({
  id,
  title,
  activeTab,
  setActiveTab
}) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      onClick={handleClick}
      className={`${styles.tabItem} ${activeTab === id ? `` : `${styles.active}`}`}
    >
      {title}
    </li>
  );
};
export default TabNavItem;
