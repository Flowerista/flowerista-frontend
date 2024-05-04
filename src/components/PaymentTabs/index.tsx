import {FC, useState} from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import styles from './styles.module.scss'
import {PayWithCash} from './PayWithCash';
import {useTranslation} from 'react-i18next';
import {PayWithPayPal} from '../PayWithPayPal';


const PaymentTabs: FC = () => {

	const {t} = useTranslation()
	const [activeTab, setActiveTab] = useState('tab1');

	return (
		 <div className={styles.tabs}>
			 <ul className={styles.nav}>
				 <TabNavItem title={`${t('checkout.authorized.payment.btn1')}`} id="tab1" activeTab={activeTab}
				             setActiveTab={setActiveTab}/>
				 <TabNavItem title={`${t('checkout.authorized.payment.btn2')}`} id="tab2" activeTab={activeTab}
				             setActiveTab={setActiveTab}/>
			 </ul>
			 <div className="outlet">
				 <TabContent id="tab1" activeTab={activeTab}>
					 <PayWithPayPal/>
				 </TabContent>
				 <TabContent id="tab2" activeTab={activeTab}>
					 <PayWithCash/>
				 </TabContent>

			 </div>
		 </div>
	);
};
export default PaymentTabs;
