import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SectionFlower } from '../../../widgets/sectionFlower/SectionFlower.tsx';

import { ISize } from '../../../shared/types/flower.ts';
import { generateCartID } from '../../../shared/lib/helpers';

import styles from './styles.module.scss';
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useGetBouqueteById } from '../model/api/getBouqueteById/getBouqueteById.ts';
import { useCartActions } from '../../../entities/cart';
import { useModalActions } from '../../../entities/modals/model/slice/modals.slice.ts';
import { useRecentlyViewedActions } from '../../../entities/recentlyViewed/model/slice/recentlyViewed.slice.ts';

import { Radio, RadioGroup } from '@headlessui/react';
import second from '../../../shared/assets/image/productItem/second_flower.png';
import first from '../../../shared/assets/image/productItem/first_flower.png';
import { normalizeWord } from '../../../shared/lib/helpers/normalizeWord.ts';

import {
  getRouteCatalog,
  getRouteDeliveryAndPayment,
  getRouteHome
} from '../../../shared/consts/router.ts';

import { Button } from '../../../shared/ui/button';
import { InterfaceCardItem } from '../../../features/card/model/types/IntefaceCardItem.ts';
import { Loader } from '../../../shared/ui/loading';
import { useRecentlyViewed } from '../../../entities/recentlyViewed/model/selectors/getRecentlyViewed.ts';
import 'swiper/scss';

export interface IProductPage {}

const ProductPage: FC<IProductPage> = () => {
  const { t } = useTranslation();
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading, error } = useGetBouqueteById(`${productId}`);
  const [quantity, setQuantity] = useState<number>(1);
  const { addCartItem } = useCartActions();
  const { setCartModalOpen } = useModalActions();
  const { addToRecentlyViewed } = useRecentlyViewedActions();
  const recentlyViewed = useRecentlyViewed().recentlyViewed;

  const [selectedSize, setSelectedSize] = useState<ISize | null>(null);

  const toCart = () => {
    if (data && productId && selectedSize) {
      const { id, name, imageUrls, sizes } = data;
      const cartID = generateCartID(id, selectedSize.size);
      const flower: InterfaceCardItem = {
        cartID,
        id,
        name,
        imageUrls,
        defaultPrice: selectedSize.defaultPrice,
        discount: selectedSize.discount,
        discountPrice: selectedSize.discountPrice,
        sizes,
        currentSize: selectedSize.size,
        quantity
      };
      addCartItem(flower);
      setCartModalOpen(true);
    }
  };

  useEffect(() => {
    if (data) {
      setSelectedSize(
        data?.sizes.slice().sort((a, b) => a.defaultPrice - b.defaultPrice)[2]
      );
      addToRecentlyViewed({
        id: data.id,
        name: data.name,
        discount: data.sizes[1]?.discountPrice ? 20 : '',
        defaultPrice: data?.sizes[0]?.defaultPrice.toString(),
        discountPrice: data?.sizes[0]?.discountPrice
          ? data?.sizes[0]?.discountPrice.toString()
          : '',
        imageUrls: data.imageUrls,
        sizes: data.sizes
      });
    }
  }, [addToRecentlyViewed, data]);

  const increaseQuantity = useCallback(() => {
    if (data && quantity < data.stockQuantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  }, [data, quantity]);

  const decreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }, [quantity]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Something Was Wrong</h1>;
  }
  return (
    <div data-testid="ProductPage" className={styles.productPage}>
      <div className={styles.nav}>
        <Link to={getRouteHome()}>{t('product.btn1')}</Link>
        <span>|</span>
        <Link to={getRouteCatalog()}>{t('product.btn2')}</Link>
        <span>|</span>
        {t('product.bouquet')} {productId}
      </div>
      <div className={styles.container}>
        <div className={styles.swiper}>
          <Swiper
            pagination={{
              clickable: true,
              bulletActiveClass: `${styles.bulletActiveClass}`,
              bulletClass: `${styles.bulletClass}`,
              horizontalClass: `${styles.horizontalClass}`
            }}
            spaceBetween={0}
            modules={[Pagination]}
            slidesPerView={1}
            nested={true}
          >
            {data &&
              data.imageUrls &&
              Object.values(data.imageUrls).map((imageUrl, index) => (
                <SwiperSlide className={styles.sectionSlider} key={index}>
                  <img src={imageUrl} alt="flowers" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className={styles.imgs_wrp}>
          {data &&
            data.imageUrls &&
            Object.values(data.imageUrls).map((imageUrl, index) => (
              <div key={index} className={styles.img}>
                <img src={imageUrl} alt="image" />
              </div>
            ))}
        </div>

        <div className={styles.content}>
          <div className={styles.content_wrp}>
            <div className={styles.info}>
              <div className={styles.info__wrp}>
                <h1 className={styles.info__title}>{data?.name}</h1>
                <span className={styles.info__code}>
                  {t('product.code')}: {data?.itemCode}
                </span>
              </div>
              <div className={styles.info__descr}>
                <p>
                  {t('product.flowers')}:{' '}
                  {data?.flowers.map((flower) => flower.name).join(', ')}.
                </p>
                <p>{t('product.desc')}</p>
                <p>{t('product.sub_desc')}</p>
              </div>
            </div>
            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className={styles.select_wrp}
              defaultValue={
                data?.sizes
                  .slice()
                  .sort((a, b) => a.defaultPrice - b.defaultPrice)[2]
              }
            >
              {data?.sizes
                .slice()
                .sort((a, b) => a.defaultPrice - b.defaultPrice)
                .map((size) => (
                  <Radio key={size.size} as={Fragment} value={size}>
                    {({ checked }) => (
                      <div
                        key={size.size}
                        className={`${styles.productSelect} ${checked ? styles.active : ''}`}
                      >
                        <div className={styles.productSelect__size}>
                          {checked ? (
                            <img src={second} alt="" />
                          ) : (
                            <img src={first} alt="" />
                          )}
                          <span>{normalizeWord(size.size)}</span>
                        </div>
                        <div className={styles.productSelect__price}>
                          {size.defaultPrice}
                        </div>
                      </div>
                    )}
                  </Radio>
                ))}
            </RadioGroup>

            <div className={styles.quantity_wpr}>
              <div className={styles.price}>
                {selectedSize?.discountPrice && (
                  <div className={styles.price__old}>
                    <p>{+selectedSize?.defaultPrice * quantity}</p>
                    <span>USD</span>
                  </div>
                )}
                <div className={styles.price__new}>
                  {selectedSize && (
                    <>
                      {quantity *
                        +(
                          selectedSize?.discountPrice ||
                          selectedSize?.defaultPrice
                        )}
                    </>
                  )}
                  <span>USD</span>
                </div>
              </div>
              <div className={styles.count}>
                <button onClick={decreaseQuantity}>-</button>
                <div className={styles.count__item}>{quantity}</div>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <Button
                text={`${t('product.buy')}`}
                onClick={toCart}
                sizeMode="full"
                className={styles.buy}
              />
            </div>

            <div className={styles.link}>
              <span>{t('product.link1')}</span>
              <Link to={getRouteDeliveryAndPayment()} target={'_top'}>
                {t('product.link2')}
                <BsArrowRight style={{ fontSize: '24px' }} />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className={styles.recentlyViewed}>
        <h2>{t('product.recently')}</h2>
        <SectionFlower data={recentlyViewed} pagination={false} />
      </div>
    </div>
  );
};

export default ProductPage;
