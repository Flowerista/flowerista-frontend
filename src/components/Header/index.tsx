import s from './styles.module.scss';
import {NavBar} from './NavBar';
import {Logo} from './Logo';
import { HeaderButton } from './HeaderButton';
import { CartIcon } from '../ParametersMenu/CartIcon';
import { Link } from 'react-router-dom';
import { DataRoute } from '../../data/routes';
import { BsFillPersonFill } from 'react-icons/bs';


export const Header = () => {
	return (
		<header className={s.container}>
			<HeaderButton/>
			<div className={s.logo__wrp}>
				<Logo type={"header"}/>
			</div>
			<NavBar type='header'/>
			<div className={s.parametersMenu__wrp}>
				<Link to={DataRoute.PersonalInformation} className={s.parametersMenu__profile}><BsFillPersonFill style={{fontSize: '28px'}}/></Link>
				<CartIcon/>
			</div>
		</header>
	);
};

