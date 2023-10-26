import {FC} from 'react';
import styles from '../styles.module.scss';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';


export const Links: FC = () => {
	return (
		 <ul className={styles.footer__links}>
			 <li><Link to={DataRoute.Catalog}>Catalog</Link></li>
			 <li><Link to={DataRoute.AboutUs}>About us</Link></li>
			 <li><Link to={DataRoute.DeliveryAndPayment}>Delivery & payment</Link></li>
		 </ul>
	);
};

