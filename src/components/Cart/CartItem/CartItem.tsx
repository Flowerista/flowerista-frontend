import {FC, CSSProperties} from 'react'

import styles from './styles.module.scss'
import { BsTrash3 } from 'react-icons/bs';

interface CartItemProps {
    id: number;
    name: string;
    defaultPrice: number;
    discount: number | null;
    discountPrice: number | null;
    img: string;
    className?: string;
    style?: CSSProperties;
}

const CartItem: FC<CartItemProps> = ({id, name, defaultPrice, discountPrice, img, className, style}) => {
    const onDelete = () => {
        console.log(id);
    } 

    const onInc = () => {
        console.log('inc');
    }
    
    const onDec = () => {
        console.log('dec');
    }

  return (
    <div className={styles.item}>
        <div className={styles.item__img}>
            <img src={img} alt={name} />
        </div>
        <div className={styles.item__content}>
            <p className={styles.item__title}>{name}</p>
            <div className={styles.item__selection}>medium</div>
            <div className={styles.price}>
                <div className={styles.count}>
                    <button 
                        className={styles.count__btn}
                        onClick={onDec}
                    >
                        -
                    </button>
                    <div className={styles.count__item}>1</div>
                    <button 
                        className={styles.count__btn}
                        onClick={onInc}
                    >
                        +
                    </button>
                </div>
                <div className={styles.price__item}>
                    {discountPrice &&
                        <div className={styles.price__old}>
                            <p>{defaultPrice}</p>
                            <span> UAH</span>
                        </div>
                    }
                    <div className={styles.price__new}>
                        {discountPrice || defaultPrice}
                        <span> UAH</span>
                    </div>
                </div>
            </div>
        </div>
        <div 
            className={styles.trash}
            onClick={onDelete}
        >
            <BsTrash3 size={24}/>
        </div>
    </div>
  )
}

export default CartItem