import {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {useGetBouqueteByIdQuery} from '../../services/bouquete-api/bouquete-api-service';
import {Link, useParams} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {ProductSelect} from './ProductSelect';
import {Size} from '../../interface/flower';
import {Button} from '../../components/Button/Buttons'
import arrow from '../../assets/image/productItem/arrow.png'
import {useAppDispatch, useAppSelector} from '../../store/store';
import {addToRecentlyViewed} from '../../store/recentlyViewed/recentlyViewed.slice';
import {Card} from '../../components/Card/Card';

export interface IProductPage {
}

export const ProductPage: FC<IProductPage> = ( ) => {
	const {productId}  = useParams<{ productId: string }>();
	const {data,isLoading,error}= useGetBouqueteByIdQuery(`${productId}`)
	const [activeSize, setActiveSize] = useState<string>("");
	const [price, setPrice] = useState<string>("")
	const [discountPrice, setDiscountPrice] = useState<string>("");
	const [quantity, setQuantity] = useState<number>(1);
	const dispatch= useAppDispatch()
	const {recentlyViewed}= useAppSelector(state => state.recentlyViewed)

	console.log(typeof discountPrice)
console.log(discountPrice ? `${<span>{discountPrice}</span>} UAH`:"")

	const submitItems= {
		size:activeSize,
		price:price,
		priceDiscount:discountPrice,
		quantity:quantity,
	}

	useEffect(()=>{
		if(data){
			setActiveSize(data?.sizes[0]?.size)
			setPrice(data?.sizes[0]?.defaultPrice.toString())
			setDiscountPrice(data?.sizes[0]?.discountPrice ? data?.sizes[0]?.discountPrice.toString() :"")
			dispatch(addToRecentlyViewed({
				id:data.id,
				name:data.name,
				discount:data?.sizes[0]?.discountPrice ? 20 : "",
				defaultPrice:data?.sizes[0]?.defaultPrice.toString(),
				discountPrice:data?.sizes[0]?.discountPrice ? data?.sizes[0]?.discountPrice.toString() :"",
				img:data.imageUrls?.['1']
			}))
		}
	},[data])


	const updateContent = (size:Size)=>{
		setActiveSize(size.size)
		setPrice(`${size.defaultPrice}`)
		setDiscountPrice(`${size.discountPrice ? size.discountPrice.toString() :""}`)
	}

	const increaseQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity((prevQuantity) => prevQuantity - 1);
		}
	};


	if (isLoading){
		return <h1>Loading...</h1>
	}

	if (error){
		return <h1>Something Was Wrong</h1>
	}
	return (
		 <div className={styles.productPage}>
			 <div className={styles.productPage__links}>
				 <Link to={DataRoute.Home}>Home</Link> | {" "}
				 <Link to={DataRoute.Catalog}>Catalog</Link> | {" "}
				 Bouquet {productId}
			 </div>
			 <div className={styles.productPage__container}>
				 <div className={styles.productPage__images}>
					 {data && data.imageUrls && Object.values(data.imageUrls).map((imageUrl, index) => (
						  <img key={index} src={imageUrl} alt="image" />
					 ))}
				 </div>
					<div className={styles.productPage__content}>
						<div className={styles.productPage__content__infos}>
							<h1>{data?.name}</h1>
							<span className={styles.productPage__content__span}>code: {data?.itemCode}</span>
							<div className={styles.productPage__content__infos__flowers}>Flowers: {data?.flowers.map(flower => <>{flower.name}, {" "}</>)}</div>
							<p>At your request, the size of the bouquet can be changed.</p>
							<p>The original bouquet may differ slightly..</p>
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
								{discountPrice ? <span>{discountPrice.toString()} UAH</span> : ""}

							</div>
							<span className={styles.defaultPrice}>{price} UAH</span>
						</div>
						<div className={styles.productPage__content__btns}>
								<Button text='Buy' onClick={()=>alert(submitItems)}/>
							<div>
								<button onClick={increaseQuantity}>+</button>
								{quantity}
								<button onClick={decreaseQuantity}>-</button>
							</div>
						</div>
						<div className={styles.productPage__content__link}>
							<span>more about</span>
							<Link to={DataRoute.DeliveryAndPayment}>Delivery & payment <img src={arrow} alt="arrow"/></Link>
						</div>
					</div>
			 </div>

			 <div className={styles.productPage__recentlyViewed}>
				 {
					 recentlyViewed.map(item=>
						  <Card
								 id={item.id}
								 name={item.name}
								 discount={item.discount}
								 defaultPrice={item.defaultPrice}
								 discountPrice={item.discountPrice}
								 img={item.img}
								 key={item.id}
						  />
					 )
				 }

			 </div>
		 </div>
	);
};

