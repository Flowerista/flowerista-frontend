import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface InputProps {
  label: string;
  type: string;
  defaultValue?: string;
  placeholder: string;
  register: any;
  error?: string;
  children?: ReactNode;
}

const FormInput: FC<InputProps> = ({label, type, defaultValue, placeholder, register, error, children}) => {
  return (
    <label className={styles.label}>
        <input 
          className={`${styles.input} ${error ? styles.input_error : ''}`} 
          type={type}
          defaultValue={defaultValue ? defaultValue : ''} 
          // placeholder={placeholder}
          {...register}
        />
        <span>{label}</span>
        {children}
    </label>
  )
}

export default FormInput;
