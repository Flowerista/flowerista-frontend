import s from './styles.module.scss';
import { NavBar } from './NavBar';
import { Logo } from './Logo';
import { HeaderButton } from './HeaderButton';
import { CartIcon } from '../ParametersMenu/CartIcon';
import { Link } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs';
import { Search } from '../ParametersMenu/Search';
import { Languages } from '../ParametersMenu/Languages';
import { FC, useState } from 'react';
import classNames from 'classnames';
import { CartModal } from '../Modals/CartModal/CartModal';
import {
  getRouteLogin,
  getRouteProfile,
  getRouteRegistration
} from '../../app/routerConfig.tsx';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className={s.container}>
      <HeaderButton onClick={() => toggleMenu()} open={openMenu} />
      <div className={s.logo__wrp}>
        <Logo type={'header'} />
      </div>
      <NavBar type="header" />
      <div className={s.parametersMenu__wrp}>
        <Link to={getRouteProfile()} className={s.parametersMenu__profile}>
          <BsFillPersonFill style={{ fontSize: '28px' }} />
        </Link>
        <CartIcon />
        <CartModal />
      </div>
      <div className={classNames(s.menu, { [s.open]: openMenu })}>
        <Search type="menu" />
        <NavBar type="menu" />
        <ProfileRender />
        <Languages />
      </div>
    </header>
  );
};

const ProfileRender: FC = () => {
  if (localStorage.getItem('token')) {
    return (
      <div className={s.profile}>
        <Link to={getRouteProfile()}>
          <BsFillPersonFill style={{ fontSize: '21px' }} />
          <span>Profile</span>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={s.profile}>
        <BsFillPersonFill style={{ fontSize: '21px' }} />
        <Link to={getRouteLogin()}>Log in</Link>
        <span>|</span>
        <Link to={getRouteRegistration()}>Registration</Link>
      </div>
    );
  }
};
