import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss'
import close from '../../assets/image/checkOut/close.png'
import open from '../../assets/image/checkOut/open.png'
import Tabs from '../Tabs';
import {AddressInformation} from '../../pages/CheckOutPage/Delivery/AddressInformation';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {setCity, setEntrance, setFlat, setHouse, setStreet} from '../../store/checkout/checkout.slice';
import {useTranslation} from 'react-i18next';

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
	const {t} = useTranslation()
	const user = useAppSelector(state => state.user)
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
		if (user.user.email !== '') {
			setIsActiveAccordion((prevState) => !prevState);
		}
	};


	const handleTabsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	};

	return (
		 <div
				onClick={handleClick}
				className={`
					${user.user.email === '' ? styles.blocked : ''}
				 ${styles.accordion} 
				 ${isActiveAccordion ? `${styles.open}` : ''}
				 `}
		 >
			 <div className={styles.title}>
				 <span>{t('checkout.authorized.delivery.title')}</span>
				 {isActive ? <button onClick={() => {
							setIsActive(false)
							handleClick()
						}}>{t('checkout.authorized.data.btn1')}</button> :
						<img src={isActiveAccordion ? open : close} alt="image-accordion"/>}
			 </div>
			 <div className={styles.content} onClick={handleTabsClick}>
				 {isActive && <AddressInformation type={type}/>}
				 {!isActive && <Tabs setType={setType} setIsActive={setIsActive}/>}
			 </div>
		 </div>
	);
};
