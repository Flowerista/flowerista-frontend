import {FC} from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import {Route} from '../../../data/routes';
import {ParametersMenu} from '../../ParametersMenu';

export interface INavBar {
}

export const NavBar: FC<INavBar> = () => {
	return (
		 <div className={styles.navbar}>
			 <ul className={styles.navbar__menu}>
				 <li><Link to={Route.Catalog}>Catalog</Link></li>
				 <li><Link to={Route.AboutUs}>About us</Link></li>
				 <li><Link to={Route.DeliveryAndPayment}>Delivery & payment</Link></li>
			 </ul>
			 <ParametersMenu/>
		 </div>
	);
};

