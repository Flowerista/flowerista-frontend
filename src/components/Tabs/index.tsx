import {FC, useEffect, useState} from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import SecondTab from './SecondTab';
import FirstTab from './FirstTabs';
import styles from './styles.module.scss'

interface ITab {
	setType: (type:any) => void
	setIsActive: (isActive:boolean) => void
}

const Tabs: FC<ITab> = ({setType,setIsActive}) => {
	const [activeTab, setActiveTab] = useState('tab1');

	useEffect(() => {
		setType(activeTab === 'tab1' ? 'mail' : 'courier')
	}, [activeTab])

	return (
		 <div className={styles.tabs}>
			 <ul className={styles.nav}>
				 <TabNavItem title="Pickup of the flowers" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
				 <TabNavItem title="By courier " id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
			 </ul>
			 <div className="outlet">
				 <TabContent id="tab1" activeTab={activeTab}>
					 <FirstTab setIsActive={setIsActive}/>
				 </TabContent>
				 <TabContent id="tab2" activeTab={activeTab}>
					 <SecondTab setIsActive={setIsActive}/>
				 </TabContent>

			 </div>
		 </div>
	);
};
export default Tabs;
