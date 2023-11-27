import {FC} from 'react';
import styles from './styles.module.scss';
import {Logo} from '../../../components/Header/Logo';

export interface ICheckOutHeader {
}

export const CheckOutHeader: FC<ICheckOutHeader> = () => {
	return (
		 <header className={styles.header}>
			 <Logo type={"header"}/>
			 <div className={styles.title}>Check Out</div>
		 </header>
	);
};

