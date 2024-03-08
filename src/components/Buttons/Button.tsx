import {ButtonHTMLAttributes, CSSProperties, FC} from 'react'
import {BsClockFill} from 'react-icons/bs';
import styles from './styles.module.scss'
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	style?: CSSProperties
	colorMode?: 'black' | 'white';
	sizeMode?: 'big' | 'small';
	loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
	                                        text,
	                                        style,
	                                        colorMode = 'black',
	                                        sizeMode = 'big',
	                                        onClick,
	                                        disabled,
	                                        loading,
                                        }) => {
	const clazz = classNames(styles.btn, styles[colorMode], styles[sizeMode], {[styles.loading]: loading})

	return (
		 <button
				className={clazz}
				onClick={onClick}
				style={style}
				disabled={disabled || loading}
		 >
			 {loading ? <BsClockFill className={styles.clock}/> : text}
		 </button>
	)
}
