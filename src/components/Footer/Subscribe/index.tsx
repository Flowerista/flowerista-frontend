import styles from '../styles.module.scss';
import {BsArrowRight} from 'react-icons/bs';
import {FC} from 'react';


export const Subscribe: FC = () => {
	return (
		 <div className={styles.footer__subscribe}>
			 <h3>Subscribe!</h3>
			 <p>Stay up to date with the latest news.
				 Subscribe to our newsletter and be the first to receive the latest offers.</p>
			 <form>
				 <input type="text" placeholder={'E-mail'}/>
				 <button type={'submit'}><span>send{' '} </span> {' '}<BsArrowRight style={{fontSize: '24px', fill: 'white'}}/>
				 </button>
			 </form>
		 </div>
	);
};

