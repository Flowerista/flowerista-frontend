import {FC} from 'react';
import styles from './styles.module.scss';
import {BsSearch} from 'react-icons/bs';

export interface ISearch {
}

export const Search: FC<ISearch> = () => {
	return (
		 <form className={styles.search}>
       <button><BsSearch style={{fontSize:"24px",cursor:"pointer"}}/></button>
			 <input type="text" placeholder={"Flower"}/>
		 </form>
	);
};

