import { FC, CSSProperties, ReactNode } from 'react'
import styles from './styles.module.scss'
import { BsArrowLeft } from 'react-icons/bs'

interface ModalProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
}


const Modal: FC<ModalProps> = ({children, style, className}) => {
  return (
    <div className={styles.modal} onClick={() => {}}>
        <div 
            className={`${styles.modal__wrapper} ${className ? className : ''}`}
            style={style}    
        >
            {children ? children : <></>}
            <div 
                className={styles.modal__btn}
                onClick={() => {}}>
                <BsArrowLeft size={24}/>back
            </div>
        </div>
    </div>
  )
}

export default Modal;
