import { FC } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

import { CartIcon } from '../../../../widgets/cartIcon';
import { CartModal } from '../../../../entities/cart';
import { getRouteProfile } from '../../../consts/router.ts';
import { Languages } from '../../../../features/Languages';
import { Search } from '../../../../features/search';

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
          <Link to={getRouteProfile()}>
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
