import { FC } from 'react';
import { BsExclamationDiamondFill } from 'react-icons/bs';
import styles from './styles.module.scss';

interface IFormError {
  error: string | undefined;
}

const FormError: FC<IFormError> = ({ error }) => {
  return (
    <div className={styles.error}>
      <BsExclamationDiamondFill />
      <p>{error || 'Error'}</p>
    </div>
  );
};

export default FormError;
