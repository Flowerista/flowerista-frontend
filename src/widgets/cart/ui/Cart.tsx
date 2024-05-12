import { CSSProperties, FC } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';

import emptyImg from '../../../shared/assets/image/cart/empty-cart.png';
import { useTranslation } from 'react-i18next';
import { CartItem } from '../../cartItem';
import { useCart } from '../../../entities/cart/model/selectors/getCart/getCart.ts';

interface CartListProps {
  className?: string;
  style?: CSSProperties;
  mode: 'modal' | 'checkout';
}

export const Cart: FC<CartListProps> = ({ className, style, mode }) => {
  const cart = useCart();
  const { t } = useTranslation();
  return (
    <div
      className={classNames(styles.cart, styles[mode], className)}
      style={style}
    >
      {cart.length === 0 && (
        <div className={styles.cartEmpty}>
          <h2>{t('cart.title')}</h2>
          <p>{t('cart.description')}</p>
          <div className={styles.img_wrp}>
            <img className={styles.img} src={emptyImg} alt="" />
          </div>
        </div>
      )}
      {cart.length > 0 &&
        cart.map(
          ({
            id,
            name,
            defaultPrice,
            discount,
            discountPrice,
            imageUrls,
            quantity,
            sizes,
            currentSize,
            cartID
          }) => (
            <CartItem
              key={cartID}
              id={id}
              name={name}
              defaultPrice={defaultPrice}
              discountPrice={discountPrice}
              discount={discount}
              img={Object.values(imageUrls)[0]}
              quantity={quantity}
              sizes={sizes}
              currentSize={currentSize}
            />
          )
        )}
    </div>
  );
};
