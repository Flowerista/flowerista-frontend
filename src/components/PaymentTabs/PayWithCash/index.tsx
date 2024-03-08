import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {Button} from '../../Buttons/Button';
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';

export interface IPayWithCash {
}

export const PayWithCash: FC<IPayWithCash> = () => {
	const navgigation = useNavigate()
	const [isChecked, setChecked] = useState(false);

	const handleCheckboxChange = () => {
		setChecked(!isChecked);
	};


	return (
		 <div className={styles.container}>
			 <span>You can pay for the order in cash to the courier or upon receipt at the pickup department.</span>
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
			 <Button
					onClick={() => navgigation(DataRoute.ThanksYou)}
					disabled={!isChecked}
					text="Pay by cash" colorMode="black"
					style={{marginTop: '25px', marginBottom: '120px'}}
			 />
		 </div>
	);
};

