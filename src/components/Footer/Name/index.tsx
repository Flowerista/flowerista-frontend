import {FC} from 'react';
import styles from '../styles.module.scss';


export const Name: FC = () => {
	return (
		 <div className={styles.footer__name}>
			<h1>Flowerista</h1>
			 <p>© All rights reserved</p>
		 </div>
	);
};

