import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import s from './styles.module.scss';

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  open: boolean;
}

export const HeaderButton: FC<HeaderButtonProps> = (props) => {
  const { className, open, ...otherProps } = props;
  return (
    <button
      type="button"
      className={classNames(s.headerButton, className, { [s.open]: open })}
      {...otherProps}
    >
      <div className={s.line}></div>
    </button>
  );
};
