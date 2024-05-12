import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface InputsWrapperProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

export const InputsWrapper: FC<InputsWrapperProps> = ({ children, style }) => {
  return (
    <div className={styles.wrapper} style={style}>
      {children}
    </div>
  );
};
