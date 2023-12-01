import {FC, ReactNode} from 'react';

interface ITabContent{
	id: string;
	activeTab: string;
	children:ReactNode
}
const TabContent:FC<ITabContent> = ({id, activeTab, children}) => {
	return (
		 activeTab === id ? <div className="TabContent">
					{ children }
				</div>
				: null
	);
};

export default TabContent;
