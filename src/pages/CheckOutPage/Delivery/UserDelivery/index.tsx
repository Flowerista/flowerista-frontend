import {FC} from 'react';
import styles from './styles.module.scss';
import {Accordion} from '../../../../components/Accordion';

export interface IUserDelivery {
}


export const UserDelivery: FC<IUserDelivery> = () => {
	return (
		 <div className={styles.userDelivery}>
				<Accordion/>
		 </div>
	);
};

