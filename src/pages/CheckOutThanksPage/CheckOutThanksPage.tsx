import {FC, useEffect} from 'react';
import styles from './styles.module.scss';
import {CheckOutFooter} from '../CheckOutPage/CheckOutFooter';
import {SecondHeader} from '../../components/SecondHeader';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {Button} from '../../components';
import flower from '../../assets/image/checkOut/thanks_you_flower.png'
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {cleanCart} from '../../store/cart/cart.slice';

export interface ICheckOutThanksPage {
}

const CheckOutThanksPage: FC<ICheckOutThanksPage> = () => {

	const orderId = useAppSelector(state => state.checkoutOrderId.orderId)
	const navigation = useNavigate()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(cleanCart())
		// return () => {
		// 	dispatch(setOrderId(0))
		// };
	}, []);


	return (
		 <div className={styles.wrapper}>
			 <div className={styles.container}>
				 <SecondHeader/>
				 <main className={styles.main}>
					 <div className={styles.info}>
						 <div className={styles.header}>
							 <h1>Thank you </h1>
							 <h1>For choosing Us!</h1>
						 </div>
						 <p>We have received your order № {orderId}.</p>
						 <p>A confirmation email has been sent to your email address.</p>
						 <span className={styles.span}>Our manager will contact you soon.</span>
						 <div className={styles.buttons}>
							 <form target={'_top'}>
								 <Button onClick={() => {
									 navigation(DataRoute.Catalog)
								 }} text={'Go to Catalog '}/>
							 </form>
							 <form target={'_top'}>
								 <Button
										onClick={() => {
											navigation(DataRoute.Home)
										}}
										colorMode={'white'}
										text={'Go to main page'}/>
							 </form>
						 </div>
					 </div>
					 <div className={styles.image}>
						 <img src={flower} alt="flower"/>
					 </div>
				 </main>
			 </div>
			 <CheckOutFooter/>
		 </div>
	);
};

export default CheckOutThanksPage
