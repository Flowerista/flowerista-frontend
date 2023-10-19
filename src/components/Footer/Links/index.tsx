import {FC} from 'react';
import styles from '../styles.module.scss';
import {Link} from 'react-router-dom';
import {Route} from '../../../data/routes';


export const Links: FC = () => {
	return (
		 <ul className={styles.footer__links}>
			 <li><Link to={Route.Catalog}>Catalog</Link></li>
			 <li><Link to={Route.AboutUs}>About us</Link></li>
			 <li><Link to={Route.DeliveryAndPayment}>Delivery & payment</Link></li>
		 </ul>
	);
};

