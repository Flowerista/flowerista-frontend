import {FC} from 'react';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { Reviews } from '../../components/Reviews/Reviews';
import {HomeSwiper} from './HomeSwiper';


export const HomePage: FC = () => {
	return (
     <main>
       <HomeSwiper/>
			 <AboutUs/>
			 <Reviews/>
		 </main>
	);
};

