import React, {FC, useState} from 'react';
import styles from './styles.module.scss'
import close from '../../assets/image/checkOut/close.png'
import open from '../../assets/image/checkOut/open.png'
import PaymentTabs from '../PaymentTabs';

interface IAccordion{

}

export const SecondAccordion:FC<IAccordion> = ( ) => {
	const [isActiveAccordion, setIsActiveAccordion] = useState(false);


	const handleClick = () => {
		setIsActiveAccordion((prevState) => !prevState);
	};


	const handleTabsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	};

	return (
		 <div
				onClick={handleClick}
				className={`${styles.accordion} ${isActiveAccordion ? `${styles.open}` : ""}`}
		 >
			 <div className={styles.title}>
				 <span>Payment method</span>
				 <img src={isActiveAccordion ? open : close} alt="image-accordion"/>
			 </div>
			 <div className={styles.content} onClick={handleTabsClick}>
				 <PaymentTabs/>
			 </div>
		 </div>
	);
};
