import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {StripeForm} from '../../FormStripe';

export interface IPayWithLiqPay {
}

export const PayWithLiqPay: FC<IPayWithLiqPay> = () => {
	const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
	const [isChecked, setChecked] = useState(false);

	const handleCheckboxChange = () => {
		setChecked(!isChecked);
	};



	return (
		 <div className={styles.container}>
			 <span>Use the button below to finalize your payment via LiqPay. </span>
			 <p>After completing the payment,
				 you will be automatically redirected back to our site to finish your order.
				 Your payment security is ensured by LiqPay. </p>
			 <div>
				 <label>
					 <input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
					 />
					 I have read the Privacy policy and agree to receive news, emails and offers from Flowerista
				 </label>
			 </div>

			 <Elements stripe={stripePromise}>
				 <StripeForm orderId={"sdasd343e"} total={200}/>
			 </Elements>
		 </div>
	);
};

