import { FC, Fragment } from 'react';
import styles from '../styles.module.scss';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import FirstTab from './FirstTabs';
import SecondTab from './SecondTab';
import { useCheckoutActions } from '../../../../store/checkout/checkout.slice.ts';
import { useTranslation } from 'react-i18next';

export interface ITabs {
  setIsActive: (isActive: boolean) => void;
}

export const Tabs: FC<ITabs> = ({ setIsActive }) => {
  const { t } = useTranslation();
  const { setTypeToCheckout } = useCheckoutActions();
  return (
    <TabGroup className={styles.tabs}>
      <TabList className={styles.nav}>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              onClick={() => {
                setTypeToCheckout('mail');
              }}
              className={`${styles.tabItem} ${selected ? `` : `${styles.active}`}`}
            >
              {t('checkout.authorized.delivery.btn1')}
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              onClick={() => {
                setTypeToCheckout('courier');
              }}
              className={`${styles.tabItem} ${selected ? `` : `${styles.active}`}`}
            >
              {t('checkout.authorized.delivery.btn2')}
            </button>
          )}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FirstTab setIsActive={setIsActive} />
        </TabPanel>
        <TabPanel>
          <SecondTab setIsActive={setIsActive} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
