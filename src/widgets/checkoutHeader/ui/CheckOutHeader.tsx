import { FC } from 'react';
import styles from './styles.module.scss';
import { Logo } from '../../header';
import { useTranslation } from 'react-i18next';

export interface ICheckOutHeader {}

export const CheckOutHeader: FC<ICheckOutHeader> = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <Logo type={'header'} />
      <div className={styles.title}>{t('checkout.title')}</div>
    </header>
  );
};
