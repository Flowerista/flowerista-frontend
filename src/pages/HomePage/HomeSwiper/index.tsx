import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import BgImage from '../../../assets/image/swiper/first.png'
import secondSwipe from '../../../assets/image/swiper/second_swiper.png'
import thirdSwipe from '../../../assets/image/swiper/third_swiper.png'
import thirdSwipeText from '../../../assets/image/swiper/third_swiper-text.png'
import textBgImage from '../../../assets/image/swiper/second.png'
import fourthSwiper from '../../../assets/image/swiper/fourth_swiper.png'
import fourthSwiperText from '../../../assets/image/swiper/fourth_swiper-text.png'

import arrowPrev from '../../../assets/image/swiper/arrow_2.svg'
import arrowNext from '../../../assets/image/swiper/arrow_1.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './styles.module.scss';

SwiperCore.use([Navigation, Pagination,Autoplay]);

export const HomeSwiper = () => {
	const prevRef = useRef<HTMLDivElement>(null);
	const nextRef = useRef<HTMLDivElement>(null);
	return (
		 <div className={styles.swiper}>
			 <Swiper
				  loop={true}
				  autoplay={{delay:2500,disableOnInteraction:false}}
					pagination={{ clickable: true }}
				  navigation={{enabled:true,prevEl:prevRef?.current,nextEl:nextRef?.current}}
					modules={[Navigation, Pagination,Autoplay]}
					onSwiper={(swiper:any) => {
							swiper.params.navigation.prevEl = prevRef?.current
							swiper.params.navigation.nextEl = nextRef?.current

							swiper.navigation.destroy()
							swiper.navigation.init()
							swiper.navigation.update()
					}}
					className={"homeSwiper"}
			 >
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <img src={textBgImage} alt="text_image" />
						 </div>
						 <img src={BgImage} alt="first_swiper" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={`${styles.swiper__slide} ${styles.swiper__second}`}>
						 <img src={secondSwipe} alt="second_swiper" />
						 <div className={styles.swiper__second_header}>
							 <h1>20% Off Summer Bouquets!</h1>
							 <p>Discover the vibrant beauty of our summer floral arrangements at a special discounted rate.</p>
						 </div>
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={`${styles.swiper__slide} ${styles.swiper__third}`}>
						 <div className={`${styles.swiper__header} ${styles.swiper__third_header}`}>
							 <h3>Experience autumn's vibrant hues and fragrant
								 blossoms with our stunning floral creations </h3>
							 <img src={thirdSwipeText} alt="text_image" />
						 </div>
						 <img src={thirdSwipe} alt="third_swiper" />
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

			 </Swiper>
		<div className={styles.swiper__btns}>
			<div ref={prevRef}><img src={arrowPrev} alt="" /></div>
			<div ref={nextRef}><img src={arrowNext} alt="" /></div>
		</div>
		 </div>
	);
};
