import {FC, CSSProperties} from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames';

interface ButtonProps {
    text: string;
    style?: CSSProperties
    colorMode?: 'black' | 'white';
    sizeMode?: 'big' | 'small';
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({text, style, colorMode = 'black', sizeMode = 'big', onClick}) => {
    const clazz = classNames(styles.btn, styles[colorMode], styles[sizeMode])
    console.log(clazz);
    
    return (
        <button 
            className={clazz}
            onClick={onClick}
            style={style}
        >
            {text}
        </button>
    )
}