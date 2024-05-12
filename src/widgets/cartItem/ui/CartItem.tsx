import { CSSProperties, FC } from 'react';

import styles from './styles.module.scss';
import { BsTrash3 } from 'react-icons/bs';
import { useCartActions } from '../../../entities/cart/model/slice/cart.slice.ts';
import { DropDownSize } from '../../../entities/dropDownSize';
import { generateCartID } from '../../../shared/lib/helpers';
import { ISize, Size } from '../../../shared/types/flower.ts';

interface CartItemProps {
  id: number;
  name: string;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
  img: string;
  quantity: number;
  sizes: ISize[];
  currentSize: Size;
  className?: string;
  style?: CSSProperties;
}

export const CartItem: FC<CartItemProps> = ({
  id,
  name,
  defaultPrice,
  discountPrice,
  img,
  quantity,
  currentSize,
  sizes
}) => {
  const cartID = generateCartID(id, currentSize);
  const { removeCartItem, incQuantity, decQuantity, changeSize } =
    useCartActions();

  const onDelete = () => {
    removeCartItem({ cartID });
  };

  const onInc = () => {
    incQuantity({ cartID });
  };

  const onDec = () => {
    if (quantity > 1) {
      decQuantity({ cartID });
    }
  };

  const onChangeSize = (size: Size) => {
    changeSize({ cartID, size });
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.item__content}>
        <p className={styles.item__title}>{name}</p>
        <div className={styles.item__selection}>
          <DropDownSize
            name={currentSize}
            sizes={sizes
              .filter((item) => item.size !== currentSize)
              .map((item) => item.size)}
            toggleSize={onChangeSize}
          />
        </div>
        <div className={styles.price}>
          <div className={styles.count}>
            <button className={styles.count__btn} onClick={onDec}>
              -
            </button>
            <div className={styles.count__item}>{quantity}</div>
            <button className={styles.count__btn} onClick={onInc}>
              +
            </button>
          </div>
          <div className={styles.price__item}>
            {discountPrice && (
              <div className={styles.price__old}>
                <p>{defaultPrice * quantity}</p>
                <span>USD</span>
              </div>
            )}
            <div className={styles.price__new}>
              {quantity * (discountPrice || defaultPrice)}
              <span>USD</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trash} onClick={onDelete}>
        <BsTrash3 size={24} />
      </div>
    </div>
  );
};
