import React, {FC, useState} from 'react';
import styles from './styles.module.scss';

export const DropDown: FC<any> = ({ items, toggleFilter,name,setName }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleItemClick = ({item, menu}:{item:any,menu:string}) => {
		toggleFilter({item :item.name, menu});
		setIsActive(false);
		setName(item.name);
	};

	return (
		 <div className={styles.dropDown}>
			 <div
					onClick={() => {
						setIsActive(!isActive);
					}}
					className={styles.dropDown__btn}
			 >
				 {name}
			 </div>
			 <div className={`${styles.dropDown__content} ${isActive ? styles.active : ''}`}>
				 {items?.map((item: any) => (
						<div
							 key={item.id}
							 onClick={(e: any) => handleItemClick({item:item,menu:name})} // Обработчик клика на элементе
							 className={styles.item}
						>
							{item.name}
						</div>
				 ))}
			 </div>
		 </div>
	);
};
