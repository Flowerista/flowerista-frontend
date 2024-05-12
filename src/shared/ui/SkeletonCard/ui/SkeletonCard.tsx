import { FC } from 'react';
import styles from './styles.module.scss';

export const SkeletonCard: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}></div>
      <div className={styles.card__footer}>
        <div className={styles.card__name}></div>
        <div className={styles.card__desc}>
          <div className={styles.card__wrapper}>
            <div className={styles.card__price_old}></div>
            <div className={styles.card__price}></div>
          </div>
          <div className={styles.cart}></div>
        </div>
      </div>
    </div>
  );
};
