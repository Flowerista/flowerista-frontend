import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {Button} from '../../Buttons/Button';
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import {useTranslation} from 'react-i18next';

export interface IPayWithCash {
}

export const PayWithCash: FC<IPayWithCash> = () => {
	const {t} = useTranslation()
	const navgigation = useNavigate()
	const [isChecked, setChecked] = useState(false);

	const handleCheckboxChange = () => {
		setChecked(!isChecked);
	};


	return (
		 <div className={styles.container}>
			 <span>{t('checkout.authorized.payment.cash.text')}</span>
			 <div>
				 <label>
					 <input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
					 />
					 {t('checkout.authorized.payment.cash.btn')}
				 </label>
			 </div>
			 <Button
					onClick={() => navgigation(DataRoute.ThanksYou)}
					disabled={!isChecked}
					text={t('checkout.authorized.payment.cash.btn2')}
					colorMode="black"
					style={{marginTop: '25px', marginBottom: '120px'}}
			 />
		 </div>
	);
};

