import { FC, useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../store/store';

import { Button } from '../../components/Buttons/Button';
import { Loader } from '../../components/shared/Loading';
import { SectionFlower } from '../../components/SectionsFlower/SectionFlower';
import { ProductSelect } from './ProductSelect';

import { ISize, Size } from '../../interface/flower';
import { generateCartID } from '../../utils/helpers';

import styles from './styles.module.scss';
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useGetBouqueteById } from '../../services/bouquete-api/getBouqueteById/getBouqueteById';
import { ICartItem, useCartActions } from '../../store/cart/cart.slice.ts';
import { useModalActions } from '../../store/modals/modals.slice.ts';
import { useRecentlyViewedActions } from '../../store/recentlyViewed/recentlyViewed.slice.ts';
import {
  getRouteCatalog,
  getRouteDeliveryAndPayment,
  getRouteHome
} from '../../app/routerConfig.tsx';

export interface IProductPage {}

const ProductPage: FC<IProductPage> = () => {
  const { t } = useTranslation();
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading, error } = useGetBouqueteById(`${productId}`);
  const [activeSize, setActiveSize] = useState<Size>('MEDIUM');
  const [price, setPrice] = useState<string>('');
  const [discountPrice, setDiscountPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const { addCartItem } = useCartActions();
  const { setCartModalOpen } = useModalActions();
  const { addToRecentlyViewed } = useRecentlyViewedActions();

  const { recentlyViewed } = useAppSelector((state) => state.recentlyViewed);

  const toCart = () => {
    if (data && productId) {
      const { id, name, imageUrls, sizes } = data;
      const dataCurSize = sizes.find((el) => el.size === activeSize);
      if (dataCurSize) {
        const defaultPrice = dataCurSize?.defaultPrice;
        const discount = dataCurSize?.discount;
        const discountPrice = dataCurSize.discountPrice;
        const cartID = generateCartID(id, activeSize);
        const flower: ICartItem = {
          cartID,
          id,
          name,
          imageUrls,
          defaultPrice,
          discount,
          discountPrice,
          sizes,
          currentSize: activeSize,
          quantity
        };
        addCartItem(flower);
        setCartModalOpen(true);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setActiveSize(data?.sizes[0]?.size);
      setPrice(data?.sizes[0]?.defaultPrice.toString());
      setDiscountPrice(
        data?.sizes[0]?.discountPrice
          ? data?.sizes[0]?.discountPrice.toString()
          : ''
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
  }, [data]);

  const updateContent = (size: ISize) => {
    setActiveSize(size.size);
    setPrice(`${size.defaultPrice}`);
    setDiscountPrice(
      `${size.discountPrice ? size.discountPrice.toString() : ''}`
    );
  };

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
    <div className={styles.productPage}>
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
          >
            {data &&
              data.imageUrls &&
              Object.values(data.imageUrls).map((imageUrl, index) => (
                <>
                  <SwiperSlide className={styles.sectionSlider} key={index}>
                    <img src={imageUrl} alt="flowers" />
                  </SwiperSlide>
                </>
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
            <div className={styles.select_wrp}>
              {data?.sizes
                .slice()
                .sort((a, b) => a.defaultPrice - b.defaultPrice)
                .map((size) => (
                  <ProductSelect
                    size={size.size}
                    active={size.size === activeSize}
                    setActive={() => updateContent(size)}
                    key={size.id}
                    price={`${size.defaultPrice}`}
                  />
                ))}
            </div>

            <div className={styles.quantity_wpr}>
              <div className={styles.price}>
                {discountPrice && (
                  <div className={styles.price__old}>
                    <p>{+price * quantity}</p>
                    <span>USD</span>
                  </div>
                )}
                <div className={styles.price__new}>
                  {quantity * +(discountPrice || price)}
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
