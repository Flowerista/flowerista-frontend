import {FC, useCallback, useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {useGetBouqueteByIdQuery} from '../../services/bouquete-api/bouquete-api-service';
import {Link, useParams} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {ISize, Size} from '../../interface/flower';
import {Button} from '../../components/Buttons/Button'
import arrow from '../../assets/image/productItem/arrow.png'
import {useAppDispatch, useAppSelector} from '../../store/store';
import {addToRecentlyViewed} from '../../store/recentlyViewed/recentlyViewed.slice';
import {Card} from '../../components/Card/Card';
import {ProductSelect} from './ProductSelect';
import {generateCartID} from '../../utils/helpers';
import {addCartItem, ICartItem} from '../../store/cart/cart.slice';
import {setCartModalOpen} from '../../store/modals/modals.slice';
import {useTranslation} from 'react-i18next';
import {Loader} from '../../components/shared/Loading';

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

	console.log(data)

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
				img: data.imageUrls,
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
	return (
		 <div className={styles.productPage}>
			 <div className={styles.productPage__links}>
				 <Link to={DataRoute.Home}>{t('product.btn1')}</Link> | {' '}
				 <Link to={DataRoute.Catalog}>{t('product.btn2')}</Link> | {' '}
				 {t('product.bouquet')} {productId}
			 </div>
			 <div className={styles.productPage__container}>
				 <div className={styles.productPage__images}>
					 {data && data.imageUrls && Object.values(data.imageUrls).map((imageUrl, index) => (
							<img key={index} src={imageUrl} alt="image"/>
					 ))}
				 </div>
				 <div className={styles.productPage__content}>
					 <div className={styles.productPage__content__infos}>
						 <h1>{data?.name}</h1>
						 <span className={styles.productPage__content__span}>{t('product.code')}: {data?.itemCode}</span>
						 <div
								className={styles.productPage__content__infos__flowers}>{t('product.flowers')}: {data?.flowers.map(flower => <>{flower.name}, {' '}</>)}</div>
						 <p>{t('product.desc')}</p>
						 <p>{t('product.sub_desc')}</p>
					 </div>
					 <div className={styles.productPage__content__select}>
						 {data?.sizes.map(size =>
								<ProductSelect
									 size={size.size}
									 active={size.size === activeSize}
									 setActive={() => updateContent(size)}
									 key={size.id}
									 price={`${size.defaultPrice}`}
								/>)}
					 </div>
					 <div className={styles.productPage__content__price}>
						 <div className={styles.priceDiscount}>
							 {discountPrice ? <span>{price.toString()} UAH</span> : ''}
						 </div>
						 <span className={styles.defaultPrice}>{discountPrice ? discountPrice : price} UAH</span>
					 </div>
					 <div className={styles.productPage__content__btns}>
						 <Button text={`${t('product.buy')}`} onClick={toCart}/>
						 <div>
							 <button onClick={decreaseQuantity}>-</button>
							 {quantity}
							 <button onClick={increaseQuantity}>+</button>
						 </div>
					 </div>
					 <div className={styles.productPage__content__link}>
						 <span>{t('product.link1')}</span>
						 <Link to={DataRoute.DeliveryAndPayment} target={'_top'}>{t('product.link2')}<img src={arrow}
						                                                                                  alt="arrow"/></Link>
					 </div>
				 </div>
			 </div>

			 <div className={styles.productPage__recentlyViewed}>
				 <h1>{t('product.recently')}</h1>
				 <div style={{display: 'flex'}}>{
					 recentlyViewed.map(item =>
							<Card
								 id={item.id}
								 name={item.name}
								 discount={item.discount}
								 defaultPrice={item.defaultPrice}
								 discountPrice={item.discountPrice}
								 imageUrls={item.img}
								 sizes={item.sizes}
								 key={item.id}
							/>,
					 )
				 }</div>
			 </div>
		 </div>
	);
};

