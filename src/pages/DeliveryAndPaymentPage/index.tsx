import {FC} from 'react';
import styles from './styles.module.scss';
import rose from '../../assets/image/deliveryAndPayment/rose.png'


export const DeliveryAndPaymentPage: FC = () => {
	return (
		 <div className={styles.container}>
			 <div className={styles.container__info}>
				 <h1>Delivery and Payment Information:</h1>
				 <div className={styles.container__info_content}>
					 <h2>Delivery Terms:</h2>
					 <ul>
						 <li>Free Delivery: Enjoy free delivery when your order totals 500 UAH or more.</li>
						 <li>City Courier Delivery: We offer citywide courier delivery to accommodate your needs at a convenient time and place.</li>
						 <li> Regional Courier Delivery: If your address is outside the city limits, we also provide delivery across the region to ensure the utmost convenience for your order.</li>
						 <li>Self-departure from self-departure points: If you prefer to collect your order yourself, you can use the service of self-departure from the address 45 Peremohy St., Kyiv, Ukraine.</li>
					 </ul>
				 </div>
				 <div className={styles.container__info_content}>
					 <h2> Payment Terms:</h2>
					 <ul>
						 <li> Online Payment: We provide a convenient way to pay for your order directly on our website. You can use your credit card or other available online payment methods.</li>
						 <li> Cash Payment to the Courier: If you prefer to pay in cash, you can do so when our courier delivers your order. Please ensure you have the order amount in cash for payment.</li>
					 </ul>
					    <p>We aim to provide our customers with convenience and flexibility in the ordering and payment process, along with a guarantee of quality flower delivery. We hope these terms meet your needs and make the ordering process enjoyable and convenient.</p>
					    <p>If you have any further questions or need additional information, you can reach out to our manager at +380 99 999 99 99.</p>
				 </div>
			 </div>
			 <div className={styles.container__image}>
				 <img src={rose} alt="rose"/>
			 </div>
		 </div>
	);
};

