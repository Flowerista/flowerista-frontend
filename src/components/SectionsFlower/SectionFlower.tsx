import {CSSProperties, FC, useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import classNames from 'classnames';

import {Card} from '../Card/Card';
import {IFlowerCard} from '../../interface/flower';

import styles from './styles.module.scss';
import { useResize } from '../../hooks/useResize';

export interface ISectionsFlower {
  data: IFlowerCard[] | undefined;
  style?: CSSProperties;
  className?: string
}

export const SectionFlower: FC<ISectionsFlower> = ({data, style, className}) => {
  const {width} = useResize()
  
  const [showSlide, setShowSlide] = useState(2);
  const [gapSlide, setGapSlide] = useState(9);

  useEffect(() => {
    if (width < 500) {
      setShowSlide(2)
      setGapSlide(9)
    }
    if (width > 500) {
      setShowSlide(3)
      setGapSlide(9)
    }
    if (width >= 768) {
      setShowSlide(3)
      setGapSlide(20)
    }
    if (width >= 1024) {
      setShowSlide(4)
      setGapSlide(20)
    }
    if (width >= 1276) {
      setShowSlide(5)
      setGapSlide(3)
    }
    
    console.log(width)
    return () => {

    }
  }, [width])
  

  console.log(width)
  return (
    <section className={classNames(styles.section, className)} style={style}>
      <div className={styles.swiper}>
			  <Swiper
					pagination={{
            clickable: true,
            bulletActiveClass: `${styles.bulletActiveClass}`,
            bulletClass:  `${styles.bulletClass}`,
            horizontalClass: `${styles.horizontalClass}`
          }}
          spaceBetween={gapSlide}
					modules={[Pagination]}
          slidesPerView={showSlide}
			  >
          {data && data.map((item) => (
            <SwiperSlide className={styles.sectionSlider} key={item.id}>
              <Card
                id={item.id}
                name={item.name}
                discount={item.discount}
                defaultPrice={item.defaultPrice}
                discountPrice={item.discountPrice}
                imageUrls={item.imageUrls}
                sizes={item.sizes}
              />
            </SwiperSlide>
          ))}
			 </Swiper>
		 </div>
    </section>
  )
}
