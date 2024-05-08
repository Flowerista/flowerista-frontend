import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { CheckOutHeader } from './CheckOutHeader';
import { CheckOutFooter } from './CheckOutFooter';
import { Delivery } from './Delivery';
import { Order } from './Order';
import { useGetProfile } from '../../services/UserService/getProfile/getProfile';
import { Loader } from '../../components/shared/Loading';
import { useProfileActions } from '../../store/profile/profile.slice';

export interface ICheckOutPage {}

const CheckOutPage: FC<ICheckOutPage> = () => {
  const { isLoading, data } = useGetProfile();
  const { setProfile } = useProfileActions();

  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data, setProfile]);

  if (isLoading) {
    return (
      <main className={styles.wrapper}>
        <CheckOutHeader />
        <div className={styles.checkOut}>
          <Loader />
        </div>
        <CheckOutFooter />
      </main>
    );
  }

  return (
    <main className={styles.wrapper}>
      <CheckOutHeader />
      <div className={styles.checkOut}>
        <Delivery user={data} />
        <Order />
      </div>
      <CheckOutFooter />
    </main>
  );
};

export default CheckOutPage;
