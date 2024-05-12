import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import openImage from '../../../shared/assets/image/checkOut/open.png';
import closeImage from '../../../shared/assets/image/checkOut/close.png';
import { useTranslation } from 'react-i18next';
import styles from '../../../features/checkoutTabs/ui/styles.module.scss';
import { FC, useEffect, useState } from 'react';
import { useCheckoutActions } from '../../../pages/checkoutPage/model/slice/checkout.slice.ts';
import { CheckoutTabs } from '../../../features/checkoutTabs';
import { CheckoutAddressInformation } from '../../../features/checkoutAddressInformation';
import { useCheckout } from '../../../pages/checkoutPage/model/selectors/getCheckout.ts';
import { useUser } from '../../../pages/profile/model/selectors/getUser.ts';

export const CheckoutDeliveryAccordion: FC = () => {
  const { t } = useTranslation();
  const user = useUser();
  const [isActive, setIsActive] = useState<boolean>(false);
  const { resetAllState } = useCheckoutActions();
  const checkout = useCheckout();

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
            {isActive && <CheckoutAddressInformation />}
            {!isActive && <CheckoutTabs setIsActive={setIsActive} />}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
