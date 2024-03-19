import {FC} from 'react';
import {EmptyOrder} from './EmptyOrder';
import styles from './styles.module.scss'
import image from '../../../assets/image/profile/order/flowerCart.png';
import {OrderItem} from './OrderItem';

export interface IProfileOrders {
}

export const ProfileOrders: FC<IProfileOrders> = () => {
	const order = true
	const object = [
		{
			id: '123-756',
			status: 'Active',
			total: '2959',
			address: {
				city: 'Lviv',
				street: 'King Olga',
				house: '14a',
				flat: '',
				entrance: '',
				date: '02.11.2023',
				type: 'mail',
			},
			user: {
				telephone: '095587123',
				name: 'Ihor Vitrikush',
			},
			products: [
				{
					image: image,
					name: 'Bouquet 34',
					size: 'medium',
					price: 204,
					quantity: 1,
				},
				{
					image: image,
					name: 'Bouquet 34',
					size: 'medium',
					price: 204,
					quantity: 1,
				},
				{
					image: image,
					name: 'Bouquet 34',
					size: 'medium',
					price: 204,
					quantity: 1,
				},

			],
		},
		{
			id: '123-756',
			status: 'Active',
			total: '2959',
			address: {
				city: 'Lviv',
				street: 'King Olga',
				house: '14a',
				flat: '',
				entrance: '',
				date: '02.11.2023',
				type: 'mail',
			},
			user: {
				telephone: '095587123',
				name: 'Ihor Vitrikush',
			},
			products: [
				{
					image: image,
					name: 'Bouquet 34',
					size: 'medium',
					price: 204,
					quantity: 1,
				},
				{
					image: image,
					name: 'Bouquet 34',
					size: 'medium',
					price: 204,
					quantity: 1,
				},
				{
					image: image,
					name: 'Bouquet 34',
					size: 'medium',
					price: 204,
					quantity: 1,
				},
				{
					image: image,
					name: 'Bouquet 34',
					size: 'medium',
					price: 204,
					quantity: 1,
				},
			],
		},
	]
	return (
		 <article className={styles.wrapper}>
			 {order ?
					<div>
						{object.map(product => (
							 <OrderItem item={product}/>
						))}
					</div>
					:
					<EmptyOrder></EmptyOrder>}
		 </article>
	);
};

