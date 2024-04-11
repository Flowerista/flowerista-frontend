import {FC, useEffect, useState} from 'react';
import {EmptyOrder} from './EmptyOrder';
import styles from './styles.module.scss'
import {OrderItem} from './OrderItem';
import OrderHistoryService from '../../../services/OrderHistoryService/order-history-service';

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

export const ProfileOrders: FC<IProfileOrders> = () => {

	const [data, setData] = useState<OrderHistory[]>()

	const getOrderHistory = async () => {
		const res = await OrderHistoryService.getHistory()
		setData(res.data)

	}

	useEffect(() => {
		getOrderHistory()
	}, []);


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

