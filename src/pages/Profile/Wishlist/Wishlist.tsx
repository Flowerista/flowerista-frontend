import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { getWishlist } from '../../../store/wishlist/wishlist.slice';
import { Button, Card } from '../../../components';

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom';
import { DataRoute } from '../../../data/routes';
import Flower from '../../../assets/image/wishlist/img.png'
import { useTranslation } from 'react-i18next';
import { Loader } from '../../../components/shared/Loading';

const Wishlist: FC = () => {
	const { t } = useTranslation()
	const { loadingStatus, errorStatus, wishlist } = useAppSelector(state => state.wishlist)
	const dispatch = useAppDispatch();
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(getWishlist())
	}, []);

	if (loadingStatus.getWishlist) {
		return <Loader />
	}

	if (errorStatus.getWishlist) {
		return <h1>Error...</h1>
	}

	if (wishlist && wishlist.length > 0) {
		return (
			<div className={styles.wishlist}>
				{wishlist.map((item) => (
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
				<h2 className={styles.empty__title}>{t('profile.wishlist.title')}</h2>
				<p className={styles.empty__subtitle}>{t('profile.wishlist.text')}</p>
				<Button text={t('profile.wishlist.btn')} onClick={() => navigate(DataRoute.Catalog)} sizeMode='full' className={styles.empty__btn} />
				<img className={styles.empty__img} src={Flower} alt="Flower" />
			</div>
		)
	}
}
export default Wishlist
