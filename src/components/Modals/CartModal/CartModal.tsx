import {FC, useEffect} from 'react'
import classNames from 'classnames';
import {useAppSelector} from '../../../store/store';
import {getTotalPrice} from '../../../utils/helpers';
import {Button, Cart} from '../../index';

import {BsArrowLeft} from 'react-icons/bs'
import styles from './styles.module.scss'
import {ModalProps} from '../../../interface/global';
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import {useTranslation} from 'react-i18next';

export const CartModal: FC<ModalProps> = ({children, style, className, isOpen = true, setOpen}) => {
	const {t} = useTranslation()
	const navigate = useNavigate()
	const {cart} = useAppSelector(state => state.cart)

	const onClose = () => {
		setOpen(false)
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
		}
	}, [])

	if (!isOpen) {
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
							 <span> UAH</span>
						 </div>
					 </div>
					 <div className={styles.btns}>
						 <Button sizeMode="small" text={`${t('cart.btn1')}`} onClick={toCheckOut}/>
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
