import {FC} from 'react';
import styles from './styles.module.scss'
import {Logo} from '../../components/Header/Logo';
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {useTranslation} from 'react-i18next';

export const NotFoundPage: FC = () => {
	const {t} = useTranslation()
	return (
		 <main className={styles.notFound}>
			 <div className={styles.notFound__container}>
				 <div className={styles.notFound__header}>
					 <Logo type={'header'}/>
				 </div>
				 <div className={styles.notFound__main}>
					 <h1>{t('notFoundPage.title')}</h1>
					 <span>{t('notFoundPage.sub_title')}</span>
					 <p>{t('notFoundPage.description')}</p>
					 <NavLink to={DataRoute.Catalog}>{t('notFoundPage.btn1')}</NavLink>
					 <NavLink to={DataRoute.Home}>{t('notFoundPage.btn2')}</NavLink>
				 </div>
				 <div className={styles.notFound__footer}>{t('notFoundPage.rights')}</div>
			 </div>
		 </main>
	);
};

