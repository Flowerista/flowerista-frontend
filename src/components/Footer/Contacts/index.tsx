import {FC} from 'react';
import styles from '../styles.module.scss';
import {BsFacebook, BsInstagram, BsPinterest} from 'react-icons/bs';


export const Contacts: FC = () => {
	return (
		 <div className={styles.footer__contancts}>
			<h3>Contacts</h3>
			 <div>+380 99 999 99 99</div>
			 <div>+380 99 999 99 99</div>
			 <ul>
				 <li><BsInstagram/></li>
				 <li><BsFacebook/></li>
				 <li><BsPinterest/></li>
			 </ul>
		 </div>
	);
};

