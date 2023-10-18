import {FC} from 'react';
import styles from './styles.module.scss';

export const Logo: FC = () => {
	return (
		 <div className={styles.logo}>
			 <img src={"../../../../images/logo.svg"} alt=""/>
		 </div>
	);
};

