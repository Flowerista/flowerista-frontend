import {FC} from 'react';
import {AboutUs} from '../../components/AboutUs/AboutUs';
import {Reviews} from '../../components/Reviews/Reviews';
import {HomeSwiper} from './HomeSwiper';
import {CatalogBox} from '../../components/CatalogBox';
import styles from './styles.module.scss'

export const HomePage: FC = () => {
	return (
     <main className={styles.home}>
       <HomeSwiper/>
	     <div className={styles.home__catalog}>
		     <CatalogBox text={"New arrivals"}/>
		     <CatalogBox text={"Bouquet in a box"}/>
	     </div>
        {/*<Bestsellers/>*/}
			  {/*<Sale/>*/}
			 <AboutUs/>
			 <Reviews/>
		 </main>
	);
};

