import {FC} from 'react';
import styles from './styles.module.scss';
import {NavBar} from './NavBar';
import {Logo} from './Logo';

export interface IHeader {
}

export const Header: FC<IHeader> = () => {
	return (
		 <div className={styles.container}>
			 <Logo/>
			 <NavBar/>
		 </div>
	);
};

