import {FC} from 'react'
import Modal from '../Modal';

import styles from './styles.module.scss'
import {Title} from '../../Title/Title';
import {Button} from '../../Buttons/Button';
import {useNavigate} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import {useTranslation} from 'react-i18next';

interface RegistrationErrorProps {
	isOpen: boolean;
	setOpen: (state: false) => void;
}

const RegistrationError: FC<RegistrationErrorProps> = ({isOpen, setOpen}) => {
	const {t} = useTranslation()
	const navigate = useNavigate()
	const onClose = () => {
		setOpen(false)
	}
	const toMainPage = () => {
		onClose()
		navigate(DataRoute.Home)
	}
	return (
		 <Modal className={styles.modal} isOpen={isOpen} onClose={onClose}>
			 <Title text={`${t('register.error.title')}`} className={styles.modal__title}/>
			 <div className={styles.list__wrapper}>
				 <ol className={styles.modal__list}>
					 <li className={styles.modal__item}>
						 {t('register.error.text1')}
					 </li>
					 <li className={styles.modal__item}>
						 {t('register.error.text2')}
					 </li>
					 <li className={styles.modal__item}>
						 {t('register.error.text3')}
					 </li>
				 </ol>
			 </div>
			 <Button text={`${t('register.error.btn1')}`} onClick={onClose} style={{marginTop: '50px'}}/>
			 <Button text={`${t('register.error.btn2')}`} colorMode="white" onClick={() => toMainPage()}
			         style={{marginTop: '20px'}}/>
		 </Modal>
	)
}

export default RegistrationError;
