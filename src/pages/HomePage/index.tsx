import {FC} from 'react';
import {AboutUs} from './AboutUs/AboutUs';
import {Reviews} from './Reviews/Reviews';
import {HomeSwiper} from './HomeSwiper';
import {CatalogBox} from '../../components/CatalogBox';
import styles from './styles.module.scss'
import {Bestsellers} from '../../components/SectionsFlower/Bestsellers/Bestsellers';
import {Sale} from '../../components/SectionsFlower/Sale/Sale';

export const HomePage: FC = () => {
	return (
     <main className={styles.home}>
       <HomeSwiper/>
	     <div className={styles.home__catalog}>
		     <CatalogBox text={"New arrivals"}/>
		     <CatalogBox text={"Bouquet in a box"}/>
	     </div>
        <Bestsellers/>
			  <Sale/>
			 <AboutUs/>
			 <Reviews/>
		 </main>
	);
};

