import {FC} from 'react';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { Reviews } from '../../components/Reviews/Reviews';

export interface IHomePage {
}

export const HomePage: FC<IHomePage> = () => {
	return (
		 <div>
			 <AboutUs/>
			 <Reviews/>
		 </div>
	);
};

