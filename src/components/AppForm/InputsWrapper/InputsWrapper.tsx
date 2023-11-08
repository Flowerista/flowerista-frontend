import {FC, ReactNode} from 'react'
import styles from './styles.module.scss'

interface InputsWrapperProps {
    children: ReactNode
    style?: {}
}

const InputsWrapper: FC<InputsWrapperProps> = ({children, style}) => {
  return (
    <div
        className={styles.wrapper}
        style={style}
    >
        {children}
    </div>
  )
}

export default InputsWrapper;
