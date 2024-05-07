import {FC} from 'react';
import {EmptyOrder} from './EmptyOrder';
import styles from './styles.module.scss'
import {OrderItem} from './OrderItem';
import {useGetOrderHistory} from '../../../services/UserService/getOrderHistory/getOrderHistory';
import {Loader} from '../../../components/shared/Loading';

export interface IProfileOrders {
}

export interface OrderItemHistory {
	productId: number;
	name: string;
	quantity: number;
	sizeId: number;
	size: string;
	price: number;
	imageUrls: {
		[key: number]: string;
	};
}

export interface AddressHistory {
	city: string;
	street: string;
	house: string;
	entrance: string;
	flat: string;
	date: string | null;
	time: string | null;
	type: string | null;
}

export interface UserHistory {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: number;
}

export interface OrderHistory {
	id: number;
	status: string;
	payId: string | null;
	userId: number;
	sum: number;
	orderItems: OrderItemHistory[];
	address: AddressHistory;
	user: UserHistory;
	created: number | null;
	updated: number | null;
}

const ProfileOrders: FC<IProfileOrders> = () => {

	const {data, isLoading, error} = useGetOrderHistory()

	if (isLoading) {
		return <div><Loader/></div>
	}
	if (error) {
		return <div>erorr</div>
	}

	return (
		 <article className={styles.wrapper}>
			 {data ?
					<div>
						{data.map(product => (
							 <OrderItem item={product}/>
						))}
					</div>
					:
					<EmptyOrder></EmptyOrder>
			 }
		 </article>
	);
};

export default ProfileOrders
