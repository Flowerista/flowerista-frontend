import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import BgImage from '../../../assets/image/swiper/first.png'
import secondSwipe from '../../../assets/image/swiper/second_swiper.png'
import thirdSwiper from '../../../assets/image/swiper/third_swiper.png'
import fourthSwiper from '../../../assets/image/swiper/fourth_swiper.png'
import fourthSwiperText from '../../../assets/image/swiper/fourth_swiper-text.png'
import styles from './styles.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


export const HomeSwiper = () => {
	return (
		 <div className={styles.swiper}>
			 <Swiper
				  loop={true}
				  autoplay={{delay:2500,disableOnInteraction:false}}
					pagination={{ clickable: true }}
				  navigation
				  // modules={[Navigation, Pagination,Autoplay]}
				  modules={[Navigation, Pagination]}
					className={"homeSwiper"}
			 >
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <p>Our Unique Bouquets</p>
						 </div>
						 <img src={BgImage} alt="first_swiper" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={`${styles.swiper__slide} ${styles.swiper__second}`}>
						 <img src={secondSwipe} alt="second_swiper" />
						 <div className={styles.swiper__second__header}>
							 <h1>20% Off Summer Bouquets!</h1>
							 <p>Discover the vibrant beauty of our summer floral arrangements at a special discounted rate.</p>
						 </div>
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={`${styles.swiper__header} ${styles.swiper__fourth_header}`}>
							 <h3>Experience the happiness that blooms with our freshly handpicked bouquets!</h3>
							 <img src={fourthSwiperText} alt="text_image" />
						 </div>
						 <img src={fourthSwiper} alt="first_swiper" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={`${styles.swiper__slide} ${styles.swiper__third}`}>
						 <div className={styles.swiper__third__header}>
							 <div>
								 <h1>Autumn Flowers:
									 Brighten Your Day!</h1>
								 <p>Experience autumn's vibrant hues and fragrant
									 blossoms with our stunning floral creations</p>
							 </div>
							 <img src={thirdSwiper} alt="third_swiper" />

						 </div>
					 </div>
				 </SwiperSlide>
			 </Swiper>
		 </div>
	);
};
