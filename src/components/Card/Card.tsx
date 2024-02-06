import {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {BsBagFill, BsHeart, BsHeartFill} from 'react-icons/bs';

import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ICartItem, addCartItem } from '../../store/cart/cart.slice';
import { generateCartID } from '../../utils/helpers/generateCartID';
import { addCard, deleteCard } from '../../store/wishlist/wishlist.slice';


export type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface ISize {
    id: number;
    size: Size;
    defaultPrice: number;
    discount: number | null;
    discountPrice: number | null;
}

export interface IFlowerCard {
    id: number;
    name: string;
    imageUrls: Record<string, string>
    defaultPrice: number;
    discount: number | null;
    discountPrice: number | null;
    sizes: ISize[];
}

export const Card: FC<IFlowerCard> = (props) => {
    const {wishlist} = useAppSelector(state => state.wishlist);
    const dispatch = useAppDispatch();
    const {id, name, imageUrls, defaultPrice, discount, discountPrice} = props;
    const [liked, setLiked] = useState(wishlist.some(card => card.id === id))

    const toCart = () => {
        const cartID = generateCartID(id, 'MEDIUM')
        const flower: ICartItem = {
            ...props,
            currentSize: 'MEDIUM',
            quantity: 1,
            cartID: cartID,
        }
        dispatch(addCartItem(flower))
    }

    const toLike = (id: number) => {
        if (!localStorage.getItem('token')) {
            // TO DO Modal window
            alert('Register?')
        } else {
            if(liked) {
                dispatch(deleteCard(id))
            } else {
                dispatch(addCard(props))
            }
        }
    }

    const img = imageUrls?.['1']

    return (
    <div className={`${styles.card} ${discount ? styles.card__sale : ''}`}>
        <div className={styles.card__wrapper}>
            <div className={styles.card__img}>
                <Link to={`${DataRoute.Product}/${id}`}>
                    <img 
                        src={img} alt="flower" />
                </Link>
                <div className={styles.like} onClick={() => toLike(id)}>
                    { liked ? <BsHeartFill/> : <BsHeart/> }
                </div>
            </div>
            <div className={styles.card__footer}>
                <div className={styles.card__name}>
                    <Link to={`${DataRoute.Product}:${id}`}>
                        {name}
                    </Link>
                </div>
                <div className={styles.card__desc}>
                    <div className={styles.price__wrapper}>
                        {discountPrice &&
                            <div className={styles.price_old}>
                                <p>{defaultPrice}</p>
                                <span> UAH</span>
                            </div>
                        }
                        <div className={styles.price}>
                            {discountPrice || defaultPrice}
                            <span> UAH</span>
                        </div>
                    </div>
                    <button className={styles.cart} onClick={toCart} >
                        <BsBagFill/>
                    </button>
                </div>
            </div>
        </div>
        {discount && 
            <div className={styles.sale}>
                <p>-{discount}%</p>
            </div>
        }
    </div>
  )
}
