import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {BsSearch} from 'react-icons/bs';


export const Search: FC = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const toggleSearch = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		 <form className={styles.search}>
			 <div className={`${styles.searchBox} ${isExpanded ? `${styles.expanded}` : ''}`}>
				 <BsSearch  className={styles.searchIcon} onClick={toggleSearch} style={{fontSize:"24px",cursor:"pointer"}}/>
				 <input className={styles.searchInput} type="text" placeholder={"Flower"}/>
			 </div>

		 </form>
	);
};

