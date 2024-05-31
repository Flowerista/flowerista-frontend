import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { BsChevronCompactDown } from 'react-icons/bs';
import { Sidebar } from '../../../widgets/Sidebar/Sidebar.tsx';
import { SidebarModal } from '../../../widgets/SidebarModal/SidebarModal.tsx';
import { useModalActions } from '../../../entities/modals/model/slice/modals.slice.ts';
import { TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import { profileLinks } from '../../../shared/consts/profileLinks.ts';
import { useGetProfile } from '../model/api/getProfile/getProfile.ts';
import { useGetOrderHistory } from '../model/api/getOrderHistory/getOrderHistory.ts';
import { useGetWishlistQuery } from '../../../features/card/model/api/getWishlist/getWishlist.ts';
import { useProfileActions } from '../model/slice/profile/profile.slice.ts';
import { getRouteHome } from '../../../shared/consts/router.ts';
import { ProfilePersonalInformation } from '../../../widgets/profilePersonalInformation';
import { Loader } from '../../../shared/ui/loading';
import { ProfileOrders } from '../../../widgets/profileOrders/ProfileOrders.tsx';
import { ProfileWishlist } from '../../../widgets/profileWishlist';

const ProfilePage: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data: orders, isLoading: isLoadingOrder } = useGetOrderHistory();

  const {
    data: profile,
    isLoading: isLoadingProfile,
    error: errorProfile
  } = useGetProfile();

  const {
    data: wishlist,
    isLoading: isLoadingWishlist,
    error: errorWishlist
  } = useGetWishlistQuery('wishlist');

  const { setSidebarModalOpen } = useModalActions();
  const { setProfile } = useProfileActions();

  const onOpen = () => {
    setSidebarModalOpen(true);
  };

  useEffect(() => {
    if (profile) {
      setProfile(profile);
    }
  }, [profile, setProfile]);

  if (isLoadingOrder || isLoadingProfile || isLoadingWishlist) {
    return (
      <div data-testid="ProfilePage">
        <Loader />
      </div>
    );
  }

  if (errorProfile || errorWishlist) {
    return <h1>Error...</h1>;
  }

  return (
    <main data-testid="ProfilePage">
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
    </main>
  );
};
export default ProfilePage;
