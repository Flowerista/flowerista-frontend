import {FC} from 'react'
import styles from './styles.module.scss'

interface IFormButton {
    text: string;
    style?: {}
    colorMode?: 'black' | 'white';
    sizeMode?: 'big' | 'small';
    onClick?: () => void;
}
const FormButton: FC<IFormButton> = ({text, style, colorMode = 'black', sizeMode = 'big', onClick}) => {
  return (
    <button 
        className={`
          ${styles.btn} 
          ${colorMode === 'black' ? styles.black : styles.white} 
          ${sizeMode === 'big' ? styles.big : styles.small}
        `}
        onClick={onClick}
        style={style}
    >
        {text}
    </button>
  )
}

export default FormButton;
