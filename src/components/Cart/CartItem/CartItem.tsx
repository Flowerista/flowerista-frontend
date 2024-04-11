import {CSSProperties, FC} from 'react'

import styles from './styles.module.scss'
import {BsTrash3} from 'react-icons/bs';
import {useAppDispatch} from '../../../store/store';
import {changeSize, decQuantity, incQuantity, ISize, removeCartItem, Size} from '../../../store/cart/cart.slice';
import {DropDownSize} from '../DropDownSize/DropDownSize';
import {generateCartID} from '../../../utils/helpers/generateCartID';

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

const CartItem: FC<CartItemProps> = ({
	                                     id,
	                                     name,
	                                     defaultPrice,
	                                     discountPrice,
	                                     img,
	                                     quantity,
	                                     currentSize,
	                                     sizes,
	                                     className,
	                                     style,
                                     }) => {
	const cartID = generateCartID(id, currentSize)
	const dispatch = useAppDispatch()
	const onDelete = () => {
		dispatch(removeCartItem({cartID}))
	}

	const onInc = () => {
		dispatch(incQuantity({cartID}))
	}

	const onDec = () => {
		if (quantity > 1) {
			dispatch(decQuantity({cartID}));
		}
	}

	const onChangeSize = (size: Size) => {
		dispatch(changeSize({cartID, size}))
	}

	return (
		 <div className={styles.item}>
			 <div className={styles.item__img}>
				 <img src={img} alt={name}/>
			 </div>
			 <div className={styles.item__content}>
				 <p className={styles.item__title}>{name}</p>
				 <div className={styles.item__selection}>
					 <DropDownSize
							name={currentSize}
							sizes={sizes.filter(item => item.size !== currentSize).map(item => item.size)} toggleSize={onChangeSize}
					 />
				 </div>
				 <div className={styles.price}>
					 <div className={styles.count}>
						 <button
								className={styles.count__btn}
								onClick={onDec}
						 >
							 -
						 </button>
						 <div className={styles.count__item}>{quantity}</div>
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
									<p>{defaultPrice * quantity}</p>
									<span>USD</span>
								</div>
						 }
						 <div className={styles.price__new}>
							 {quantity * (discountPrice || defaultPrice)}
							 <span>USD</span>
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
