import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBagFill, BsHeart, BsHeartFill } from 'react-icons/bs';

import styles from './styles.module.scss';
import { useGetWishlistQuery } from '../model/api/getWishlist/getWishlist.ts';
import { useModalActions } from '../../../entities/modals/model/slice/modals.slice.ts';
import { useCartActions } from '../../../entities/cart';
import { useAddWishlistMutation } from '../model/api/addCardToWishlist/addCardToWishlist.ts';
import { useRemoveCardFromWishlist } from '../model/api/deleteFromWishlist/deleteFromWishlist.ts';
import { generateCartID } from '../../../shared/lib/helpers';
import { getRouteProductId } from '../../../shared/consts/router.ts';
import { InterfaceFlowerCard } from '../model/types/InterfaceFlowerCard.ts';
import { InterfaceCardItem } from '../model/types/IntefaceCardItem.ts';
import { useUser } from '../../../pages/profile/model/selectors/getUser.ts';

export const Card: FC<InterfaceFlowerCard> = (props) => {
  const user = useUser();
  const { data: wishlist } = useGetWishlistQuery('wishlist', {
    skip: !user
  });
  const { setCartModalOpen, setWishlistModalOpen } = useModalActions();
  const { addCartItem } = useCartActions();
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
    const flower: InterfaceCardItem = {
      ...props,
      currentSize: 'MEDIUM',
      quantity: 1,
      cartID: cartID
    };
    addCartItem(flower);
    setCartModalOpen(true);
  };

  const toLike = async (id: number) => {
    if (!user) {
      setWishlistModalOpen(true);
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
          <Link to={getRouteProductId(String(id))}>
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
            <Link to={getRouteProductId(String(id))}>{name}</Link>
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
