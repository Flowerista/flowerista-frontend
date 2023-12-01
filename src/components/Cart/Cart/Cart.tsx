import { FC, CSSProperties } from "react";
import { useAppSelector } from "../../../store/store"
import CartItem from "../CartItem/CartItem"

import classNames from 'classnames';
import styles from './styles.module.scss'


interface CartListProps {
    className?: string
    style?: CSSProperties
    scroll?: boolean;
}

export const Cart: FC<CartListProps> = ({className, style, scroll = false}) => {
    const {cart} = useAppSelector(state => state.cart)

    return (
        <div 
            className={classNames(styles.cart, className, {[styles.scroll]: scroll})}
            style={style}
        >
            {cart.length > 0 && cart.map(({id, name, defaultPrice, discount, discountPrice, imageUrls, quantity, sizes, currentSize, cartID}) => (
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