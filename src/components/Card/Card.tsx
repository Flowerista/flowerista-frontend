import {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {BsBagFill, BsHeart, BsHeartFill} from 'react-icons/bs';

import styles from './styles.module.scss';

export interface IFlowerCard {
    id: number;
    name: string;
    defaultPrice: number;
    discount: number | null;
    discountPrice: number | null;
    img?: string
}


const toCart = () => {
    alert('added to cart')
}

export const Card: FC<IFlowerCard> = ({id, name, defaultPrice, discount, discountPrice, img}) => {
    const [liked, setLiked] = useState(false)
    return (
    <div className={`${styles.card} ${discount ? styles.card__sale : ''}`}>
        <div className={styles.card__wrapper}>
            <div className={styles.card__img}>
                <Link to={`${DataRoute.Product}:${id}`}>
                    <img 
                        src={img} alt="flower" />
                </Link>
                <div className={styles.like} onClick={() => setLiked(state => !state)}>
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
