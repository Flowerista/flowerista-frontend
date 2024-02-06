import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getWishlist } from "../../../store/wishlist/wishlist.slice";
import { Button, Card } from "../../../components";

import styles from './styles.module.scss'
import { IFlowerCard } from "../../../interface/flower";
import { useNavigate } from "react-router-dom";
import { DataRoute } from "../../../data/routes";
import Flower from "../../../assets/image/wishlist/img.png"

export const Wishlist: FC = () => {
  const {loadingStatus, errorStatus, wishlist} = useAppSelector(state => state.wishlist)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => { 
    dispatch(getWishlist())
  }, []);

  if (loadingStatus.getWishlist) {
    return <h1>Loading...</h1>
  }

  if (errorStatus.getWishlist) {
    return <h1>Error...</h1>
  }

  if (wishlist && wishlist.length > 0) {
    return (
      <div className={styles.wishlist}>
        { wishlist.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            discount={item.discount}
            defaultPrice={item.defaultPrice}
            discountPrice={item.discountPrice}
            imageUrls={item.imageUrls}
            sizes={item.sizes}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div className={styles.empty}>
        <h2 className={styles.empty__title}>You don't have any wishlists yet</h2>
        <p className={styles.empty__subtitle}>It's time to create the first one</p>
        <Button text="Go to Catalog" onClick={() => navigate(DataRoute.Catalog)}/>
        <img className={styles.empty__img} src={Flower} alt="Flower"/>
      </div>
    )
  }
}