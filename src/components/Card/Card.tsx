import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataRoute } from '../../data/routes';
import { BsBagFill, BsHeart, BsHeartFill } from 'react-icons/bs';

import styles from './styles.module.scss';
import { useAppDispatch } from '../../store/store';
import { addCartItem, ICartItem } from '../../store/cart/cart.slice';
import { generateCartID } from '../../utils/helpers/generateCartID';
import {
  setCartModalOpen,
  setWishlistModalOpen
} from '../../store/modals/modals.slice';
import { IFlowerCard } from '../../interface/flower';
import { useAddWishlistMutation } from '../../services/wishlistService/addCardToWishlist/addCardToWishlist';
import { useRemoveCardFromWishlist } from '../../services/wishlistService/deleteFromWishlist/deleteFromWishlist';
import { useGetWishlistQuery } from '../../services/wishlistService/getWishlist/getWishlist';

export type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface ISize {
  id: number;
  size: Size;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
}

export const Card: FC<IFlowerCard> = (props) => {
  const { data: wishlist } = useGetWishlistQuery();
  const dispatch = useAppDispatch();
  const { id, name, imageUrls, defaultPrice, discount, discountPrice } = props;
  const [liked, setLiked] = useState(false);
  const [addToWishlist] = useAddWishlistMutation();
  const [removeCard] = useRemoveCardFromWishlist();

  useEffect(() => {
    if (wishlist?.length) {
      setLiked(wishlist?.some((card) => card.id === id));
    }
  }, [wishlist]);

  const toCart = () => {
    const cartID = generateCartID(id, 'MEDIUM');
    const flower: ICartItem = {
      ...props,
      currentSize: 'MEDIUM',
      quantity: 1,
      cartID: cartID
    };
    dispatch(addCartItem(flower));
    dispatch(setCartModalOpen(true));
  };

  const toLike = async (id: number) => {
    if (!localStorage.getItem('token')) {
      dispatch(setWishlistModalOpen(true));
    } else {
      if (liked) {
        await removeCard(id);
        setLiked(false);
      } else {
        await addToWishlist(props.id);
        setLiked(true);
      }
    }
  };

  const img = imageUrls?.['1'];

  return (
    <div className={`${styles.card} ${discount ? styles.card__sale : ''}`}>
      <div className={styles.card__wrapper}>
        <div className={styles.card__img}>
          <Link to={`${DataRoute.Product}/${id}`}>
            <img
              className={`${discount ? styles.img_sale : ''}`}
              src={img}
              alt="flower"
            />
          </Link>
          <div className={styles.like} onClick={() => toLike(id)}>
            {liked ? <BsHeartFill /> : <BsHeart />}
          </div>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.card__name}>
            <Link to={`${DataRoute.Product}/${id}`}>{name}</Link>
          </div>
          <div className={styles.card__desc}>
            <div className={styles.price__wrapper}>
              {discountPrice && (
                <div className={styles.price_old}>
                  <p className={styles.price_old__count}>{defaultPrice}</p>
                  <span className={styles.price_old__currency}>USD</span>
                </div>
              )}
              <div className={styles.price}>
                {discountPrice || defaultPrice}
                <span>USD</span>
              </div>
            </div>
            <button className={styles.cart} onClick={toCart}>
              <BsBagFill />
            </button>
          </div>
        </div>
      </div>
      {discount && (
        <div className={styles.sale}>
          <p>-{discount}%</p>
        </div>
      )}
    </div>
  );
};
