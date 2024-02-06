import {FC} from 'react';
import styles from './styles.module.scss';
import {Button} from '../Buttons/Button';
import arrow from '../../assets/image/arrow.png';
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../data/routes';
import {useTranslation} from 'react-i18next';

export interface ICheckOutPopUp {
	setVisible: (visible: boolean) => void
	ref: any
}

export const CheckOutPopUp: FC<ICheckOutPopUp> = ({setVisible, ref}) => {
	const {t} = useTranslation()
	const navigation = useNavigate()
	return (
		 <div onClick={() => {
			 setVisible(false)
		 }} ref={ref} className={styles.blur}>
			 <div onClick={(e) => e.stopPropagation()} className={styles.popUp}>
				 <button onClick={() => setVisible(false)} className={styles.popUp__btn}><img src={arrow}
				                                                                              alt={'arrow'}/>{t('checkout.modal.btn3')}
				 </button>
				 <div className={styles.popUp__content}>
					 <h1>{t('checkout.modal.title')}</h1>
					 <li>{t('checkout.modal.text')}</li>
					 <Button onClick={() => {
						 navigation(DataRoute.Login)
					 }} text={`${t('checkout.modal.btn1')}`}/>
					 <Button onClick={() => {
						 navigation(DataRoute.Registration)
					 }} colorMode={'white'} text={`${t('checkout.modal.btn2')}`}/>
				 </div>
			 </div>
		 </div>
	);
};

