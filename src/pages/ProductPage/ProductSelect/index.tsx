import {FC} from 'react';
import styles from './styles.module.scss';
import first from '../../../assets/image/productItem/first_flower.png';
import second from '../../../assets/image/productItem/second_flower.png';

export interface IProductSelect {
	size: string;
	price: string;
	active: boolean;
	setActive: (active:boolean) => void;
}

export const ProductSelect: FC<IProductSelect> = ({ size, price, active, setActive }) => {
	const toggleActive = () => {
		setActive(!active);
	};

	return (
		 <div className={`${styles.productSelect} ${active ? styles.active : ''}`} onClick={toggleActive}>
			 <div className={styles.productSelect__size}>
				 {active ? <img src={second} alt="" /> : <img src={first} alt="" />}
				 <span>{size}</span>
			 </div>
			 <div className={styles.productSelect__price}>{price}</div>
		 </div>
	);
};
