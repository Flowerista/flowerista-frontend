import { FC } from 'react';
import styles from './styles.module.scss';
import { Name } from './Name';
import { Links } from './Links';
import { Contacts } from './Contacts';
import { Subscribe } from './Subscribe';
import { Copyright } from './Copyright';

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
