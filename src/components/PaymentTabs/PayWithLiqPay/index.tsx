import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {StripeForm} from '../../FormStripe';
import {useTranslation} from 'react-i18next';

export interface IPayWithLiqPay {
}

export const PayWithLiqPay: FC<IPayWithLiqPay> = () => {

	const {t} = useTranslation()

	const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
	const [isChecked, setChecked] = useState(false);

	const handleCheckboxChange = () => {
		setChecked(!isChecked);
	};


	return (
		 <div className={styles.container}>
			 <span>{t('checkout.authorized.payment.text1')}</span>
			 <p>{t('checkout.authorized.payment.text2')}</p>
			 <div>
				 <label>
					 <input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
					 />
					 {t('checkout.authorized.payment.btn3')}
				 </label>
			 </div>

			 <Elements stripe={stripePromise}>
				 <StripeForm orderId={'sdasd343e'} total={200}/>
			 </Elements>
		 </div>
	);
};

