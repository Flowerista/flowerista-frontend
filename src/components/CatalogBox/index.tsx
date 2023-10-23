import {FC} from 'react';
import styles from './styles.module.scss';
import firstImg from '../../assets/image/catalog/first.png'
import secondImg from '../../assets/image/catalog/second.png'


export const CatalogBox: FC<{text:string}> = ({text}) => {
	return (
		 <div className={styles.catalog}>
					<h2>{text}</h2>
			 {text ==="New arrivals"? <img src={firstImg} alt="catalog img"/>:<img src={secondImg} alt="catalog img"/>}
		 </div>
	);
};

