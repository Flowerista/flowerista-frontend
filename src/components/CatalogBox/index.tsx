import {FC} from 'react';
import styles from './styles.module.scss';
import firstImg from '../../assets/image/catalog/first.png'
import secondImg from '../../assets/image/catalog/second.png'
import {NavLink} from 'react-router-dom';
import {Route} from '../../data/routes';


export const CatalogBox: FC<{text:string}> = ({text}) => {
	return (
		 <NavLink to={Route.Catalog} className={styles.catalog}>
					<h2>{text}</h2>
			 {text ==="New arrivals"? <img src={firstImg} alt="catalog img"/>:<img src={secondImg} alt="catalog img"/>}
		 </NavLink>
	);
};

