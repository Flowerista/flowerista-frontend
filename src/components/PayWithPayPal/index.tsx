import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {PayPalButtons, PayPalButtonsComponentProps} from '@paypal/react-paypal-js';
import {useAppSelector} from '../../store/store';
import PaymentService from '../../services/PaymentService/payment-service';
import {useTranslation} from 'react-i18next';

export interface IPayWithPayPal {

}


export const PayWithPayPal: FC<IPayWithPayPal> = () => {
	const {t} = useTranslation()
	const cart = useAppSelector(state => state.cart.cart)
	const orderId = useAppSelector(state => state.checkoutOrderId.orderId)
	const [loading, setLoading] = useState(false);

	const initialOrder = async (orderId: number) => {
		const res = await PaymentService.paymentInit(orderId)
		window.open(res?.data.redirectUrl)
	}
	if (loading) {
		initialOrder(orderId)
	}


	const [isChecked, setChecked] = useState<boolean>(false);

	const handleCheckboxChange = () => {
		setChecked(!isChecked);
	};


	const onCreateOrder: PayPalButtonsComponentProps['createOrder'] = async (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: `${
							 cart.reduce((total, item) => {
								 const price = item.discountPrice !== null ? item.discountPrice : item.defaultPrice;

								 const quantity = item.quantity;
								 return total + (price * quantity);
							 }, 0)
						}`,
					},
				},
			],
		});
	}

	const onApproveOrder: PayPalButtonsComponentProps['onApprove'] = async (data, actions) => {
		try {
			setLoading(true)
		} catch (error) {
			console.error('Error capturing order:', error);
		}
	}

	return (
		 <div className={styles.payment}>
			 <span>
				 {t('checkout.authorized.payment.online.text')}
			 </span>
			 <div>
				 <label>
					 <input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
					 />
					 {t('checkout.authorized.payment.online.btn')}
				 </label>
			 </div>
			 <PayPalButtons
					disabled={!isChecked}
					style={{layout: 'vertical'}}
					createOrder={(data, actions) => onCreateOrder(data, actions)}
					onApprove={(data, actions) => onApproveOrder(data, actions)}
			 />
		 </div>
	);
};

