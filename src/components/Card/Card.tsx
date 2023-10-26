import {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {BsBagFill, BsHeart, BsHeartFill} from 'react-icons/bs';
import styles from './styles.module.scss';
import {IFlowerCard} from '../../types/flower';

const toCart = () => {
    alert('added to cart')
}
const defaultImg = 'https://s3-alpha-sig.figma.com/img/4635/4dd0/5bdb1351fb72d1197ef5809284ff345a?Expires=1698624000&Signature=dq-XKHT2XvSzN7x5lgjc4USLcSM9ucpBtqwAHjku1niTi7faLIcQy3hBvYCik5KLmplQ-fFjKzLMqOYuCIZTVhatAFyF3BfSDSpYTT6coCmbU6OgKZyzjvblLz4MKQUSqePUXxPpiPqEbeDaEZ3o14z9YdiifEvCGKzJyXCaaiJL5fAFSw2b4uXGTQnP9j1c2j7AEOF43sK769-Crf8KCzx1xyN9xCWUDPO9BkFMDak0Lwwwh0bpTvJuIah-rfgJ949MsPujIv-AI8ywkWFfK-Rdw34Crse2DBhNbkWKlATHCzmTGyBsyKnSUt-1C4nFWmTIY3Y6ic51r2V58qFTkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

export const Card: FC<IFlowerCard> = ({id, name, defaultPrice, discount, discountPrice, img}) => {
    const [liked, setLiked] = useState(false)
    return (
    <div className={`${styles.card} ${discount ? styles.card__sale : ''}`}>
        <div className={styles.card__wrapper}>
            <div className={styles.card__img}>
                <Link to={`${DataRoute.Product}:${id}`}>
                    <img 
                        src={ img || defaultImg } alt="flower" />
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
                    <div className={styles.cart} onClick={toCart}>
                        <BsBagFill/>
                    </div>
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
