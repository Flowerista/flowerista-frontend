import styles from './styles.module.scss';
import {NavBar} from './NavBar';
import {Logo} from './Logo';


export const Header = () => {
	return (
		 <header className={styles.container}>
			 <Logo type={"header"}/>
			 <NavBar/>
		 </header>
	);
};

