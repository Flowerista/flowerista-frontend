import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { BsChevronCompactDown } from 'react-icons/bs';
import { Sidebar } from '../../../widgets/Sidebar/Sidebar.tsx';
import { SidebarModal } from '../../../widgets/SidebarModal/SidebarModal.tsx';
import { useModalActions } from '../../../store/modals/modals.slice.ts';
import { TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import { profileLinks } from '../../../shared/consts/profileLinks.ts';
import ProfilePersonalInformation from '../../../widgets/profilePersonalInformation/ProfilePersonalInformation.tsx';
import ProfileWishlist from '../../../widgets/profileWishlist/ProfileWishlist.tsx';
import { useGetProfile } from '../../../services/UserService/getProfile/getProfile.ts';
import { Loader } from '../../../shared/ui/Loading';
import { useGetOrderHistory } from '../../../services/UserService/getOrderHistory/getOrderHistory.ts';
import { useGetWishlistQuery } from '../../../services/wishlistService/getWishlist/getWishlist.ts';
import { useProfileActions } from '../../../store/profile/profile.slice.ts';
import { getRouteHome } from '../../../shared/consts/router.ts';
import ProfileOrders from '../../../widgets/profileOrders/ProfileOrders.tsx';

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
          <ProfilePersonalInformation />
        </TabPanel>
        <TabPanel>
          <ProfileOrders order={orders} />
        </TabPanel>
        <TabPanel>
          <ProfileWishlist wishlist={wishlist} />
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
