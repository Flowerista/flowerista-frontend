import {FC} from 'react';
import styles from './styles.module.scss';
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../../../data/routes';
import userImage from '../../../../assets/image/checkOut/user.png'

export interface IUserInformation {
	user:any
}

export const UserInformation: FC<IUserInformation> = ({user}) => {
	return (
		 <div className={styles.UserInformation}>
			 <div className={styles.UserInformation__title}>
				 <h1>Your Data</h1>
				 <NavLink to={DataRoute.PersonalInformation} target={"_top"}>change</NavLink>
			 </div>
			 <div className={styles.UserInformation__content}>
				 <img src={userImage} alt=""/>
				 <div className={styles.UserInformation__content__user}>
					 <span>{user.name}</span>
					 <span>{user.email}</span>
					 <span>{user.number}</span>
				 </div>
			 </div>
		 </div>
	);
};

