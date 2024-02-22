import {FC} from 'react';
import styles from './styles.module.scss';
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import {ParametersMenu} from '../../ParametersMenu';
import {useTranslation} from 'react-i18next';

export interface INavBar {
}

export const NavBar: FC<INavBar> = () => {
	const { t } = useTranslation();
	return (
		 <nav className={styles.navbar}>
			 <ul className={styles.navbar__menu}>
				 <li><NavLink to={DataRoute.Catalog} className={({ isActive }) => (isActive ? `${styles.active}` : '')}>
					 {t("header.first-link")}
				 </NavLink></li>
				 <li><NavLink to={DataRoute.AboutUs} className={({ isActive }) => (isActive ? `${styles.active}` : '')}>
					 {t("header.second-link")}
				 </NavLink></li>
				 <li><NavLink to={DataRoute.DeliveryAndPayment} className={({ isActive }) => (isActive ? `${styles.active}` : '')}>
					 {t("header.third-link")}
				 </NavLink></li>
			 </ul>
			 <ParametersMenu/>
		 </nav>
	);
};

