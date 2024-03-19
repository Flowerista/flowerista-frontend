import {FC, useEffect} from 'react';
import styles from './styles.module.scss';
import PaymentService from '../../services/PaymentService/payment-service';
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {SecondHeader} from '../../components/SecondHeader';
import {CheckOutFooter} from '../CheckOutPage/CheckOutFooter';
import loader from '../../assets/image/checkOut/loader.gif'

export interface ICheckOutPendingPage {
}

export const CheckOutPendingPage: FC<ICheckOutPendingPage> = () => {
	const searchParams = new URLSearchParams(window.location.search);
	const token = searchParams.get('token');
	const navigate = useNavigate()

	const completedOrder = async () => {
		try {
			const res = await PaymentService.paymentCapture(`${token}`)
			if (res?.data.status === 'success') {
				navigate(DataRoute.ThanksYou)
			} else if (res?.data.status === 'error') {
				navigate(DataRoute.ErrorAfterPayment)
			}
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		completedOrder()
	}, []);

	return (
		 <main className={styles.wrapper}>
			 <div className={styles.container}>
				 <SecondHeader/>
				 <div className={styles.main}>
					 <h1>Your payment is now being processed</h1>
					 <p>Please wait a few seconds to confirm your payment.</p>
					 <div className={styles.image}>
						 <img src={loader} alt=""/>
					 </div>
				 </div>
			 </div>
			 <CheckOutFooter/>

		 </main>
	);
};

