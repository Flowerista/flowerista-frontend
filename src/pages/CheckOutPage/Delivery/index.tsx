import {FC} from 'react';
import styles from './styles.module.scss';
import {Unregistered} from './Unregistered';
import {UserInformation} from './UserInformation';
import {UserDelivery} from './UserDelivery';
import {UserPayment} from './UserPayment';

export interface IDelivery {
}

const user = {
	name: 'Sara Ferder',
	email: '+380 99 999 99 99',
	number:"sara@email.com"
}

export const Delivery: FC<IDelivery> = () => {
	return (
		 <div className={styles.wrapper}>
			 <div className={styles.delivery}>
			 {user ? <UserInformation user={user}/> :<Unregistered/>}
				 <UserDelivery/>
				 <UserPayment/>
			 </div>
		 </div>
	);
};

