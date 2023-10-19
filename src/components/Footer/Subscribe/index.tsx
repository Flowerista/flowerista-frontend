import styles from '../styles.module.scss';
import {BsArrowRightCircle} from 'react-icons/bs';
import {FC} from 'react';


export const Subscribe:FC = () => {
	return (
		 <div className={styles.footer__subscribe}>
			 <h3>Subscribe</h3>
			 <p>Stay up to date with the latest news. Sign up for the newsletter and get a 5% discount on your first purchase.</p>
			 <form>
				 <input type="text" placeholder={"E-mail"}/>
				 <button type={'submit'}><BsArrowRightCircle style={{fontSize:"24px"}}/></button>
			 </form>
		 </div>
	);
};

