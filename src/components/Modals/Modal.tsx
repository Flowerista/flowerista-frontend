import { FC, CSSProperties, ReactNode, useEffect} from 'react'
import styles from './styles.module.scss'
import { BsArrowLeft } from 'react-icons/bs'
import classNames from 'classnames';

interface ModalProps {
    style?: CSSProperties;
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}


const Modal: FC<ModalProps> = ({children, style, className, isOpen = true, onClose}) => {
    useEffect(() => {
        const closeModal = (e: any) => {
            if (e.code === 'Escape') {
                onClose()
            }
        };

        document.body.addEventListener('keyup', (e: any) => closeModal(e))

        return () => {
            document.body.removeEventListener('keyup', closeModal)
        }
    }, [])

    if(!isOpen){
        return null
    }
    
    return (
        <div 
            className={classNames(styles.modal)} 
            onClick={onClose}
        >
            <div 
                className={classNames(styles.modal__wrapper, className)}
                style={style}
                onClick={(e) => e.stopPropagation()}    
            >
                {children}
                <div 
                    className={styles.modal__btn}
                    onClick={onClose}>
                    <BsArrowLeft size={24}/>back
                </div>
            </div>
        </div>
    )
}

export default Modal;
