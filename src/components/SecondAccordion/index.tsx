import React, {FC, useState} from 'react';
import styles from './styles.module.scss'
import close from '../../assets/image/checkOut/close.png'
import open from '../../assets/image/checkOut/open.png'
import PaymentTabs from '../PaymentTabs';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../store/store';

interface IAccordion {

}

export const SecondAccordion: FC<IAccordion> = () => {
	const {t} = useTranslation()
	const [isActiveAccordion, setIsActiveAccordion] = useState<boolean>(false);
	const cart = useAppSelector(state => state.cart.cart)
	const checkOut = useAppSelector(state => state.checkout)


	const handleClick = () => {
		if (checkOut.date === '' || cart.length === 0) {

			setIsActiveAccordion((prevState) => !prevState);
		}
		setIsActiveAccordion((prevState) => !prevState);
	};

	const handleTabsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	};


	return (
		 <div
				onClick={handleClick}
				className={`${checkOut.date === '' || cart.length === 0 ? styles.blocked : ''} ${styles.accordion} ${isActiveAccordion ? `${styles.open}` : ''}`}
		 >
			 <div className={styles.title}>
				 <span>{`${t('checkout.authorized.payment.title')}`}</span>
				 <img src={isActiveAccordion ? open : close} alt="image-accordion"/>
			 </div>
			 <div className={styles.content} onClick={handleTabsClick}>
				 <PaymentTabs/>
			 </div>
		 </div>
	);
};
