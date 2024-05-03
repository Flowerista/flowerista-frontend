import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import styles from './styles.module.scss';
import open from '../../../../../assets/image/checkOut/open.png';
import close from '../../../../../assets/image/checkOut/close.png';
import {useTranslation} from 'react-i18next';
import {useGetFlowers} from '../../../../../services/bouquete-api/getFlowers/getFlowers';


export interface IFlowersAccordion {
	setSelectedItems: Dispatch<SetStateAction<string[]>>;
	selectedItems: string[];
	removeHandler: (item: { item: string; menu: string; id: number }) => void;
	addFlowerFilter: (item: { item: string; menu: string; id: number }) => void;
}

export const FlowersAccordion: FC<IFlowersAccordion> = ({
	                                                        addFlowerFilter,
	                                                        setSelectedItems,
	                                                        selectedItems,
	                                                        removeHandler,
                                                        }) => {
	const {t} = useTranslation()
	const name = t('mobileFilters.filter.modal.nameFlower')

	const [isActive, setIsActive] = useState<boolean>(false);
	const {data} = useGetFlowers('')


	const handleClick = () => {
		setIsActive((prevState) => !prevState);
	};

	const handleTabsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	};

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
			addFlowerFilter({item: item.name, menu, id});
		}
	};

	return (
		 <div onClick={handleClick}
		      className={`${styles.accordion} ${isActive ? `${styles.open}` : ''}`}>
			 <div>
				 <div className={styles.title}>
					 <span>{t('mobileFilters.filter.modal.flower')}</span>
					 <img src={isActive ? open : close} alt="image-accordion"/>
				 </div>
				 <div className={styles.content} onClick={handleTabsClick}>
					 {data?.map((item) => (
							<div
								 key={item.id}
								 onClick={() => handleItemClick({item: item, menu: name, id: item.id})}
								 className={styles.item}
							>
								<div
									 className={`${styles.square} ${selectedItems.includes(`${name}_${item.id}`) ? styles.selected : ''}`}></div>
								<span>{item.name}</span>
							</div>
					 ))}
				 </div>
			 </div>
		 </div>
	);
};

