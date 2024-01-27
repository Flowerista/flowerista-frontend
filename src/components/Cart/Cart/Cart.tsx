import {CSSProperties, FC} from 'react';
import {useAppSelector} from '../../../store/store'
import CartItem from '../CartItem/CartItem'

import classNames from 'classnames';
import styles from './styles.module.scss'

import emptyImg from '../../../assets/image/cart/empty-cart.png'

interface CartListProps {
	className?: string
	style?: CSSProperties
	mode: 'modal' | 'checkout';
}

export const Cart: FC<CartListProps> = ({className, style, mode}) => {
	const {cart} = useAppSelector(state => state.cart)

	return (
		 <div
				className={classNames(styles.cart, styles[mode], className)}
				style={style}
		 >
			 {cart.length === 0 && <div className={styles.cartEmpty}>
				 <h1>Cart is empty</h1>
				 <p>But it's never too late to fix it :)</p>
				 <img src={emptyImg} alt=""/>
			 </div>}
			 {cart.length > 0 && cart.map(({
				                               id,
				                               name,
				                               defaultPrice,
				                               discount,
				                               discountPrice,
				                               imageUrls,
				                               quantity,
				                               sizes,
				                               currentSize,
				                               cartID,
			                               }) => (
					<CartItem
						 key={cartID}
						 id={id}
						 name={name}
						 defaultPrice={defaultPrice}
						 discountPrice={discountPrice}
						 discount={discount}
						 img={Object.values(imageUrls)[0]}
						 quantity={quantity}
						 sizes={sizes}
						 currentSize={currentSize}
					/>
			 ))
			 }
		 </div>
	)
}
