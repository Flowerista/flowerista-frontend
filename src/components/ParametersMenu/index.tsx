import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {Search} from './Search';
import {Languages} from './Languages';
import {Link} from 'react-router-dom';
import {BsFillBagFill, BsFillPersonFill} from 'react-icons/bs';
import {DataRoute} from '../../data/routes';
import { CartModal } from '../Modals/CartModal/CartModal';


export const ParametersMenu: FC = () => {
	const [showCart, setShowCart] = useState<boolean>(false)
	return (
		<>
			<ul className={styles.parametersMenu}>
				<li><Search/></li>
				<li><Languages/></li>
				<li><Link to={DataRoute.PersonalInformation}><BsFillPersonFill style={{fontSize:"24px"}}/></Link></li>
				<li>
					<BsFillBagFill 
						style={{fontSize:"24px"}}
						onClick={() => setShowCart(true)}
					/>
				</li>
			</ul>
			<CartModal isOpen={showCart} setOpen={setShowCart}/>
		</>
	);
};

