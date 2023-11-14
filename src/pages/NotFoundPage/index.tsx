import {FC} from 'react';
import styles from './styles.module.scss'
import {Logo} from '../../components/Header/Logo';
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../data/routes';

export const NotFoundPage : FC  = () => {
	return (
		 <main className={styles.notFound}>
			 <div className={styles.notFound__container}>
				 <div className={styles.notFound__header}>
					 <Logo type={"header"}/>
				 </div>
				 <div className={styles.notFound__main}>
					 <h1>Oops</h1>
					 <span>Page Not Found </span>
					 <p>You can go to our catalog, where there are many beautiful bouquets, or return to the main page</p>
					 <NavLink to={DataRoute.Catalog}>Go to Catalog</NavLink>
					 <NavLink to={DataRoute.Home}>Go to main page</NavLink>
				 </div>
				 <div className={styles.notFound__footer}>© All rights reserved</div>
			 </div>
		 </main>
	);
};

