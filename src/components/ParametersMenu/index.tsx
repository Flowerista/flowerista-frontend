import { FC } from 'react';
import styles from './styles.module.scss';
import { Search } from './Search';
import { Languages } from './Languages';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { DataRoute } from '../../data/routes';
import { CartIcon } from './CartIcon';
import { CartModal } from '../Modals/CartModal/CartModal';

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
          <Link to={DataRoute.PersonalInformation}>
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
