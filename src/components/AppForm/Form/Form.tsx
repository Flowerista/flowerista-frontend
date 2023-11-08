import {FC, ReactNode} from 'react'
import styles from './styles.module.scss'

interface IFormProps {
    onSubmit: () => void;
    children?: ReactNode;
    style?: {};
}

const Form: FC<IFormProps> = ({children, style, onSubmit}) => {
  return (
    <form 
        className={styles.form}
        onSubmit={onSubmit}
        style={style} 
    >
        {children}
    </form>
  )
}

export default Form;
