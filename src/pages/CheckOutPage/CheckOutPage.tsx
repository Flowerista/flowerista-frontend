import {FC, useEffect} from 'react';
import styles from './styles.module.scss';
import {CheckOutHeader} from './CheckOutHeader';
import {CheckOutFooter} from './CheckOutFooter';
import {Delivery} from './Delivery';
import {Order} from './Order';
import {useGetProfile} from '../../services/UserService/getProfile/getProfile';
import {Loader} from '../../components/shared/Loading';
import {useAppDispatch} from '../../store/store';
import {setProfile} from '../../store/profile/profile.slice';

export interface ICheckOutPage {
}


const CheckOutPage: FC<ICheckOutPage> = () => {
	const {error, isLoading, data} = useGetProfile()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (data) {
			dispatch(setProfile(data))
		}
	}, [data]);


	if (isLoading) {
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
				 <Delivery user={data}/>
				 <Order/>
			 </div>
			 <CheckOutFooter/>
		 </main>
	);
};

export default CheckOutPage
