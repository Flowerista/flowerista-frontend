import {FC} from 'react';
import styles from './styles.module.scss';
import {Unregistered} from './Unregistered';
import {UserInformation} from './UserInformation';
import {UserDelivery} from './UserDelivery';
import {UserPayment} from './UserPayment';
import {CheckOutPopUp} from '../../../components/CheckOutPopUp';
import useOutside from '../../../hooks/useOutside';
import {IUser} from '../../../interface/global';

export interface IDelivery {
	user: IUser | undefined
}


export const Delivery: FC<IDelivery> = ({user}) => {
	const {ref, isShow, setIsShow} = useOutside(false)
	return (
		 <>
			 <div className={styles.wrapper}>
				 <div className={styles.delivery}>
					 {user?.phoneNumber ? <UserInformation user={user} setVisible={setIsShow}/> : <Unregistered/>}
					 <div className={`${user ? '' : styles.unregistered}`}>
						 <UserDelivery user={user}/>
						 <UserPayment/>
					 </div>
				 </div>
			 </div>
			 {isShow && <CheckOutPopUp ref={ref} setVisible={setIsShow}/>}
		 </>
	);
};

