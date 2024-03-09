import {FC, useState} from 'react';
import styles from './styles.module.scss';
import top from '../../../../assets/image/profile/order/top.png';
import bottom from '../../../../assets/image/profile/order/botton.png';


export interface IOrderItem {
	item: {
		id: string;
		status: string;
		total: string;
		address: {
			city: string;
			street: string;
			house: string;
			flat?: string;
			entrance?: string;
			date: string;
			type: string;
		}
		user: {
			telephone: string;
			name: string;
		};
		products: {
			image: string;
			name: string;
			size: string;
			price: number;
			quantity: number;
		}[];
	}
}

export const OrderItem: FC<IOrderItem> = ({item}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const handleExpandClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		 <div className={styles.wrapper}>
			 <div className={styles.item}>
				 <div className={styles.item__container}>
					 <div className={styles.item__number}>
						 <div className={styles.item__number_orderStatus}></div>
						 <div className={styles.item__number_info}>
								<span className={styles.order}>
									Order № {item.id}, {item.address.date}
								</span>
							 <span className={styles.status}>{item.status}</span>
						 </div>
					 </div>
					 <div className={styles.item__price}>
						 <div className={styles.item__price_title}>Total</div>
						 <div className={styles.item__price_total}>{item.total} <span>USD</span></div>
					 </div>
				 </div>
				 <div className={styles.item__image}>
					 {
						 item.products.length <= 3 ? (
								<>
									{item.products.map(product => (
										 <img src={product.image} alt={product.name} key={product.name + product.quantity}/>
									))}
								</>
						 ) : (
								<>
									<img src={item.products[0].image} alt={item.products[0].name}/>
									<span className={styles.quantity}>+{item.products.length}</span>
								</>
						 )
					 }
				 </div>
				 <div className={styles.item__openMenu}>
					 {isExpanded ?
							<img src={top} onClick={() => handleExpandClick()} alt="menu-top"/> :
							<img src={bottom} onClick={() => handleExpandClick()} alt="bottom-top"/>}
				 </div>
			 </div>
			 {isExpanded &&
					<div className={styles.info}>
						<div className={styles.info__user}>
							<div className={styles.info__user_delivery}>
								<h4>Info</h4>
								<p>Delivery by {item.address.type}</p>
								<p>{item.address.house ?? item.address.flat} {item.address.entrance ?? ''} {item.address.street},</p>
								<p>{item.address.city}</p>
							</div>
							<div className={styles.info__user_recipient}>
								<h4>Recipient</h4>
								<p>{item.user.name}</p>
								<p>tel. {item.user.telephone}</p>
							</div>
						</div>
						<div className={styles.info__products}>
							{
								item.products.map((product, index) => (
									 <div key={index} className={styles.info__products_product}>
										 <div className={styles.image}>
											 <img src={product.image} alt={product.image}/>
										 </div>
										 <div className={styles.title}>
											 <span>{product.name}</span>
											 <span>{product.size}</span>
										 </div>
										 <div className={styles.quantity}>{product.quantity} pc.</div>
										 <div className={styles.price}>{product.price} <span> USD</span></div>
									 </div>
								))
							}
							<div className={styles.info__total}>
								<h3>Total:</h3>
								<p>{item.total} <span>USD</span></p>
							</div>
						</div>
					</div>
			 }
		 </div>

	);
};

