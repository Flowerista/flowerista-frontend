import { FC } from 'react';
import styles from '../../../../widgets/footer/ui/styles.module.scss';
import classNames from 'classnames';

interface CopyrightProps {
  className?: string;
}

export const Copyright: FC<CopyrightProps> = ({ className }) => {
  return (
    <p className={classNames(styles.footer__copirate, className)}>
      © Flowerista, 2023
    </p>
  );
};
