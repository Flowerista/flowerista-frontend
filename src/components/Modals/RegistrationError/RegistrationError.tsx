import {FC} from 'react'
import Modal from '../Modal';

import styles from './styles.module.scss'
import { Title } from '../../Title/Title';
import { Button } from '../../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import { DataRoute } from '../../../data/routes';

interface RegistrationErrorProps {
    isOpen: boolean;
    setOpen: (state: false) => void;
}

const RegistrationError: FC<RegistrationErrorProps> = ({isOpen, setOpen}) => {
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
            <Title text='Registration Error' className={styles.modal__title}/>
            <div className={styles.list__wrapper}>
                <ol className={styles.modal__list}>
                    <li className={styles.modal__item}>
                        We apologize, but an error occurred during registration. Please double-check all the filled fields and ensure they are correctly entered.
                    </li>
                    <li className={styles.modal__item}>
                        If the error persists, please attempt registration again. If the issue continues, feel free to contact our customer support for further assistance.
                    </li>
                    <li className={styles.modal__item}>
                        Thank you for your understanding and for choosing our shop
                    </li>
                </ol>
            </div>
            <Button text='Try again' onClick={onClose} style={{marginTop: '50px'}}/>
            <Button text='Go to main page' colorMode='white' onClick={() => toMainPage()} style={{marginTop: '20px'}}/>
        </Modal>
    )
}

export default RegistrationError;