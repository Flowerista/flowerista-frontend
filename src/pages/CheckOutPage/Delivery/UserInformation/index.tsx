import {FC} from 'react';
import styles from './styles.module.scss';
import userImage from '../../../../assets/image/checkOut/user.png'
import {IUser} from '../../../../interface/global';
import {useTranslation} from 'react-i18next';

export interface IUserInformation {
	user: IUser
	setVisible: (visible: boolean) => void

}

export const UserInformation: FC<IUserInformation> = ({user, setVisible}) => {
	const {t} = useTranslation()
	return (
		 <div className={styles.UserInformation}>
			 <div className={styles.UserInformation__title}>
				 <h1>{t('checkout.authorized.data.title')}</h1>
				 <button onClick={() => {
					 setVisible(true);
				 }}>
					 {t('checkout.authorized.data.btn1')}
				 </button>
			 </div>
			 <div className={styles.UserInformation__content}>
				 <img src={userImage} alt="user-avatar"/>
				 <div className={styles.UserInformation__content__user}>
					 <span>{user.firstName} {user.lastName}</span>
					 <span>{user.email}</span>
					 <span>+380{user.phoneNumber}</span>
				 </div>
			 </div>
		 </div>
	);
};

