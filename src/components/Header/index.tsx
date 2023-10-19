import styles from './styles.module.scss';
import {NavBar} from './NavBar';
import {Logo} from './Logo';


export const Header = () => {
	return (
		 <div className={styles.container}>
			 <Logo/>
			 <NavBar/>
		 </div>
	);
};

