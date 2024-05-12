import { FC } from 'react';
import styles from './styles.module.scss';
import { Dialog, DialogPanel } from '@headlessui/react';
import arrow from '../../../shared/assets/image/arrow.png';
import { Button } from '../../../shared/ui/button';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  getRouteLogin,
  getRouteRegistration
} from '../../../shared/consts/router.ts';

export interface ICheckoutModal {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const CheckoutModal: FC<ICheckoutModal> = ({ setIsOpen, isOpen }) => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={styles.blur}
    >
      <DialogPanel className={styles.popUp}>
        <button onClick={() => setIsOpen(false)} className={styles.popUp__btn}>
          <img src={arrow} alt={'arrow'} />
          {t('checkout.modal.btn3')}
        </button>
        <div className={styles.popUp__content}>
          <h1>{t('checkout.modal.title')}</h1>
          <li>{t('checkout.modal.text')}</li>
          <Button
            onClick={() => {
              navigation(getRouteLogin());
              setIsOpen(false);
            }}
            text={`${t('checkout.modal.btn1')}`}
          />
          <Button
            onClick={() => {
              navigation(getRouteRegistration());
              setIsOpen(false);
            }}
            colorMode={'white'}
            text={`${t('checkout.modal.btn2')}`}
          />
        </div>
      </DialogPanel>
    </Dialog>
  );
};
