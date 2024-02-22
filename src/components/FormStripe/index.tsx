import {FC} from 'react';
import styles from './styles.module.scss';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {Button} from '../Buttons/Button';
import {useTranslation} from 'react-i18next';

export interface IStripeForm {
	total: number;
	orderId: string;
}

export const StripeForm: FC<IStripeForm> = ({total, orderId}) => {
	const {t} = useTranslation()
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// @ts-ignore
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card: elements?.getElement(CardElement),
		});

		if (!error) {
			try {
				const {id} = paymentMethod
				// const res = await OrderService.payWithStripe({orderId: orderId, amount: total, id: id})
				// if (res.success) {
				// window.location.reload();
				// }
			} catch (e) {
				console.log(e)
			}
		} else {
			console.log(error.message)
		}
	}


	return (
		 <div className={styles.stripe}>
			 <form onSubmit={handleSubmit}>
				 <CardElement/>
				 <Button text={t('checkout.authorized.payment.btn4')} colorMode="black"
				         style={{marginTop: '25px', marginBottom: '120px'}}/>
			 </form>
		 </div>
	);
};

