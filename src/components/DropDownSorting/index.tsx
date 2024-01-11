import React, {FC} from 'react';
import styles from './styles.module.scss';
import topArrow from '../../assets/image/dropDown/top_arrow.png'
import bottomArrow from '../../assets/image/dropDown/botton_arrow.png'
import useOutside from '../../hooks/useOutside';

interface IDropDownSorting {
	items: { item: string, name: string, id: number, sort: boolean }[]
	toggleFilter: (item: { item: string, name: string, id: number, sort: boolean }) => void
	name: string
	setName: (name: string) => void
}

export const DropDownSorting: FC<IDropDownSorting> = ({items, toggleFilter, name, setName}) => {
	const {isShow, setIsShow, ref} = useOutside(false)

	const handleItemClick = (value: { item: string, name: string, id: number, sort: boolean }) => {
		toggleFilter(value);
		setIsShow(true);
		setName(value.name);
	};

	return (
		 <div className={styles.dropDown}>
			 <div
					ref={ref}
					onClick={() => {
						setIsShow(!isShow);
					}}
					className={styles.dropDown__btn}
			 >
				 {name}
				 <span>
					 {isShow ? <img src={topArrow} alt=""/> : <img src={bottomArrow} alt=""/>}
				 </span>
			 </div>
			 <div className={`${styles.dropDown__content} ${isShow ? styles.active : ''}`}>
				 {items?.map((item) => (
						<div
							 key={item.id}
							 onClick={() => handleItemClick(item)} // Обработчик клика на элементе
							 className={`${styles.item} ${item.sort && styles.selected}`}
						>
							{item.name}
						</div>
				 ))}
			 </div>
		 </div>
	);
};
