import { FC } from 'react';
import styles from './styles.module.scss';
import { Accordion } from '../../../../components/Accordion';
import { IUser } from '../../../../interface/global';

export interface IUserDelivery {
  user: IUser | undefined;
}

export const UserDelivery: FC<IUserDelivery> = ({ user }) => {
  return (
    <div className={styles.userDelivery}>
      <Accordion address={user?.address} />
    </div>
  );
};
