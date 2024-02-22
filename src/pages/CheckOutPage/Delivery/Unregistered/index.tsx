import {FC} from 'react';
import styles from './styles.module.scss';
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../../../data/routes';
import {useTranslation} from 'react-i18next';

export interface IUnregistered {
}

export const Unregistered: FC<IUnregistered> = () => {
	const {t} = useTranslation()
	return (
		 <div className={styles.Unregistered}>
			 <h1>{t('checkout.unauthorized.title')}</h1>
			 <p>{t('checkout.unauthorized.text')} </p>
			 <div>
				 <NavLink to={DataRoute.Login}>{t('checkout.unauthorized.btn1')}</NavLink>
				 <NavLink to={DataRoute.Registration}>{t('checkout.unauthorized.btn2')}</NavLink>
			 </div>
		 </div>
	);
};

