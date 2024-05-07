import { FC } from 'react';
import { Button, Card } from '../../../components';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Flower from '../../../assets/image/wishlist/img.png';
import { useTranslation } from 'react-i18next';
import { Loader } from '../../../components/shared/Loading';
import { useGetWishlistQuery } from '../../../services/wishlistService/getWishlist/getWishlist';
import { getRouteCatalog } from '../../../app/routerConfig.tsx';

const Wishlist: FC = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useGetWishlistQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  if (data && data.length > 0) {
    return (
      <div className={styles.wishlist}>
        {data.map((item) => (
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
    );
  } else {
    return (
      <div className={styles.empty}>
        <h2 className={styles.empty__title}>{t('profile.wishlist.title')}</h2>
        <p className={styles.empty__subtitle}>{t('profile.wishlist.text')}</p>
        <Button
          text={t('profile.wishlist.btn')}
          onClick={() => navigate(getRouteCatalog())}
          sizeMode="full"
          className={styles.empty__btn}
        />
        <img className={styles.empty__img} src={Flower} alt="Flower" />
      </div>
    );
  }
};
export default Wishlist;
