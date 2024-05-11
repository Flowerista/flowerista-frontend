import { FC } from 'react';
import styles from '../styles.module.scss';
import { Logo } from '../../header/Logo';
import { Copyright } from '../Copyright';

export const Name: FC = () => {
  return (
    <div className={styles.footer__name}>
      <div className={styles.footer__logo__wrp}>
        <Logo type={'footer'} />
      </div>
      <Copyright className={styles.footer__copirate_1} />
    </div>
  );
};
