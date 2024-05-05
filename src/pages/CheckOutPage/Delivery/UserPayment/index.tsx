import { FC } from 'react';
import styles from './styles.module.scss';
import { SecondAccordion } from '../../../../components/SecondAccordion';

export interface IUserPayment {}

export const UserPayment: FC<IUserPayment> = () => {
  return (
    <div className={styles.userPayment}>
      <SecondAccordion />
    </div>
  );
};
