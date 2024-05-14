import { FC } from 'react';
import styles from './styles.module.scss';
import { Contacts } from '../../../shared/ui/contacts';
import { Copyright } from '../../../shared/ui/copyright';
import { Name } from '../../../shared/ui/name';
import { Links } from '../../../shared/ui/links';
import { Subscribe } from '../../../features/subscribe';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Name />
        <Links />
        <Contacts />
        <Subscribe />
        <Copyright className={styles.footer__copirate_2} />
      </div>
    </footer>
  );
};
