import { FC } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import BigImg from '../../../shared/assets/image/about_us/big_img.png';
import SmallImg from '../../../shared/assets/image/about_us/small_img.png';
import { BsArrowRight } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { getRouteAboutUs } from '../../../shared/consts/router.ts';

export interface IAboutUs {}

export const AboutUs: FC<IAboutUs> = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.content__title}>
          {t('mainPage.about-us.title')}
        </div>
        <div className={styles.content__autor}>
          <p>{t('mainPage.about-us.slogan')}</p>
          <div className={styles.img_wrp}>
            <img src={SmallImg} alt="" />
          </div>
        </div>
        <div className={styles.content__center}>
          <div className={styles.content__descr}>
            <p>{t('mainPage.about-us.text')}</p>
            <p>{t('mainPage.about-us.text1')}</p>
            <p>{t('mainPage.about-us.text2')}</p>
            <p>{t('mainPage.about-us.text3')}</p>
          </div>
          <div className={styles.link_wrp}>
            <Link
              target={'_top'}
              to={getRouteAboutUs()}
              className={styles.content__link}
            >
              {t('mainPage.about-us.btn')}{' '}
              <BsArrowRight style={{ fontSize: '24px' }} />
            </Link>
          </div>
        </div>
        <div className={styles.content__img}>
          <img src={BigImg} alt="" />
        </div>
      </div>
    </section>
  );
};
