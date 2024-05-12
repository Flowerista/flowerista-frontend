import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface InputProps {
  label: string;
  type: string;
  defaultValue?: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: string;
  children?: ReactNode;
  required?: boolean;
}

export const FormInput: FC<InputProps> = ({
  label,
  type,
  register,
  error,
  children,
  required = true
}) => {
  return (
    <label className={styles.label}>
      <input
        className={`${styles.input} ${error ? styles.input_error : ''}`}
        type={type}
        // placeholder={placeholder || ''}
        required={required}
        {...register}
      />
      <span>{label}</span>
      {children}
    </label>
  );
};
