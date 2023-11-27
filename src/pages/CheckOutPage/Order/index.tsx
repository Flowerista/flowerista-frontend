import {FC} from 'react';
import styles from './styles.module.scss';

export interface IOrder {
}

export const Order: FC<IOrder> = () => {
	return (
		 <div className={styles.order}>
			 Order
		 </div>
	);
};

