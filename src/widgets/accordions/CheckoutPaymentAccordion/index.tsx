import { FC, Fragment } from 'react';
import styles from '../../../features/checkoutTabs/ui/styles.module.scss';
import closeImage from '../../../shared/assets/image/checkOut/close.png';
import openImage from '../../../shared/assets/image/checkOut/open.png';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { PayWithCash, PayWithPayPal } from '../../../entities/payment';
import { useCart } from '../../../entities/cart';
import { useCheckout } from '../../../pages/checkoutPage/model/selectors/getCheckout.ts';

export const CheckoutPaymentAccordion: FC = () => {
  const { t } = useTranslation();
  const cart = useCart();
  const checkout = useCheckout();
  const checked = checkout?.date === '' || cart.length === 0;
  // є баг коли користувач вибрав дату та час але
  // і притому нажав на відкриття оплати і потім нажав на change то блокуєтся
  // оплата але вікно не закриваєтся {({ open, close }) => ( можна получити щоб закрити але хз як
  return (
    <Disclosure as={'div'} className={`${checked ? styles.blocked : ''}`}>
      {({ open }) => (
        <>
          <DisclosureButton
            as={'div'}
            disabled={checked}
            className={styles.title}
          >
            <span>{`${t('checkout.authorized.payment.title')}`}</span>
            <img src={open ? openImage : closeImage} alt="image-accordion" />
          </DisclosureButton>
          <DisclosurePanel className={styles.content}>
            <TabGroup className={styles.tabs}>
              <TabList className={styles.nav}>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${styles.tabItem} ${selected ? `` : `${styles.active}`}`}
                    >
                      {t('checkout.authorized.payment.btn1')}
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${styles.tabItem} ${selected ? `` : `${styles.active}`}`}
                    >
                      {t('checkout.authorized.payment.btn2')}
                    </button>
                  )}
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <PayWithPayPal />
                </TabPanel>
                <TabPanel>
                  <PayWithCash />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
