import { DetailedHTMLProps, FC, FormHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface IFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export const Form: FC<IFormProps> = ({ children, className, ...props }) => {
  return (
    <form className={cn(styles.form, className)} {...props}>
      {children}
    </form>
  );
};
