import { FC, CSSProperties } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface TitleProps {
  text: string;
  style?: CSSProperties;
  className?: string;
}

export const Title: FC<TitleProps> = ({ text, style, className }) => {
  const clazz = classNames(styles.title, className);

  return (
    <h2 className={clazz} style={style}>
      {text}
    </h2>
  );
};
