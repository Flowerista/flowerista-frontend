import {FC} from 'react';
import styles from './styles.module.scss';

export interface ILanguages {
}

export const Languages: FC<ILanguages> = () => {
	return (
		 <div className={styles.container}>
			 ua | en
		 </div>
	);
};

