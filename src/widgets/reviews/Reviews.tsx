import { FC } from 'react';
import styles from './styles.module.scss';
import Flower from '../../shared/assets/image/reviews/flower.png';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

export interface IReviews {}

export const Reviews: FC<IReviews> = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.section__title}>{t('mainPage.reviews')}</div>
      <div className={styles.content_wrp}>
        <div className={styles.content}>
          <div className={classNames(styles.review, styles.review_1)}>
            <p className={styles.review__title}>
              {t('mainPage.reviewsText.sarah.name')}
            </p>
            <p className={styles.review__text}>
              {t('mainPage.reviewsText.sarah.text')}
            </p>
          </div>
          <div className={classNames(styles.review, styles.review_2)}>
            <p className={styles.review__title}>
              {t('mainPage.reviewsText.john.name')}
            </p>
            <p className={styles.review__text}>
              {t('mainPage.reviewsText.john.text')}
            </p>
          </div>
          <div className={styles.wrapper_img}>
            <img src={Flower} alt="flower" />
          </div>
          <div className={classNames(styles.review, styles.review_4)}>
            <p className={styles.review__title}>
              {t('mainPage.reviewsText.anna.name')}
            </p>
            <p className={styles.review__text}>
              {t('mainPage.reviewsText.anna.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
