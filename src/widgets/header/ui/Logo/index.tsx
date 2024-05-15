import { FC } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import headerLogo from '../../../../shared/assets/image/logo/white_logo.png';
import footerLogo from '../../../../shared/assets/image/logo/black_logo.png';
import { getRouteHome } from '../../../../shared/consts/router.ts';

export const Logo: FC<{ type: string }> = ({ type }) => {
  return (
    <Link to={getRouteHome()} className={styles.logo}>
      {type === 'footer' ? (
        <img src={footerLogo} alt="logo" />
      ) : (
        <img src={headerLogo} alt="logo" />
      )}
    </Link>
  );
};
