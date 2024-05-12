import { FC } from 'react';
import styles from './styles.module.scss';

import addressImg from '../../../shared/assets/image/checkOut/address.png';
import { useTranslation } from 'react-i18next';
import {
  useCity,
  useDate,
  useEntrance,
  useFlat,
  useHouse,
  useStreet,
  useTime,
  useType
} from '../../../pages/checkoutPage/model/selectors/getCheckout.ts';

export const CheckoutAddressInformation: FC = () => {
  const { t } = useTranslation();
  const date = useDate();
  const time = useTime();
  const type = useType();
  const city = useCity();
  const flat = useFlat();
  const street = useStreet();
  const entrance = useEntrance();
  const house = useHouse();

  return (
    <div className={styles.address}>
      <img src={addressImg} alt="address-img" />
      <div className={styles.addressWrapper}>
        <h4>
          {type === 'courier'
            ? `${t('checkout.authorized.delivery.btn2')}`
            : `${t('checkout.authorized.delivery.btn1')}`}
        </h4>
        <div>
          {type === 'courier' && (
            <>
              <span>
                {city && city} {street} {house} {entrance} {flat}
              </span>
              <span>
                {date} {time}
              </span>
            </>
          )}
          {type === 'mail' && (
            <>
              <span>{t('checkout.authorized.delivery.street')}</span>
              <span>
                {date} {time}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
