import { FC, useEffect } from 'react'
import classNames from 'classnames';
import { useAppSelector } from '../../../store/store';
import { getTotalPrice } from '../../../utils/helpers';
import { Button, Cart } from '../../index';

import { BsArrowLeft } from 'react-icons/bs'
import styles from './styles.module.scss'
import { ModalProps } from '../../../interface/global';

export const CartModal: FC<ModalProps> = ({children, style, className, isOpen = true, setOpen}) => {
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

    if(!isOpen){
        return null
    }
    
    const totalPrice = getTotalPrice(cart)

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
                <Cart />
                <div className={styles.modal__footer}>
                    <div className={styles.price}>
                        <p>Total price:</p>
                        <div className={styles.price__item}>
                            {totalPrice}
                            <span> UAH</span>
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <Button sizeMode='small' text='Check out' onClick={() => {}}/>
                        <Button sizeMode='small' colorMode='white' text='Сontinue shopping' onClick={onClose}/>
                    </div>
                </div>
                <div 
                    className={styles.modal__btn}
                    onClick={onClose}>
                    <BsArrowLeft size={24}/>back
                </div>
            </div>
        </div>
    )
}
