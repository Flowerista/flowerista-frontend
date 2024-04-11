import {FC, useState} from 'react';
import styles from './styles.module.scss';
import top from '../../../../assets/image/profile/order/top.png';
import bottom from '../../../../assets/image/profile/order/botton.png';
import {useTranslation} from 'react-i18next';
import {AddressHistory, OrderItemHistory, UserHistory} from '../index';

export interface IOrderItem {
	item: {
		id: number;
		status: string;
		payId: string | null;
		userId: number;
		sum: number;
		orderItems: OrderItemHistory[];
		address: AddressHistory;
		user: UserHistory;
		created: number | null;
		updated: number | null;
	}
}


export const OrderItem: FC<IOrderItem> = ({item}) => {
	const {t} = useTranslation()
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const handleExpandClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		 <div className={styles.wrapper}>
			 <div className={styles.item}>
				 <div className={styles.smallWrapper}>
					 <div className={styles.item__container}>
						 <div className={styles.item__number}>
							 <div
									className={`${styles.item__number_orderStatus} 
									${item.status === 'COMPLETED' && styles.completed} 
									${item.status === 'CANCELED' && styles.canceled}`}></div>
							 <div className={styles.item__number_info}>
								<span className={styles.order}>
									{t('profile.order.title')} № {item.id}, <span>{item.address.date}</span>
								</span>
								 <span className={styles.status}>{item.status}</span>
							 </div>
						 </div>
						 <div className={styles.item__price}>
							 <div className={styles.item__price_title}>{t('profile.order.total')}</div>
							 <div className={styles.item__price_total}>{item.sum} <span>USD</span></div>
						 </div>
					 </div>

					 <div className={styles.secondWrapper}>
						 <div className={styles.item__image}>
							 {
								 item.orderItems.length <= 3 ? (
										<>
											{item.orderItems.map(product => (
												 <img src={product.imageUrls[1]} alt={product.name} key={product.name + product.quantity}/>
											))}
										</>
								 ) : (
										<>
											<img src={item.orderItems[0].imageUrls[1]} alt={item.orderItems[0].name}/>
											<span className={styles.quantity}>+{item.orderItems.length}</span>
										</>
								 )
							 }
						 </div>
						 <div className={styles.item__openMenu}>
							 {isExpanded ?
									<img src={top} onClick={() => handleExpandClick()} alt="menu-top"/> :
									<img src={bottom} onClick={() => handleExpandClick()} alt="bottom-top"/>}
							 <div className={styles.item__price}>
								 <div className={styles.item__price_title}>{t('profile.order.total')}</div>
								 <div className={styles.item__price_total}>{item.sum} <span>USD</span></div>
							 </div>

						 </div>
					 </div>

				 </div>
				 {!isExpanded &&
						<div className={styles.smallContent}>
							<div className={styles.item__image}>
								{
									item.orderItems.length <= 3 ? (
										 <>
											 {item.orderItems.map(product => (
													<img src={product.imageUrls[1]} alt={product.name} key={product.name + product.quantity}/>
											 ))}
										 </>
									) : (
										 <>
											 <img src={item.orderItems[0].imageUrls[1]} alt={item.orderItems[0].name}/>
											 <span className={styles.quantity}>+{item.orderItems.length}</span>
										 </>
									)
								}
							</div>
							<div className={styles.item__price}>
								<div className={styles.item__price_title}>{t('profile.order.total')}</div>
								<div className={styles.item__price_total}>{item.sum} <span>USD</span></div>
							</div>
						</div>
				 }
			 </div>
			 {isExpanded &&
					<div className={styles.info}>
						<div className={styles.info__user}>
							<div className={styles.info__user_delivery}>
								<h4>{t('profile.order.info')}</h4>
								<p>{t('profile.order.delivery')} {item.address.type}</p>
								<p>{item.address.house ?? item.address.flat} {item.address.entrance ?? ''} {item.address.street},</p>
								<p>{item.address.city}</p>
							</div>
							<div className={styles.info__user_recipient}>
								<h4>{t('profile.order.recipient')}</h4>
								<p>{item.user.firstName} {item.user.lastName}</p>
								<p>{t('profile.order.tel')} {item.user.phoneNumber}</p>
							</div>
						</div>
						<div className={styles.info__products}>
							{
								item.orderItems.map((product, index) => (
									 <div key={index} className={styles.info__products_product}>
										 <div className={styles.product__wrapper}>
											 <div className={styles.image}>
												 <img src={product.imageUrls[1]} alt={product.name}/>
											 </div>
											 <div className={styles.title}>
												 <span>{product.name}</span>
												 <span>{product.size}</span>
											 </div>
										 </div>
										 <div className={styles.quantity}>{product.quantity} {t('profile.order.pc')}</div>
										 <div className={styles.price}>{product.price} <span> USD</span></div>
									 </div>
								))
							}
							<div className={styles.info__total}>
								<h3>{t('profile.order.total')}:</h3>
								<p>{item.sum} <span>USD</span></p>
							</div>
						</div>
					</div>
			 }
		 </div>

	);
};

