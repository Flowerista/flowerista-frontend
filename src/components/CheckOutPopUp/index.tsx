import {FC} from 'react';
import styles from './styles.module.scss';
import {Button} from '../Buttons/Button';
import arrow from '../../assets/image/arrow.png';
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../data/routes';

export interface ICheckOutPopUp {
	setVisible:(visible:boolean)=>void
	ref:any
}

export const CheckOutPopUp: FC<ICheckOutPopUp> = ({setVisible,ref}) => {
	const navigation = useNavigate()
	return (
		 <div onClick={()=>{setVisible(false)}} ref={ref} className={styles.blur}>
				<div onClick={(e)=>e.stopPropagation()} className={styles.popUp}>
					<button onClick={()=> setVisible(false)} className={styles.popUp__btn}><img src={arrow} alt={"arrow"} />back</button>
					<div className={styles.popUp__content}>
						<h1>Change your data</h1>
						<li>You can change your account or create a new one </li>
						<Button onClick={()=>{
							navigation(DataRoute.Login)
						}} text={"Have an account"}/>
						<Button onClick={()=>{navigation(DataRoute.Registration)}} colorMode={"white"} text={"Register"}/>
					</div>
				</div>
		 </div>
	);
};

