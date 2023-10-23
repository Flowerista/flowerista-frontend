import {FC} from 'react';
import styles from '../styles.module.scss';
import {BsFacebook, BsInstagram, BsPinterest} from 'react-icons/bs';


export const Contacts: FC = () => {
	return (
		 <nav className={styles.footer__contancts}>
			<h3>Contacts</h3>
			 <a href="tel:380 99 999 99 99">+380 99 999 99 99</a>
			 <a href="tel:380 99 999 99 99">+380 99 999 99 99</a>
			 <ul>
				 <li><BsInstagram/></li>
				 <li><BsFacebook/></li>
				 <li><BsPinterest/></li>
			 </ul>
		 </nav>
	);
};

