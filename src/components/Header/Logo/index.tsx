import {FC} from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import {Route} from '../../../data/routes';
import headerLogo from '../../../assets/image/logo.svg'
import footerLogo from '../../../assets/image/logo.png'

export const Logo: FC<{type:string}> = ({type}) => {
	return (
		 <Link to={Route.Home} className={styles.logo}>
			 {type === "footer"? <img src={footerLogo} alt="logo"/>:<img src={headerLogo} alt="logo"/>}
		 </Link>
	);
};

