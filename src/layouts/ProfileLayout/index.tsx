import { FC, ReactNode, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


import styles from './styles.module.scss';
import { DataRoute } from '../../data/routes';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { MainLayout } from '../MainLayout';

export interface IProfileLayout {
    children: ReactNode
    pageName: 'Profile' | 'Wishlist' | 'Orders history'
}

export const ProfileLayout: FC<IProfileLayout> = ({children, pageName}) => {
    const navigate = useNavigate()
    useEffect(() => { 
        if (!localStorage.getItem('token')) {
            navigate(DataRoute.Login)
        }
    }, []);

    return (
        <MainLayout>
            <div className={styles.page_nav}><Link to={DataRoute.Home} >Home</Link> | {pageName}</div>
            <div className={styles.page_wrp}>
                <div className={styles.content}>
                    {children}
                </div>
                <div className={styles.wrapper__main}>
                    <div className={styles.wrapper__second}>
                        <Sidebar className={styles.sidebar} />
                        <div></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
