import { FC } from 'react';
import styles from '../../../../widgets/footer/ui/styles.module.scss';
import { Logo } from '../../../../widgets/header/ui/Logo';
import { Copyright } from '../../copyright';

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
