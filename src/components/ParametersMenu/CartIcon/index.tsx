import { BsFillBagFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setCartModalOpen } from '../../../store/modals/modals.slice';

import s from './styles.module.scss';

export const CartIcon = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const setShowCart: () => void = () => {
    dispatch(setCartModalOpen(true));
  };
  return (
    <div className={s.cart} onClick={setShowCart}>
      <BsFillBagFill style={{ fontSize: '24px' }} />
      {cart.length > 0 && (
        <div className={s.quantity}>
          {cart.map(({ quantity }) => quantity).reduce((a, b) => a + b)}
        </div>
      )}
    </div>
  );
};
