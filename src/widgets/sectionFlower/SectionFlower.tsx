import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Card } from '../../features/card';
import { InterfaceFlowerCard } from '../../features/card/model/types/InterfaceFlowerCard.ts';
import cn from 'classnames';
import s from './styles.module.scss';

export interface ISectionsFlower
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  data: InterfaceFlowerCard[] | undefined;
  pagination?: boolean;
}

export const SectionFlower: FC<ISectionsFlower> = ({
  data,
  className,
  pagination = true,
  ...otherProps
}) => {
  return (
    <section className={cn(s.section, className)} {...otherProps}>
      <div className={s.swiper}>
        <Swiper
          pagination={{
            clickable: true,
            bulletActiveClass: `${s.bulletActiveClass}`,
            bulletClass: `${s.bulletClass}`,
            horizontalClass: `${s.horizontalClass}`
          }}
          spaceBetween={9}
          modules={pagination ? [Pagination] : []}
          slidesPerView={2}
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 9
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1276: {
              slidesPerView: 5,
              spaceBetween: 3
            }
          }}
        >
          {data &&
            data.map((item) => (
              <SwiperSlide className={s.sectionSlider} key={item.id}>
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
  );
};
