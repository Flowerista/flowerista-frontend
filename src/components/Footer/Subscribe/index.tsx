import styles from '../styles.module.scss';
import {BsArrowRight} from 'react-icons/bs';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';


export const Subscribe: FC = () => {
	const {t} = useTranslation()
	return (
		 <div className={styles.footer__subscribe}>
			 <h3>{t('footer.subscribe')}</h3>
			 <p>{t('footer.subscribe_description')}</p>
			 <form>
				 <input type="text" placeholder={'E-mail'}/>
				 <button type={'submit'}><span>{t('footer.btn')}{' '} </span> {' '}<BsArrowRight
						style={{fontSize: '24px', fill: 'white'}}/>
				 </button>
			 </form>
		 </div>
	);
};

