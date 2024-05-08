import { FC } from 'react';
import styles from './styles.module.scss';

import addressImg from '../../../../assets/image/checkOut/address.png';
import { useAppSelector } from '../../../../store/store';
import { useTranslation } from 'react-i18next';

export interface IAddressInformation {
  type: string;
}

export const AddressInformation: FC<IAddressInformation> = ({ type }) => {
  const { t } = useTranslation();
  const { city, date, street, flat, entrance, house, time } = useAppSelector(
    (state) => state.checkout
  );

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
                {city} {street} {house} {entrance} {flat}
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
