import {FC, ReactNode, useState} from 'react';
import styles from './styles.module.scss';

interface InputProps {
  label: string;
  type: string;
  defaultValue?: string;
  placeholder: string;
  register: any;
  error?: string;
  children?: ReactNode;
  required?: boolean;
}

const FormInput: FC<InputProps> = ({label, type, defaultValue, placeholder, register, error, children,required=true}) => {
  const [value, setValue] = useState(defaultValue || '');
  return (
    <label className={styles.label}>
        <input 
          {...register}
          className={`${styles.input} ${error ? styles.input_error : ''}`}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          // placeholder={placeholder}
          required={required}
          {...register}
        />
        <span>{label}</span>
        {children}
    </label>
  )
}

export default FormInput;
