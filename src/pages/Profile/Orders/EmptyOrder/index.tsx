import { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../../../components';
import empty from '../../../../assets/image/profile/order/empty.png';
import { useTranslation } from 'react-i18next';

export interface IEmptyOrder {}

export const EmptyOrder: FC<IEmptyOrder> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>{t('profile.order.title2')}</h1>
        <p>{t('profile.order.text1')}</p>
        <p>{t('profile.order.text2')}</p>
        <form target={'_top'}>
          <Button text={t('profile.order.btn')} />
        </form>
      </div>
      <div className={styles.image}>
        <img src={empty} alt="empty-image" />
      </div>
    </div>
  );
};
