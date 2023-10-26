import {FC} from 'react';
import styles from './styles.module.scss';
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import {ParametersMenu} from '../../ParametersMenu';

export interface INavBar {
}

export const NavBar: FC<INavBar> = () => {
	return (
		 <nav className={styles.navbar}>
			 <ul className={styles.navbar__menu}>
				 <li><NavLink to={DataRoute.Catalog} className={({ isActive }) => (isActive ? `${styles.active}` : '')}>Catalog</NavLink></li>
				 <li><NavLink to={DataRoute.AboutUs} className={({ isActive }) => (isActive ? `${styles.active}` : '')}>About us</NavLink></li>
				 <li><NavLink to={DataRoute.DeliveryAndPayment} className={({ isActive }) => (isActive ? `${styles.active}` : '')}>Delivery & payment</NavLink></li>
			 </ul>
			 <ParametersMenu/>
		 </nav>
	);
};

