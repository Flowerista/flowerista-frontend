import {FC} from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import headerLogo from '../../../assets/image/logo/white_logo.png'
import footerLogo from '../../../assets/image/logo/black_logo.png'

export const Logo: FC<{ type: string }> = ({type}) => {
	return (
		 <Link target="_top" to={DataRoute.Home} className={styles.logo}>
			 {type === 'footer' ? <img src={footerLogo} alt="logo"/> : <img src={headerLogo} alt="logo"/>}
		 </Link>
	);
};

