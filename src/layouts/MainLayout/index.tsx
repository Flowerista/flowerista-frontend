import {FC, ReactNode} from 'react';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

export interface IMainLayout {
	children?:ReactNode
}

export const MainLayout: FC<IMainLayout> = ({children}) => {
	return (
		 <div style={{overflowX: 'hidden'}}>
				<div className={"container"}>
					<Header/>
					{children}
				</div>
			 <Footer/>
		 </div>
	);
};

