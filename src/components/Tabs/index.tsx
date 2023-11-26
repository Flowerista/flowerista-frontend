import {useState} from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import SecondTab from './SecondTab';
import FirstTab from './FirstTabs';
import styles from './styles.module.scss'


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className={styles.tabs}>
      <ul className={styles.nav}>
          <TabNavItem title="Pickup of the flowers" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="By courier " id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <FirstTab/>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <SecondTab/>
          </TabContent>

      </div>
    </div>
  );
};
export default Tabs;
