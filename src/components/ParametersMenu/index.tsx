import { FC } from 'react';
import styles from './styles.module.scss';
import { Search } from './Search';
import { Languages } from './Languages';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

import { CartIcon } from './CartIcon';
import { CartModal } from '../Modals/CartModal/CartModal';
import { getRoutePersonalInformation } from '../../app/routerConfig.tsx';

export const ParametersMenu: FC = () => {
  return (
    <>
      <ul className={styles.parametersMenu}>
        <li>
          <Search type="header" />
        </li>
        <li>
          <Languages />
        </li>
        <li>
          <Link to={getRoutePersonalInformation()}>
            <BsFillPersonFill style={{ fontSize: '32px' }} />
          </Link>
        </li>
        <li>
          <CartIcon />
        </li>
      </ul>
      <CartModal />
    </>
  );
};
