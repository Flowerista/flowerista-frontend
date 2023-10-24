import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import BgImage from '../../../assets/image/swiper/first.png'
import textBgImage from '../../../assets/image/swiper/second.png'
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
							 <img src={textBgImage} alt="" />
						 </div>
						 <img src={BgImage} alt="" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <img src={textBgImage} alt="" />
						 </div>
						 <img src={BgImage} alt="" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <img src={textBgImage} alt="" />
						 </div>
						 <img src={BgImage} alt="" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <img src={textBgImage} alt="" />
						 </div>
						 <img src={BgImage} alt="" />
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
