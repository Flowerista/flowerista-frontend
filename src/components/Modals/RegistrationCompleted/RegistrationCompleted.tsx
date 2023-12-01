import {FC} from 'react'
import Modal from '../Modal';

import styles from './styles.module.scss'
import { Title } from '../../Title/Title';
import { Button } from '../../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import { DataRoute } from '../../../data/routes';

interface RegistrationCompletedProps {
    isOpen: boolean;
    setOpen: (state: false) => void;
}

const RegistrationCompleted: FC<RegistrationCompletedProps> = ({isOpen, setOpen}) => {
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
            <Title text='Registration Completed' className={styles.modal__title}/>
            <div className={styles.list__wrapper}>
                <ol className={styles.modal__list}>
                    <li className={styles.modal__item}>
                        Thank you for registering! A confirmation link has been sent to your registered email address.
                    </li>
                    <li className={styles.modal__item}>
                        Please find the email with the subject "Registration Confirmation" in your inbox. Simply open the email and click the link inside.
                    </li>
                    <li className={styles.modal__item}>
                        After clicking the link, log in to your created account.
                    </li>
                    <li className={styles.modal__item}>
                        All the items you've selected have been saved in your cart, and you can continue shopping by adding more items or placing an order.
                    </li>
                </ol>
            </div>
            <Button text='Go to main page' onClick={() => toMainPage()} style={{marginTop: '50px'}}/>
        </Modal>
  )
}

export default RegistrationCompleted