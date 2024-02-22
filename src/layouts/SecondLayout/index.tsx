import {FC, ReactNode} from 'react';
import {Footer} from '../../components/Footer';
import {SecondHeader} from '../../components/SecondHeader';

export interface IMainLayout {
	children?: ReactNode
}

export const SecondLayout: FC<IMainLayout> = ({children}) => {
	return (
		 <div>
			 <div className={'container'}>
				 <SecondHeader/>
				 {children}
			 </div>
			 <Footer/>
		 </div>
	);
};

