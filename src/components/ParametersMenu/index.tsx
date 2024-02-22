import {FC} from 'react';
import styles from './styles.module.scss';
import {Search} from './Search';
import {Languages} from './Languages';
import {Link} from 'react-router-dom';
import {BsFillBagFill, BsFillPersonFill} from 'react-icons/bs';
import {DataRoute} from '../../data/routes';
import {CartModal} from '../Modals/CartModal/CartModal';
import {useAppSelector} from '../../store/store';
import {useDispatch} from 'react-redux';
import {setCartModalOpen} from '../../store/modals/modals.slice';


export const ParametersMenu: FC = () => {
	const {cart} = useAppSelector(state => state.cart)
	const dispatch = useDispatch()
	const setShowCart = () => {
		dispatch(setCartModalOpen(true))
	}
	return (
		 <>
			 <ul className={styles.parametersMenu}>
				 <li><Search/></li>
				 <li><Languages/></li>
				 <li><Link to={DataRoute.PersonalInformation}><BsFillPersonFill style={{fontSize: '24px'}}/></Link></li>
				 <li className={styles.cart}
				     onClick={setShowCart}>
					 <BsFillBagFill
							style={{fontSize: '24px'}}
					 />
					 {cart.length > 0 &&
							<div className={styles.quantity}>
								{
									cart.map(({quantity}) => quantity).reduce((a, b) => a + b)
								}
							</div>
					 }
				 </li>
			 </ul>
			 <CartModal/>
		 </>
	);
};

