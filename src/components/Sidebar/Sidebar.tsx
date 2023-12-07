import React  from 'react';
import { NavLink } from 'react-router-dom';
import { DataRoute } from '../../data/routes';
import styles from './styles.module.scss';
import { BsArrowRight } from 'react-icons/bs';
import { useAppDispatch } from '../../store/store';
import { logout } from '../../store/auth/auth.slice';

interface SidebarPrors {
    style?: React.CSSProperties,
    className?: string;
}

export const Sidebar: React.FC<SidebarPrors> = ({className, style}) => {
    const dispatch = useAppDispatch()
  return (
    <div className={`${styles.sidebar} ${className}`} style={style}>
        <ul className={styles.sidebar__menu}>
            <li>
                <NavLink to={DataRoute.PersonalInformation}>
                    {({isActive}) => (
                        <div className={styles.sidebar__item}>
                            {isActive ? <BsArrowRight className={styles.arrow}/> : <div className={styles.arrow}></div>}
                            <p>My account</p>
                        </div>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to={DataRoute.Orders}>
                    {({isActive}) => (
                        <div className={styles.sidebar__item}>
                            {isActive ? <BsArrowRight className={styles.arrow}/> : <div className={styles.arrow}></div>}
                            <p>Orders history</p>
                        </div>
                    )}
                </NavLink>
            </li>
            <li>
                <NavLink to={DataRoute.Wishlist}>
                    {({isActive}) => (
                        <div className={styles.sidebar__item}>
                            {isActive ? <BsArrowRight className={styles.arrow}/> : <div className={styles.arrow}></div>}
                            <p>Wishlist</p>
                        </div>
                    )}
                </NavLink>
            </li>
        </ul>
        <div className={styles.sidebar__item}>
            <div className={styles.arrow}></div>
            <button className={styles.log_out}
                onClick={() => dispatch(logout())}
            >
                Log out
            </button>
        </div>
    </div>
  )
}
