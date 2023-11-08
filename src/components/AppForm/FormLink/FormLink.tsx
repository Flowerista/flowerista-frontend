import {FC} from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

interface FormLinkProps {
    text: string;
    to: string;
    style?: {};
}

const FormLink: FC<FormLinkProps> = ({text, to, style}) => {
  return (
    <Link to={to} className={styles.link} style={style}>
        {text}
    </Link>
  )
}

export default FormLink;
