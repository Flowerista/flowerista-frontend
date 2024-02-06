import {FC} from 'react';
import styles from '../styles.module.scss';
import {Logo} from '../../Header/Logo';
import {useTranslation} from 'react-i18next';


export const Name: FC = () => {
	const{t}=useTranslation()
	return (
		 <div className={styles.footer__name}>
			 <Logo type={"footer"}/>
			 <p>{t("footer.rights")}</p>
		 </div>
	);
};

