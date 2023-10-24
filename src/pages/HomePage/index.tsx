import {FC} from 'react';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { Reviews } from '../../components/Reviews/Reviews';
import {HomeSwiper} from './HomeSwiper';
import { Bestsellers } from '../../components/SectionsFlower/Bestsellers/Bestsellers';
import { Sale } from '../../components/SectionsFlower/Sale/Sale';

export const HomePage: FC = () => {
	return (
		<main>
			<HomeSwiper/>
			<Bestsellers/>
			<Sale/>
			<AboutUs/>
			<Reviews/>
		</main>
	);
};

