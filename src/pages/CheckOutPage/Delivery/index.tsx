import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {Unregistered} from './Unregistered';
import {UserInformation} from './UserInformation';
import {UserDelivery} from './UserDelivery';
import {UserPayment} from './UserPayment';
import {CheckOutPopUp} from '../../../components/CheckOutPopUp';
import useOutside from '../../../hooks/useOutside';

export interface IDelivery {
}

const user = {
	name: 'Sara Ferder',
	email: '+380 99 999 99 99',
	number:"sara@email.com"
}

export const Delivery: FC<IDelivery> = () => {
	const {ref,isShow,setIsShow}=useOutside(false)
	return (
<>
	<div className={styles.wrapper}>
		<div className={styles.delivery}>
			{user ? <UserInformation user={user} setVisible={setIsShow}/> :<Unregistered/>}
			<UserDelivery/>
			<UserPayment/>
		</div>
	</div>
	{isShow && <CheckOutPopUp ref={ref} setVisible={setIsShow}/>}
</>
	);
};

