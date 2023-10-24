import {FC} from 'react';
import styles from '../styles.module.scss';
import {Logo} from '../../Header/Logo';


export const Name: FC = () => {
	return (
		 <div className={styles.footer__name}>
			 <Logo type={"footer"}/>
			 <p>© All rights reserved</p>
		 </div>
	);
};

