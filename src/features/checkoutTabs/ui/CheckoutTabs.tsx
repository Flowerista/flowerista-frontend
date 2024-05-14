import { FC, Fragment } from 'react';
import styles from './styles.module.scss';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { useCheckoutActions } from '../../../pages/checkoutPage/model/slice/checkout.slice.ts';
import {
  CheckoutPickUpByDelivery,
  CheckoutPickUpFromTheStore
} from '../../../entities/checkout';

interface InterfaceCheckoutTabs {
  setIsActive: (isActive: boolean) => void;
}

export const CheckoutTabs: FC<InterfaceCheckoutTabs> = ({ setIsActive }) => {
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
          <CheckoutPickUpFromTheStore setIsActive={setIsActive} />
        </TabPanel>
        <TabPanel>
          <CheckoutPickUpByDelivery setIsActive={setIsActive} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
