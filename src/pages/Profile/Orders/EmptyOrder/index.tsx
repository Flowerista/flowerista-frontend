import {FC} from 'react';
import styles from './styles.module.scss';
import {Button} from '../../../../components';
import empty from '../../../../assets/image/profile/order/empty.png'

export interface IEmptyOrder {
}

export const EmptyOrder: FC<IEmptyOrder> = () => {
	return (
		 <div className={styles.container}>
			 <div className={styles.info}>
				 <h1>You don't have any orders yet</h1>
				 <p>Explore our catalog and place your first order</p>
				 <p>to start your shopping history</p>
				 <form target={'_top'}>
					 <Button text={'Go to Catalog '}/>
				 </form>
			 </div>
			 <div className={styles.image}>
				 <img src={empty} alt="empty-image"/>
			 </div>
		 </div>
	);
};

