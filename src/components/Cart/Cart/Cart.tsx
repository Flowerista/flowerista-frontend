import {CSSProperties, FC} from 'react';
import {useAppSelector} from '../../../store/store'
import CartItem from '../CartItem/CartItem'

import classNames from 'classnames';
import styles from './styles.module.scss'

import emptyImg from '../../../assets/image/cart/empty-cart.png'
import {useTranslation} from 'react-i18next';

interface CartListProps {
	className?: string
	style?: CSSProperties
	mode: 'modal' | 'checkout';
}

export const Cart: FC<CartListProps> = ({className, style, mode}) => {
	const {cart} = useAppSelector(state => state.cart)
	const {t} = useTranslation()
	return (
		<div
			className={classNames(styles.cart, styles[mode], className)}
			style={style}
		>
			{cart.length === 0 && <div className={styles.cartEmpty}>
				<h1>{t('cart.title')}</h1>
				<p>{t('cart.description')}</p>
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
