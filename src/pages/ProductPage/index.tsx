import {FC, useCallback, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {setCartModalOpen} from '../../store/modals/modals.slice';
import {addToRecentlyViewed} from '../../store/recentlyViewed/recentlyViewed.slice';
import {addCartItem, ICartItem} from '../../store/cart/cart.slice';
import {useGetBouqueteByIdQuery} from '../../services/bouquete-api/bouquete-api-service';
import {useAppDispatch, useAppSelector} from '../../store/store';

import {Button} from '../../components/Buttons/Button'
import {Loader} from '../../components/shared/Loading';
import {SectionFlower} from '../../components/SectionsFlower/SectionFlower';
import {ProductSelect} from './ProductSelect';

import {DataRoute} from '../../data/routes';
import {ISize, Size} from '../../interface/flower';
import {generateCartID} from '../../utils/helpers';

import styles from './styles.module.scss';
import { BsArrowRight } from 'react-icons/bs';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';

export interface IProductPage {
}

export const ProductPage: FC<IProductPage> = () => {
	const {t} = useTranslation()
	const {productId} = useParams<{ productId: string }>();
	const {data, isLoading, error} = useGetBouqueteByIdQuery(`${productId}`)
	const [activeSize, setActiveSize] = useState<Size>('MEDIUM');
	const [price, setPrice] = useState<string>('')
	const [discountPrice, setDiscountPrice] = useState<string>('');
	const [quantity, setQuantity] = useState<number>(1);
	const dispatch = useAppDispatch()
	const {recentlyViewed} = useAppSelector(state => state.recentlyViewed)

	const submitItems = {
		size: activeSize,
		price: price,
		priceDiscount: discountPrice,
		quantity: quantity,
	}

	const toCart = () => {
		if (data && productId) {
			const {id, name, imageUrls, sizes} = data
			const dataCurSize = sizes.find(el => el.size === activeSize)
			if (dataCurSize) {
				const defaultPrice = dataCurSize?.defaultPrice
				const discount = dataCurSize?.discount
				const discountPrice = dataCurSize.discountPrice
				const cartID = generateCartID(id, activeSize)
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
					quantity,
				}
				dispatch(addCartItem(flower))
				dispatch(setCartModalOpen(true))
			}
		}
	}

	useEffect(() => {
		if (data) {
			setActiveSize(data?.sizes[0]?.size)
			setPrice(data?.sizes[0]?.defaultPrice.toString())
			setDiscountPrice(data?.sizes[0]?.discountPrice ? data?.sizes[0]?.discountPrice.toString() : '')
			dispatch(addToRecentlyViewed({
				id: data.id,
				name: data.name,
				discount: data.sizes[1]?.discountPrice ? 20 : '',
				defaultPrice: data?.sizes[0]?.defaultPrice.toString(),
				discountPrice: data?.sizes[0]?.discountPrice ? data?.sizes[0]?.discountPrice.toString() : '',
				imageUrls: data.imageUrls,
				sizes: data.sizes,
			}))
		}
	}, [data])


	const updateContent = (size: ISize) => {
		setActiveSize(size.size)
		setPrice(`${size.defaultPrice}`)
		setDiscountPrice(`${size.discountPrice ? size.discountPrice.toString() : ''}`)
	}

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
		return <Loader/>
	}

	if (error) {
		return <h1>Something Was Wrong</h1>
	}
	
	if (data) {
		return (
			<div className={styles.productPage}>
				<div className={styles.nav}>
					<Link to={DataRoute.Home}>{t('product.btn1')}</Link> 
					<span>|</span>
					<Link to={DataRoute.Catalog}>{t('product.btn2')}</Link>
					<span>|</span> 
					{t('product.bouquet')} {productId}
				</div>
				<div className={styles.container}>
					
					<div className={styles.swiper}>
						<Swiper
							pagination={{
								clickable: true,
								bulletActiveClass: `${styles.bulletActiveClass}`,
								bulletClass:  `${styles.bulletClass}`,
								horizontalClass: `${styles.horizontalClass}`
							}}										
							spaceBetween={0}
							modules={[Pagination]}
				 			slidesPerView={1}
						>
							{data && data.imageUrls && Object.values(data.imageUrls).map((imageUrl, index) => (
								<>
									<SwiperSlide className={styles.sectionSlider} key={index}>
										<img src={imageUrl} alt="flowers"/>
									</SwiperSlide>
								</>
							))}
						</Swiper>
					</div>

					<div className={styles.imgs_wrp}>
						{data && data.imageUrls && Object.values(data.imageUrls).map((imageUrl, index) => (
							<>
							<div className={styles.img}>
								<img key={index} src={imageUrl} alt="image"/>
							</div>
							<div className={styles.img}>
								<img key={index} src={imageUrl} alt="image"/>
							</div>
							<div className={styles.img}>
								<img key={index} src={imageUrl} alt="image"/>
							</div>
							</>
							
						))}
					</div>
	
					<div className={styles.content}>
						<div className={styles.content_wrp}>
							<div className={styles.info}>
								<div className={styles.info__wrp}>
									<h1 className={styles.info__title}>{data?.name}</h1>
									<span className={styles.info__code}>{t('product.code')}: {data.itemCode}</span>
								</div>
								<div className={styles.info__descr}>
									<p>{t('product.flowers')}: {data.flowers.map((flower) => flower.name).join(', ')}.</p>
									<p>{t('product.desc')}</p>
									<p>{t('product.sub_desc')}</p>
								</div>
							</div>
							<div className={styles.select_wrp}>
								{data?.sizes.map(size =>
									<ProductSelect
										size={size.size}
										active={size.size === activeSize}
										setActive={() => updateContent(size)}
										key={size.id}
										price={`${size.defaultPrice}`}
									/>)}
							</div>

							<div className={styles.quantity_wpr}>
								<div className={styles.price}>
									{discountPrice &&
										<div className={styles.price__old}>
											<p>{+price * quantity}</p>
											<span>UAH</span>
										</div>
									}
									<div className={styles.price__new}>
										{quantity * +(discountPrice || price)}
										<span>UAH</span>
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
									sizeMode='full'
									className={styles.buy}
								/>
							</div>

							<div className={styles.link}>
								<span>{t('product.link1')}</span>
								<Link 
									to={DataRoute.DeliveryAndPayment} 
									target={'_top'}
								>
									{t('product.link2')}
									<BsArrowRight style={{fontSize: "24px"}}/>
								</Link>
							</div>
						</div>
						<div></div>
					</div>
				</div>
	
				<div className={styles.recentlyViewed}>
					<h2>{t('product.recently')}</h2>
					<SectionFlower data={recentlyViewed} pagination={false}/>
				</div>
			</div>
		);
	}
	return null

	// return (
	// 	<div className={styles.productPage}>
	// 		<div className={styles.links}>
	// 			<Link to={DataRoute.Home}>{t('product.btn1')}</Link> 
	// 			<span>|</span>
	// 			<Link to={DataRoute.Catalog}>{t('product.btn2')}</Link>
	// 			<span>|</span> 
	// 			{t('product.bouquet')} {productId}
	// 		</div>
	// 		<div className={styles.container}>
	// 			<div className={styles.images}>
	// 				{data && data.imageUrls && Object.values(data.imageUrls).map((imageUrl, index) => (
	// 					<img key={index} src={imageUrl} alt="image"/>
	// 				))}
	// 			</div>
	// 			<div className={styles.content}>
	// 				<div className={styles.content__infos}>
	// 					<h1>{data?.name}</h1>
	// 					<span className={styles.content__span}>{t('product.code')}: {data?.itemCode}</span>
	// 					<div
	// 						className={styles.content__infos__flowers}>{t('product.flowers')}: {data?.flowers.map(flower => <>{flower.name}, {' '}</>)}</div>
	// 					<p>{t('product.desc')}</p>
	// 					<p>{t('product.sub_desc')}</p>
	// 				</div>
	// 				<div className={styles.content__select}>
	// 					{data?.sizes.map(size =>
	// 						<ProductSelect
	// 							size={size.size}
	// 							active={size.size === activeSize}
	// 							setActive={() => updateContent(size)}
	// 							key={size.id}
	// 							price={`${size.defaultPrice}`}
	// 						/>)}
	// 				</div>
	// 				<div className={styles.content__price}>
	// 					<div className={styles.priceDiscount}>
	// 						{discountPrice ? <span>{price.toString()} UAH</span> : ''}
	// 					</div>
	// 					<span className={styles.defaultPrice}>{discountPrice ? discountPrice : price} UAH</span>
	// 				</div>
	// 				<div className={styles.content__btns}>
	// 					<Button text={`${t('product.buy')}`} onClick={toCart}/>
	// 					<div>
	// 						<button onClick={decreaseQuantity}>-</button>
	// 						{quantity}
	// 						<button onClick={increaseQuantity}>+</button>
	// 					</div>
	// 				</div>
	// 				<div className={styles.content__link}>
	// 					<span>{t('product.link1')}</span>
	// 					<Link 
	// 						to={DataRoute.DeliveryAndPayment} 
	// 						target={'_top'}
	// 					>
	// 						{t('product.link2')}
	// 						<img src={arrow} alt="arrow"/>
	// 					</Link>
	// 				</div>
	// 			</div>
	// 		</div>

	// 		<div className={styles.recentlyViewed}>
	// 			<h2>{t('product.recently')}</h2>
	// 			<SectionFlower data={recentlyViewed}/>
	// 		</div>
	// 	</div>
	// );
};

