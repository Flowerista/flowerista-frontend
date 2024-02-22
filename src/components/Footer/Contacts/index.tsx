import {FC} from 'react';
import styles from '../styles.module.scss';
import {BsFacebook, BsInstagram, BsPinterest} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';


export const Contacts: FC = () => {
	const {t} = useTranslation()
	return (
		 <nav className={styles.footer__contancts}>
			 <p>{t('footer.contacts')}</p>
			 <a href="tel:380 99 999 99 99">+380 99 999 99 99</a>
			 <a href="tel:380 99 999 99 99">+380 99 999 99 99</a>
			 <ul>
				 <li><Link to={'https://www.instagram.com'} target={'_blank'}><BsInstagram/></Link></li>
				 <li><Link to={'https://uk-ua.facebook.com'} target={'_blank'}><BsFacebook/></Link></li>
				 <li><Link to={'https://ru.pinterest.com'} target={'_blank'}><BsPinterest/></Link></li>
			 </ul>
		 </nav>
	);
};

