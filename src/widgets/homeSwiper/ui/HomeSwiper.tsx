import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import secondSwipe from '../../../shared/assets/image/swiper/second_swiper.png';
import thirdSwiper from '../../../shared/assets/image/swiper/third_swiper.png';
import styles from './styles.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

export const HomeSwiper = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.swiper}>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: `${styles.bulletActiveClass}`,
          bulletClass: `${styles.bulletClass}`,
          horizontalClass: `${styles.horizontalClass}`
        }}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide_1)}>
            <h3>{t('mainPage.slider.slide1')} </h3>
            <p>{t('mainPage.slider.slide1_description')}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide_2)}>
            <div className={styles.block_1}>
              <img src={secondSwipe} alt="flower" />
            </div>
            <div className={styles.block_2}>
              <h2>{t('mainPage.slider.slide2')}</h2>
              <p>{t('mainPage.slider.slide2_description')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide_3)}>
            <h3>{t('mainPage.slider.slide3_description')}</h3>
            <p>{t('mainPage.slider.slide3')} </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide_4)}>
            <div className={styles.block_1}>
              <img src={thirdSwiper} alt="third_swiper" />
            </div>
            <div className={styles.block_2}>
              <h2>{t('mainPage.slider.slide4')} </h2>
              <p>{t('mainPage.slider.slide4_description')}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
