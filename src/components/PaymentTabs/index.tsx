import {useState} from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import styles from './styles.module.scss'
import {PayWithLiqPay} from './PayWithLiqPay';
import {PayWithCash} from './PayWithCash';


const PaymentTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className={styles.tabs}>
      <ul className={styles.nav}>
          <TabNavItem title="LiqPay" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Payment in cash" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <PayWithLiqPay/>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <PayWithCash/>
          </TabContent>

      </div>
    </div>
  );
};
export default PaymentTabs;
