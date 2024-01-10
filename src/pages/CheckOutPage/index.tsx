import {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {CheckOutHeader} from './CheckOutHeader';
import {CheckOutFooter} from './CheckOutFooter';
import {Delivery} from './Delivery';
import {Order} from './Order';
import UserService from '../../services/UserService/UserService';
import {IUser} from '../../interface/global';

export interface ICheckOutPage {
}


export const CheckOutPage: FC<ICheckOutPage> = () => {
	const [user, setUser] = useState<IUser>()


	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await UserService.profile()
				setUser(res.data)
			} catch (e) {
				console.log(e)
			}
		}

		fetchData()
	}, [])

	return (
		 <main className={styles.wrapper}>
			 <CheckOutHeader/>
			 <div className={styles.checkOut}>
				 <Delivery user={user}/>
				 <Order/>
			 </div>
			 <CheckOutFooter/>
		 </main>
	);
};

