import {FC} from 'react';
import styles from './styles.module.scss';
import {CheckOutHeader} from './CheckOutHeader';
import {CheckOutFooter} from './CheckOutFooter';
import {Delivery} from './Delivery';
import {Order} from './Order';

export interface ICheckOutPage {
}


export const CheckOutPage: FC<ICheckOutPage> = () => {
	return (
		 <main className={styles.wrapper}>
				<CheckOutHeader/>
			    <div className={styles.checkOut}>
				    <Delivery/>
				    <Order/>
			    </div>
			  <CheckOutFooter/>
		 </main>
	);
};

