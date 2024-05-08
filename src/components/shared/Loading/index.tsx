import { FC } from 'react';
import styles from './styles.module.scss';
import loading from '../../../assets/image/shared/loading.gif';

export const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <img src={loading} alt="loader" />
    </div>
  );
};
