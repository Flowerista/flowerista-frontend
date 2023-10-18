import {FC, ReactNode} from 'react';
import {Header} from '../../components/Header';

export interface IMainLayout {
	children:ReactNode
}

export const MainLayout: FC<IMainLayout> = ({children}) => {
	return (
		 <div className={"container"}>
			 <Header/>
			 {children}
		 </div>
	);
};

