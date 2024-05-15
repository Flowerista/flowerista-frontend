import s from './styles.module.scss';
import { NavBar } from './NavBar';
import { Logo } from './Logo';
import { HeaderButton } from './HeaderButton';
import { CartIcon } from '../../cartIcon';
import { Link } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs';
import { FC, useState } from 'react';
import classNames from 'classnames';
import { CartModal } from '../../../entities/cart';
import {
  getRouteLogin,
  getRouteProfile,
  getRouteRegistration
} from '../../../shared/consts/router.ts';
import { Languages } from '../../../features/Languages';
import { Search } from '../../../features/search';
import { useUser } from '../../../pages/profile/model/selectors/getUser.ts';

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
  const user = useUser();
  if (user) {
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
