import {FC} from 'react';
import styles from './styles.module.scss';
import { Cart } from '../../../components';
import { Title } from '../../../components/Title/Title';
import { getTotalPrice } from '../../../utils/helpers';
import { useAppSelector } from '../../../store/store';

export interface IOrder {
}

export const Order: FC<IOrder> = () => {
	const {cart} = useAppSelector(store => store.cart)
	const totalPrice = getTotalPrice(cart)

	return (
		<div className={styles.order}>
			<div className={styles.order__content}>
				<Title text='Your order'/> 
				<Cart mode='checkout' />
				<div className={styles.price}>
					<p>Total price:</p>
					<div className={styles.price__item}>
						{totalPrice}
						<span> UAH</span>
					</div>
				</div>
			</div>
		</div>
	);
};

