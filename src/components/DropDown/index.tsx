import React, {FC, useState} from 'react';
import topArrow from '../../assets/image/dropDown/top_arrow.png'
import bottomArrow from '../../assets/image/dropDown/botton_arrow.png'
import styles from './styles.module.scss'

interface IDropDownProps {
	text: string
	items:{key: string, value: string}[]
}


export const DropDown: FC<IDropDownProps> = ({text,items}) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [selected, setSelected] = useState<string>(text);



	const handleItemClick = (item: string) => {
		setSelected(item);
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
				 {selected}
				 <span>
					 {isActive?<img src={topArrow} alt=""/>:<img src={bottomArrow} alt=""/>}
				 </span>
			 </div>
			 <div
					className={`${styles.dropDown__content} ${isActive ? styles.active :""}`}
			 >
				 {items.map(item =>(
					  <div
						   key={item.key}
							 onClick={(e:any) => {
								 handleItemClick(e.target.textContent);
							 }}
							 className={styles.item}
					  >
						  {item.value}
					  </div>
				 ))}

			 </div>
		 </div>
	);
};

