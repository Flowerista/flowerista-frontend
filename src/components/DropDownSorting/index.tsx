import React, {FC, useState} from 'react';
import styles from './styles.module.scss';
import topArrow from '../../assets/image/dropDown/top_arrow.png'
import bottomArrow from '../../assets/image/dropDown/botton_arrow.png'
import tick from '../../assets/image/dropDown/tick.png'

interface IDropDownSorting{
	items:{item:string,name:string,id:number,sort:boolean}[]
	toggleFilter:(item:{item:string,name:string,id:number,sort:boolean})=>void
	name:string
	setName:(name:string)=>void
}

export const DropDownSorting: FC<IDropDownSorting> = ({ items, toggleFilter,name,setName }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleItemClick = (value:{item:string,name:string,id:number,sort:boolean}) => {
		toggleFilter(value);
		setIsActive(false);
		setName(value.name);
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
							 onClick={() => handleItemClick(item)} // Обработчик клика на элементе
							 className={styles.item}
						>
							{item.name}
							{item.sort ? <img src={tick} alt="tick"/>:""}
						</div>
				 ))}
			 </div>
		 </div>
	);
};
