import {CSSProperties, FC, useEffect} from 'react'
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {getTotalPrice} from '../../../utils/helpers';
import {Button, Cart} from '../../index';

import {BsArrowLeft} from 'react-icons/bs'
import styles from './styles.module.scss'
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import {setCartModalOpen} from '../../../store/modals/modals.slice';
import {useTranslation} from 'react-i18next';

interface CartModalProps {
	className?: string
	style?: CSSProperties
}

export const CartModal: FC<CartModalProps> = ({style, className}) => {
	const {t} = useTranslation()
	const navigate = useNavigate()
	const {cart} = useAppSelector(state => state.cart)
	const {modals} = useAppSelector(state => state.modals)
	const dispatch = useAppDispatch()

	const onClose = () => {
		dispatch(setCartModalOpen(false))
	}

	useEffect(() => {
		const closeModal = (e: any) => {
			if (e.code === 'Escape') {
				onClose()
			}
		};

		document.body.addEventListener('keyup', (e: any) => closeModal(e))

		return () => {
			document.body.removeEventListener('keyup', closeModal)
			dispatch(setCartModalOpen(false))
		}
	}, [])

	if (!modals.cartModalOpen) {
		return null
	}

	const totalPrice = getTotalPrice(cart)

	const toCheckOut = () => {
		navigate(DataRoute.CheckOut)
	}
	return (
		 <div
				className={classNames(styles.modal)}
				onClick={onClose}
		 >
			 <div
					className={classNames(styles.modal__wrapper, className)}
					style={style}
					onClick={(e) => e.stopPropagation()}
			 >
				 <Cart mode="modal"/>
				 <div className={styles.modal__footer}>
					 <div className={styles.price}>
						 <p>{t('cart.price')}</p>
						 <div className={styles.price__item}>
							 {totalPrice}
							 <span> USD</span>
						 </div>
					 </div>
					 <div className={styles.btns}>
						 <Button sizeMode="small" text={`${t('cart.btn1')}`} onClick={toCheckOut} disabled={cart.length === 0}/>
						 <Button sizeMode="small" colorMode="white" text={`${t('cart.btn2')}`} onClick={onClose}/>
					 </div>
				 </div>
				 <div
						className={styles.modal__btn}
						onClick={onClose}>
					 <BsArrowLeft size={24}/>{t('cart.back')}
				 </div>
			 </div>
		 </div>
	)
}
