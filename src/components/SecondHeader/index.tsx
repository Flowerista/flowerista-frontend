import {FC} from 'react';
import styles from './styles.module.scss';
import {Logo} from '../Header/Logo';

export interface ISecondHeader {
}

export const SecondHeader: FC<ISecondHeader> = () => {
	return (
		 <header className={styles.container}>
			 <Logo type={'header'}/>
			 <div></div>
		 </header>
	);
};

