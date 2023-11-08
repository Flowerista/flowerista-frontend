import { FC } from 'react';
import styles from './styles.module.scss';

interface FormTitleProps {
    text: string
    style?: {}
}

const FormTitle: FC<FormTitleProps> = ({text, style}) => {
  return (
    <h2 
        className={styles.title}
        style={style}
    >
        {text}
    </h2>

  )
}

export default FormTitle;
