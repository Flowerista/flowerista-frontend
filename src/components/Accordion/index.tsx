import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss'
import close from '../../assets/image/checkOut/close.png'
import open from '../../assets/image/checkOut/open.png'
import Tabs from '../Tabs';
import {AddressInformation} from '../../pages/CheckOutPage/Delivery/AddressInformation';
import {NavLink} from 'react-router-dom';
import {DataRoute} from '../../data/routes';

interface IAccordion{

}

export const Accordion:FC<IAccordion> = ( ) => {
	const [isActiveAccordion, setIsActiveAccordion] = useState(false);

	const address= {
		streetAddress:"Kharkiv, Peremohy avenu, 7",
		date:"23.11.2023",
		time:"12:00",
	}

	const handleClick = () => {
		setIsActiveAccordion((prevState) => !prevState);
	};


	const handleTabsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	};


	useEffect(()=>{
		if (address){
			setIsActiveAccordion(true)
		}
	},[address])

	return (
		 <div
				onClick={handleClick}
				className={`${styles.accordion} ${isActiveAccordion ? `${styles.open}` : ""}`}
		 >
			 <div className={styles.title}>
				 <span>Delivery</span>
				 {address ? <NavLink to={DataRoute.PersonalInformation} target={"_top"} >change</NavLink>:<img src={isActiveAccordion ? open : close} alt="image-accordion"/>}
			 </div>
			 <div className={styles.content} onClick={handleTabsClick}>
				 {address ? <AddressInformation address={address}/> :<Tabs/>}
			 </div>
		 </div>
	);
};
