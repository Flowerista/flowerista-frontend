import {FC} from 'react';
import styles from './styles.module.scss';
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../../../data/routes';

export interface IUnregistered {
}

export const Unregistered: FC<IUnregistered> = () => {
	return (
		 <div className={styles.Unregistered}>
			 <h1>Your Data</h1>
			 <p>To place an order you need to have an account,
				 registration will take less than a minute </p>
				<div>
					<NavLink to={DataRoute.Login}>Have an account</NavLink>
					<NavLink to={DataRoute.Registration}>Register</NavLink>
				</div>
		 </div>
	);
};

