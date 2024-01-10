import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss'
import close from '../../assets/image/checkOut/close.png'
import open from '../../assets/image/checkOut/open.png'
import Tabs from '../Tabs';
import {AddressInformation} from '../../pages/CheckOutPage/Delivery/AddressInformation';
import {useAppDispatch} from '../../store/store';
import {setCity, setEntrance, setFlat, setHouse, setStreet} from '../../store/checkout/checkout.slice';

interface IAccordion {
	address: {
		city: string | null
		street: string | null
		house: string | null
		entrance: string | null
		flat: string | null
	} | undefined
}

export const Accordion: FC<IAccordion> = ({address}) => {
	const [isActiveAccordion, setIsActiveAccordion] = useState(false);
	const [type, setType] = useState<'mail' | 'courier'>('courier');
	const [isActive, setIsActive] = useState<boolean>(false)
	const dispatch = useAppDispatch()


	useEffect(() => {
		dispatch(setCity(address?.city))
		dispatch(setStreet(address?.street))
		dispatch(setHouse(address?.house))
		dispatch(setFlat(address?.flat))
		dispatch(setEntrance(address?.entrance))
	}, [address]);


	const handleClick = () => {
		setIsActiveAccordion((prevState) => !prevState);
	};


	const handleTabsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	};


	return (
		 <div
				onClick={handleClick}
				className={`${styles.accordion} ${isActiveAccordion ? `${styles.open}` : ''}`}
		 >
			 <div className={styles.title}>
				 <span>Delivery</span>
				 {isActive ? <button onClick={() => {
						  setIsActive(false)
						  handleClick()
					  }}>change</button> :
						<img src={isActiveAccordion ? open : close} alt="image-accordion"/>}
			 </div>
			 <div className={styles.content} onClick={handleTabsClick}>
				 {isActive && <AddressInformation type={type} address={address}/>}
				 {!isActive && <Tabs setType={setType} setIsActive={setIsActive}/>}
			 </div>
		 </div>
	);
};
