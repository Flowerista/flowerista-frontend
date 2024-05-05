import { FC } from 'react';
import styles from './styles.module.scss';

export interface ICheckOutFooter {}

export const CheckOutFooter: FC<ICheckOutFooter> = () => {
  return (
    <footer className={styles.footer}>
      <span>© Flowerista, 2023</span>
    </footer>
  );
};
