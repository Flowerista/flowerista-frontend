import {FC, useEffect} from 'react';
import styles from './styles.module.scss';
import {CheckOutHeader} from './CheckOutHeader';
import {CheckOutFooter} from './CheckOutFooter';
import {Delivery} from './Delivery';
import {Order} from './Order';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {getProfile} from '../../store/user/user.slice';
import {Loader} from '../../components/shared/Loading';

export interface ICheckOutPage {
}


const CheckOutPage: FC<ICheckOutPage> = () => {
	const {loadingStatus, errorStatus, user} = useAppSelector(store => store.user)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProfile())
	}, [])
	if (loadingStatus.getProfile) {
		return (
			 <main className={styles.wrapper}>
				 <CheckOutHeader/>
				 <div className={styles.checkOut}>
					 <Loader/>
				 </div>
				 <CheckOutFooter/>
			 </main>
		);
	}

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

export default CheckOutPage
