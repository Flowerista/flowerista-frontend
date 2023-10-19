import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.scss';

SwiperCore.use([Navigation, Pagination,Autoplay]);

export const HomeSwiper = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		 <div className={styles.swiper}>
			 <Swiper
				  loop={true}
				  autoplay={{delay:2500,disableOnInteraction:false}}
					pagination={{ clickable: true }}
				  navigation={{enabled:true,prevEl:prevRef.current,nextEl:nextRef.current}}
					modules={[Navigation, Pagination,Autoplay]}
					onSwiper={(swiper:any) => {
						setTimeout(() => {
							swiper.params.navigation.prevEl = prevRef.current
							swiper.params.navigation.nextEl = nextRef.current

							swiper.navigation.destroy()
							swiper.navigation.init()
							swiper.navigation.update()
						})
					}}
					className={"homeSwiper"}
			 >
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <img src="../../../../images/swiper/second.png" alt="" />
						 </div>
						 <img src="../../../../images/swiper/first.png" alt="" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <img src="../../../../images/swiper/second.png" alt="" />
						 </div>
						 <img src="../../../../images/swiper/first.png" alt="" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <img src="../../../../images/swiper/second.png" alt="" />
						 </div>
						 <img src="../../../../images/swiper/first.png" alt="" />
					 </div>
				 </SwiperSlide>
				 <SwiperSlide>
					 <div className={styles.swiper__slide}>
						 <div className={styles.swiper__header}>
							 <h3>Inspired by Nature </h3>
							 <img src="../../../../images/swiper/second.png" alt="" />
						 </div>
						 <img src="../../../../images/swiper/first.png" alt="" />
					 </div>
				 </SwiperSlide>
			 </Swiper>
		<div className={styles.swiper__btns}>
			<div ref={prevRef}><img src="../../../../images/swiper/arrow_2.svg" alt="" /></div>
			<div ref={nextRef}><img src="../../../../images/swiper/arrow_1.svg" alt="" /></div>
		</div>
		 </div>
	);
};
