import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {Button} from '../../Button/Buttons';

export interface IPayWithLiqPay {
}

export const PayWithLiqPay: FC<IPayWithLiqPay> = () => {
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
			 <Button text='Pay by LiqPay' colorMode='black' style={{marginTop: '25px',marginBottom:"120px"}}/>
		 </div>
	);
};

