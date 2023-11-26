import { FC, CSSProperties, ReactNode, useEffect} from 'react'

import { BsArrowLeft } from 'react-icons/bs'
import classNames from 'classnames';

import styles from './styles.module.scss'
import CartItem from '../../Cart/CartItem/CartItem';
import { Button } from '../../Button/Buttons';

interface CartModalProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    setOpen: ( _ : boolean) => void;
}

export const CartModal: FC<CartModalProps> = ({children, style, className, isOpen = true, setOpen}) => {

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
                <div className={styles.cart}>
                    <CartItem id={1} name='Bouquet 34' defaultPrice={1550} discountPrice={1050} discount={20} img={'https://s3-alpha-sig.figma.com/img/4bff/5293/54456dc2f180e127b77d135b1b1c81ed?Expires=1701648000&Signature=FnyH2D7f2c4p6K9bh0nWWoQ0NFgHYeNAZSFqn3L-8sfoRudsMvlGRgH8yTuGlrhSO66nycqtS~oe93lJKzCuTEeThApA3WqAQu1uvCkzeQ1ZBDT8hajpf1ZdkQwkN2GWjPRp2c2qOdB3-9kSFut6dG6HWv-HxS3OZyqn~UAWDafngAu4vJrxNua2J0JaJrM9ejWRshPp1qVv1eNWSOU2ZlY1ItJwUgtIAh8uMuNIqKTVSZcna1Z4ww43M0HGcARpu0bqfZt2wDVsxWJQsRCb3HWdkFAjAyXNccAAjZUJsVtUehT3og4r~788EKOtT3GmWafTf8sWOt3sF3rNzCkxNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}/>
                    <CartItem id={1} name='Bouquet 34' defaultPrice={1550} discountPrice={1050} discount={20} img={'https://s3-alpha-sig.figma.com/img/4bff/5293/54456dc2f180e127b77d135b1b1c81ed?Expires=1701648000&Signature=FnyH2D7f2c4p6K9bh0nWWoQ0NFgHYeNAZSFqn3L-8sfoRudsMvlGRgH8yTuGlrhSO66nycqtS~oe93lJKzCuTEeThApA3WqAQu1uvCkzeQ1ZBDT8hajpf1ZdkQwkN2GWjPRp2c2qOdB3-9kSFut6dG6HWv-HxS3OZyqn~UAWDafngAu4vJrxNua2J0JaJrM9ejWRshPp1qVv1eNWSOU2ZlY1ItJwUgtIAh8uMuNIqKTVSZcna1Z4ww43M0HGcARpu0bqfZt2wDVsxWJQsRCb3HWdkFAjAyXNccAAjZUJsVtUehT3og4r~788EKOtT3GmWafTf8sWOt3sF3rNzCkxNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}/>
                    <CartItem id={1} name='Bouquet 34' defaultPrice={1550} discountPrice={1050} discount={20} img={'https://s3-alpha-sig.figma.com/img/4bff/5293/54456dc2f180e127b77d135b1b1c81ed?Expires=1701648000&Signature=FnyH2D7f2c4p6K9bh0nWWoQ0NFgHYeNAZSFqn3L-8sfoRudsMvlGRgH8yTuGlrhSO66nycqtS~oe93lJKzCuTEeThApA3WqAQu1uvCkzeQ1ZBDT8hajpf1ZdkQwkN2GWjPRp2c2qOdB3-9kSFut6dG6HWv-HxS3OZyqn~UAWDafngAu4vJrxNua2J0JaJrM9ejWRshPp1qVv1eNWSOU2ZlY1ItJwUgtIAh8uMuNIqKTVSZcna1Z4ww43M0HGcARpu0bqfZt2wDVsxWJQsRCb3HWdkFAjAyXNccAAjZUJsVtUehT3og4r~788EKOtT3GmWafTf8sWOt3sF3rNzCkxNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}/>
                    <CartItem id={1} name='Bouquet 34' defaultPrice={1550} discountPrice={1050} discount={20} img={'https://s3-alpha-sig.figma.com/img/4bff/5293/54456dc2f180e127b77d135b1b1c81ed?Expires=1701648000&Signature=FnyH2D7f2c4p6K9bh0nWWoQ0NFgHYeNAZSFqn3L-8sfoRudsMvlGRgH8yTuGlrhSO66nycqtS~oe93lJKzCuTEeThApA3WqAQu1uvCkzeQ1ZBDT8hajpf1ZdkQwkN2GWjPRp2c2qOdB3-9kSFut6dG6HWv-HxS3OZyqn~UAWDafngAu4vJrxNua2J0JaJrM9ejWRshPp1qVv1eNWSOU2ZlY1ItJwUgtIAh8uMuNIqKTVSZcna1Z4ww43M0HGcARpu0bqfZt2wDVsxWJQsRCb3HWdkFAjAyXNccAAjZUJsVtUehT3og4r~788EKOtT3GmWafTf8sWOt3sF3rNzCkxNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}/>
                    <CartItem id={1} name='Bouquet 34' defaultPrice={1550} discountPrice={1050} discount={20} img={'https://s3-alpha-sig.figma.com/img/4bff/5293/54456dc2f180e127b77d135b1b1c81ed?Expires=1701648000&Signature=FnyH2D7f2c4p6K9bh0nWWoQ0NFgHYeNAZSFqn3L-8sfoRudsMvlGRgH8yTuGlrhSO66nycqtS~oe93lJKzCuTEeThApA3WqAQu1uvCkzeQ1ZBDT8hajpf1ZdkQwkN2GWjPRp2c2qOdB3-9kSFut6dG6HWv-HxS3OZyqn~UAWDafngAu4vJrxNua2J0JaJrM9ejWRshPp1qVv1eNWSOU2ZlY1ItJwUgtIAh8uMuNIqKTVSZcna1Z4ww43M0HGcARpu0bqfZt2wDVsxWJQsRCb3HWdkFAjAyXNccAAjZUJsVtUehT3og4r~788EKOtT3GmWafTf8sWOt3sF3rNzCkxNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}/>
                    <CartItem id={1} name='Bouquet 34' defaultPrice={1550} discountPrice={1050} discount={20} img={'https://s3-alpha-sig.figma.com/img/4bff/5293/54456dc2f180e127b77d135b1b1c81ed?Expires=1701648000&Signature=FnyH2D7f2c4p6K9bh0nWWoQ0NFgHYeNAZSFqn3L-8sfoRudsMvlGRgH8yTuGlrhSO66nycqtS~oe93lJKzCuTEeThApA3WqAQu1uvCkzeQ1ZBDT8hajpf1ZdkQwkN2GWjPRp2c2qOdB3-9kSFut6dG6HWv-HxS3OZyqn~UAWDafngAu4vJrxNua2J0JaJrM9ejWRshPp1qVv1eNWSOU2ZlY1ItJwUgtIAh8uMuNIqKTVSZcna1Z4ww43M0HGcARpu0bqfZt2wDVsxWJQsRCb3HWdkFAjAyXNccAAjZUJsVtUehT3og4r~788EKOtT3GmWafTf8sWOt3sF3rNzCkxNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}/>
                </div>
                <div className={styles.modal__footer}>
                    <div className={styles.price}>
                        <p>Total price:</p>
                        <div className={styles.price__item}>
                            1050
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
