import {FC, useEffect, useState} from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import SecondTab from './SecondTab';
import FirstTab from './FirstTabs';
import styles from './styles.module.scss'
import {useTranslation} from 'react-i18next';
import {setTypeToCheckout} from '../../store/checkout/checkout.slice';
import {useAppDispatch} from '../../store/store';

interface ITab {
	setType: (type: any) => void
	setIsActive: (isActive: boolean) => void
}

const Tabs: FC<ITab> = ({setType, setIsActive}) => {
	const {t} = useTranslation()
	const [activeTab, setActiveTab] = useState('tab1');
	const dispatch = useAppDispatch()

	useEffect(() => {
		setType(activeTab === 'tab1' ? 'mail' : 'courier')
		dispatch(setTypeToCheckout(activeTab === 'tab1' ? 'mail' : 'courier'))
	}, [activeTab])

	return (
		 <div className={styles.tabs}>
			 <ul className={styles.nav}>
				 <TabNavItem title={`${t('checkout.authorized.delivery.btn1')}`} id="tab1" activeTab={activeTab}
				             setActiveTab={setActiveTab}/>
				 <TabNavItem title={`${t('checkout.authorized.delivery.btn2')}`} id="tab2" activeTab={activeTab}
				             setActiveTab={setActiveTab}/>
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
