import { ButtonHTMLAttributes, FC } from 'react';
import { BsClockFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  testId?: string;
  colorMode?: 'black' | 'white';
  sizeMode?: 'big' | 'small' | 'full';
  loading?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    text,
    colorMode = 'black',
    sizeMode = 'big',
    disabled,
    loading,
    className,
    testId = '',
    ...otherProps
  } = props;
  const clazz = classNames(
    styles.btn,
    styles[colorMode],
    styles[sizeMode],
    { [styles.loading]: loading },
    className
  );

  return (
    <button
      data-testid={testId}
      className={clazz}
      disabled={disabled || loading}
      {...otherProps}
    >
      {loading ? <BsClockFill className={styles.clock} /> : text}
    </button>
  );
};
