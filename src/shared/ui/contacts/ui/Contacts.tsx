import { FC } from 'react';
import styles from '../../../../widgets/footer/ui/styles.module.scss';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Contacts: FC = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.footer__contancts}>
      <div className={styles.footer__contancts__tel}>
        <p>{t('footer.contacts')}</p>
        <a href="tel:380 99 999 99 99">+380 99 999 99 99</a>
        <a href="tel:380 99 999 99 99">+380 99 999 99 99</a>
      </div>
      <ul>
        <li>
          <Link to={'https://www.instagram.com'} target={'_blank'}>
            <BsInstagram size={24} />
          </Link>
        </li>
        <li>
          <Link to={'https://uk-ua.facebook.com'} target={'_blank'}>
            <BsFacebook size={24} />
          </Link>
        </li>
        <li>
          <Link to={'https://ru.pinterest.com'} target={'_blank'}>
            <BsPinterest size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
