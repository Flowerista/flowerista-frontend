import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import openImage from '../../../../assets/image/checkOut/open.png';
import closeImage from '../../../../assets/image/checkOut/close.png';
import { useTranslation } from 'react-i18next';
import styles from '../styles.module.scss';
import { AddressInformation } from '../../Delivery/AddressInformation';
import { useAppSelector } from '../../../../store/store.ts';
import { FC, useEffect, useState } from 'react';
import { useCheckoutActions } from '../../../../store/checkout/checkout.slice.ts';
import { Tabs } from '../Tabs';

export const CheckoutDeliveryAccordion: FC = () => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.user);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { resetAllState } = useCheckoutActions();
  const checkout = useAppSelector((state) => state.checkout);

  useEffect(() => {}, [checkout]);

  return (
    <Disclosure as={'div'} className={`${user ? '' : styles.blocked}`}>
      {({ open }) => (
        <>
          <DisclosureButton as={'div'} className={styles.title}>
            <span>{t('checkout.authorized.delivery.title')}</span>
            {isActive ? (
              <button
                onClick={() => {
                  setIsActive(false);
                  resetAllState();
                }}
              >
                {t('checkout.authorized.data.btn1')}
              </button>
            ) : (
              <img src={open ? openImage : closeImage} alt="image-accordion" />
            )}
          </DisclosureButton>
          <DisclosurePanel className={styles.content}>
            {isActive && <AddressInformation />}
            {!isActive && <Tabs setIsActive={setIsActive} />}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
