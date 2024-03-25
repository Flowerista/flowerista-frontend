import {FC} from 'react';
import styles from './styles.module.scss';
import firstImg from '../../assets/image/catalog/first.png'
import secondImg from '../../assets/image/catalog/second.png'
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../data/routes';


export const CatalogBox: FC<{ text: string }> = ({text}) => {
	return (
		<NavLink target={'_top'} to={DataRoute.Catalog} className={styles.catalog}>
			<h2>{text}</h2>
			<div className={styles.img_wrp}>
				{text === 'New arrivals' ? <img src={firstImg} alt="catalog img"/> : <img src={secondImg} alt="catalog img"/>}
			</div>
		</NavLink>
	);
};

