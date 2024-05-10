import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { getRouteHome } from '../../app/routerConfig.tsx';
import { BsChevronCompactDown } from 'react-icons/bs';
import { Sidebar } from '../../components/Sidebar/Sidebar.tsx';
import { SidebarModal } from '../../components/Modals/SidebarModal/SidebarModal.tsx';
import { useModalActions } from '../../store/modals/modals.slice.ts';
import { TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import { profileLinks } from '../../data/consts/profileLinks.ts';
import PersonalInformation from './PersonalInformation/PersonalInformation.tsx';
import ProfileOrders from './Orders/Orders.tsx';
import Wishlist from './Wishlist/Wishlist.tsx';
import { useGetProfile } from '../../services/UserService/getProfile/getProfile.ts';
import { Loader } from '../../components/shared/Loading';
import { useGetOrderHistory } from '../../services/UserService/getOrderHistory/getOrderHistory.ts';
import { useGetWishlistQuery } from '../../services/wishlistService/getWishlist/getWishlist.ts';
import { useProfileActions } from '../../store/profile/profile.slice.ts';

const ProfilePage: FC = () => {
  const {
    data: profile,
    isLoading: isLoadingProfile,
    error: errorProfile
  } = useGetProfile();
  const { data: orders, isLoading: isLoadingOrder } = useGetOrderHistory();
  const {
    data: wishlist,
    isLoading: isLoadingWishlist,
    error: errorWishlist
  } = useGetWishlistQuery();
  const { setSidebarModalOpen } = useModalActions();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onOpen = () => {
    setSidebarModalOpen(true);
  };

  const { setProfile } = useProfileActions();

  useEffect(() => {
    if (profile) {
      setProfile(profile);
    }
  }, [profile, setProfile]);

  if (isLoadingOrder || isLoadingProfile || isLoadingWishlist) {
    return <Loader />;
  }

  if (errorProfile || errorWishlist) {
    return <h1>Error...</h1>;
  }

  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      className={styles.page_wrp}
    >
      <SidebarModal />
      <div className={styles.nav}>
        <Link to={getRouteHome()}>Home</Link>|
        <p>{profileLinks[selectedIndex].name}</p>
      </div>
      <button className={styles.btn} onClick={onOpen}>
        {profileLinks[selectedIndex].name}
        <BsChevronCompactDown size={24} />
      </button>
      <TabPanels className={styles.content}>
        <TabPanel>
          <PersonalInformation />
        </TabPanel>
        <TabPanel>
          <ProfileOrders order={orders} />
        </TabPanel>
        <TabPanel>
          <Wishlist wishlist={wishlist} />
        </TabPanel>
      </TabPanels>
      <div className={styles.sidebar_wrp}>
        <Sidebar className={styles.sidebar} />
        <div></div>
      </div>
    </TabGroup>
  );
};
export default ProfilePage;
