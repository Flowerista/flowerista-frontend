import React, {FC, useState} from 'react';
import styles from './styles.module.scss';
import topArrow from '../../assets/image/dropDown/top_arrow.png'
import bottomArrow from '../../assets/image/dropDown/botton_arrow.png'
import {IFlower} from '../../interface/flower';

interface IDropDown {
	items: IFlower[] | undefined;
  toggleFilter: (item: {item:string,menu:string,id:number}) => void;
  name: string;

}

export const DropDown: FC<IDropDown> = ({ items, toggleFilter,name }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleItemClick = ({item, menu,id}:{item:any,menu:string,id:number}) => {
		toggleFilter({item :item.name, menu,id});
		setIsActive(false);
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
				 <span>
					 {isActive?<img src={topArrow} alt=""/>:<img src={bottomArrow} alt=""/>}
				 </span>
			 </div>
			 <div className={`${styles.dropDown__content} ${isActive ? styles.active : ''}`}>
				 {items?.map((item) => (
						<div
							 key={item.id}
							 onClick={(e) => handleItemClick({item:item,menu:name,id:item.id})} // Обработчик клика на элементе
							 className={styles.item}
						>
							{item.name}
						</div>
				 ))}
			 </div>
		 </div>
	);
};
