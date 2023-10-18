import {FC} from 'react';
import styles from './styles.module.scss';
import {BsSearch} from 'react-icons/bs';

export interface ISearch {
}

export const Search: FC<ISearch> = () => {
	return (
		 <div className={styles.search}>
       <BsSearch style={{fontSize:"24px",cursor:"pointer"}}/>
		 </div>
	);
};

