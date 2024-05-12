import { BsFillBagFill } from 'react-icons/bs';
import { useModalActions } from '../../../entities/modals/model/slice/modals.slice.ts';

import s from './styles.module.scss';
import { useCart } from '../../../entities/cart/model/selectors/getCart/getCart.ts';

export const CartIcon = () => {
  const cart = useCart();
  const { setCartModalOpen } = useModalActions();

  const setShowCart: () => void = () => {
    setCartModalOpen(true);
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
