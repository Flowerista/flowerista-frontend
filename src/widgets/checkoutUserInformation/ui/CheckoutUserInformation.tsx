import { FC } from 'react';
import styles from './styles.module.scss';
import userImage from '../../../shared/assets/image/checkOut/user.png';
import { useTranslation } from 'react-i18next';
import { IUser } from '../../../pages/login/model/types/AuthResponseInterface.ts';

export interface IUserInformation {
  user: IUser;
  setVisible: (visible: boolean) => void;
}

export const CheckoutUserInformation: FC<IUserInformation> = ({
  user,
  setVisible
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.UserInformation}>
      <div className={styles.UserInformation__title}>
        <h1>{t('checkout.authorized.data.title')}</h1>
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          {t('checkout.authorized.data.btn1')}
        </button>
      </div>
      <div className={styles.UserInformation__content}>
        <img src={userImage} alt="user-avatar" />
        <div className={styles.UserInformation__content__user}>
          <span>
            {user.firstName} {user.lastName}
          </span>
          <span>{user.email}</span>
          <span>+380{user.phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};
