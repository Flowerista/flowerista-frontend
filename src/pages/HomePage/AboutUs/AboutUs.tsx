import {FC} from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import BigImg from '../../../assets/image/about_us/big_img.png';
import SmallImg from '../../../assets/image/about_us/small_img.png';
import {BsArrowRight} from 'react-icons/bs';
import {useTranslation} from 'react-i18next';

export interface IAboutUs {
}

export const AboutUs: FC<IAboutUs> = () => {
	const {t} = useTranslation()
	return (
		 <section className={styles.section}>
			 <div className={styles.content}>
				 <div className={styles.content__left}>
					 <div className={styles.section__title}>{t('mainPage.about-us.title')}</div>
					 <div>
						 <p className={styles.content__left__autor}>our team</p>
						 <div className={styles.wrapper__img_small}>
							 <img src={SmallImg} alt=""/>
						 </div>
					 </div>
				 </div>
				 <div className={styles.content__center}>
					 <div className={styles.content__descr}>
						 <p>
							 {t('mainPage.about-us.text')}
						 </p>
						 <br/>
						 <p>
							 {t('mainPage.about-us.text1')}
						 </p>
						 <br/>
						 <p>
							 {t('mainPage.about-us.text2')}
						 </p>
						 <br/>
						 <p>
							 {t('mainPage.about-us.text3')}
						 </p>
					 </div>
					 <div className={styles.content__link__wrapper}>
						 <Link to={DataRoute.AboutUs} className={styles.content__link}>
							 {t('mainPage.about-us.btn')} <BsArrowRight style={{fontSize: '24px'}}/>
						 </Link>
					 </div>
				 </div>
				 <div className={styles.content__right}>
					 <img src={BigImg} alt=""/>
				 </div>
			 </div>
		 </section>
	);
};
