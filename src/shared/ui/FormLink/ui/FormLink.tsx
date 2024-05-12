import { FC } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface FormLinkProps {
  text: string;
  to: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

export const FormLink: FC<FormLinkProps> = ({ text, to, style }) => {
  return (
    <Link to={to} target={'_top'} className={styles.link} style={style}>
      {text}
    </Link>
  );
};
