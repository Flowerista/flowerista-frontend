import React, {Dispatch, FC} from 'react';
import styles from './styles.module.scss';
import topArrow from '../../assets/image/dropDown/top_arrow.png'
import bottomArrow from '../../assets/image/dropDown/botton_arrow.png'
import {IFlower} from '../../interface/flower';
import useOutside from '../../hooks/useOutside';

interface IDropDown {
	items: IFlower[] | undefined;
	toggleFilter: (item: { item: string, menu: string, id: number }) => void;
	removeHandler: (item: { item: string, menu: string, id: number }) => void;
	name: string;
	setSelectedItems: Dispatch<React.SetStateAction<string[]>>
	selectedItems: string[]

}

export const DropDown: FC<IDropDown> = ({
	                                        items,
	                                        toggleFilter,
	                                        name,
	                                        removeHandler,
	                                        setSelectedItems,
	                                        selectedItems,
                                        }) => {
	const {isShow, setIsShow, ref} = useOutside(false)

	const handleItemClick = ({item, menu, id}: { item: any, menu: string, id: number }) => {
		const itemId = `${menu}_${id}`; // Генеруємо унікальний ідентифікатор для кожного елемента
		const isSelected = selectedItems.includes(itemId);

		if (isSelected) {
			// Елемент уже вибраний, знімаємо виділення
			setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((selectedItemId) => selectedItemId !== itemId));
			removeHandler({item: item.name, menu, id});
		} else {
			// Додаємо новий елемент до вибраних
			setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
			toggleFilter({item: item.name, menu, id});
		}

		setIsShow(true);
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
							 onClick={() => handleItemClick({item: item, menu: name, id: item.id})}
							 className={`${styles.item} ${selectedItems.includes(`${name}_${item.id}`) ? styles.selected : ''}`}
						>
							{item.name}
						</div>
				 ))}
			 </div>
		 </div>
	);
};
