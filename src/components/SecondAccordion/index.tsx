import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss'
import close from '../../assets/image/checkOut/close.png'
import open from '../../assets/image/checkOut/open.png'
import PaymentTabs from '../PaymentTabs';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '../../store/store';
import OrderService from '../../services/OrderService/order-service';
import {setOrderId} from '../../store/checkout/checkoutOrderId.slice';

interface IAccordion {

}

export const SecondAccordion: FC<IAccordion> = () => {
	const {t} = useTranslation()
	const [isActiveAccordion, setIsActiveAccordion] = useState<boolean>(false);
	const cart = useAppSelector(state => state.cart.cart)
	const user = useAppSelector(state => state.user.user)
	const {...rest} = useAppSelector(state => state.checkout)
	const dispatch = useAppDispatch()

	const createOrder = async () => {

		const order = {
			address: rest,
			sum: cart.reduce((total, item) => {
				const price = item.discountPrice !== null ? item.discountPrice : item.defaultPrice;
				const quantity = item.quantity;
				return total + (price * quantity);
			}, 0),
			orderItems:
				 cart.map(item => ({
					 productId: item.id,
					 name: item.name,
					 quantity: item.quantity,
					 sizeId: item.sizes.find(size => size.size === item.currentSize)?.id,
					 discountPrice: item.discountPrice,
					 price: item.defaultPrice,
					 colorId: item.id,
				 })),
		}
		try {
			const res = await OrderService.createOrder(order)
			if (res.data) {
				dispatch(setOrderId(res.data.id))
			}
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (cart.length !== 0 && user && rest.date !== '') {
			createOrder()
		}
	}, [rest.date, user]);

	const handleClick = () => {
		if (rest.date === '' || cart.length === 0) {
			setIsActiveAccordion((prevState) => !prevState);
		}
		setIsActiveAccordion((prevState) => !prevState);
	};

	const handleTabsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	};

	return (
		 <div
				onClick={handleClick}
				className={`${rest.date === '' || cart.length === 0 ? styles.blocked : ''} ${styles.accordion} ${isActiveAccordion ? `${styles.open}` : ''}`}
		 >
			 <div className={styles.title}>
				 <span>{`${t('checkout.authorized.payment.title')}`}</span>
				 <img src={isActiveAccordion ? open : close} alt="image-accordion"/>
			 </div>
			 <div className={styles.content} onClick={handleTabsClick}>
				 <PaymentTabs/>
			 </div>
		 </div>
	);
};
