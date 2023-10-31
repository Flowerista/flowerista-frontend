import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {DropDown} from '../../components/DropDown';
import x from '../../assets/image/hresik.png'
import {useGetColorsQuery, useGetFlowersQuery} from '../../services/filters-api/filters-api-service';

export interface ICatalogPage {
}

export const CatalogPage: FC<ICatalogPage> = () => {
	const {data,isLoading,error}=useGetFlowersQuery("")
	// const {data:allData}=useGetAllDtaQuery("")
	// console.log(allData)
	const {data:colors,isLoading:IsLoadingColors,error:err}=useGetColorsQuery("")
	const [flower, setFlower] = useState<string>("flower");
	const [color, setColor] = useState<string>("color");

	// const colors = [
	// 	{ id: 1, name: "dark" },
	// 	{ id: 2, name: "blue" },
	// 	{ id: 3, name: "purple" },
	// 	{ id: 4, name: "red" },
	// 	{ id: 5, name: "white" }
	// ];

	const [selectedItems, setSelectedItems] = useState<{ item: string; menu: string }[]>([]);

	const toggleFilter = ({ item, menu }: { item: string; menu: string }) => {
		if (selectedItems.some((selectedItem) => selectedItem.item === item && selectedItem.menu === menu)) {
			const newSelectedItems = selectedItems.filter(
				 (selectedItem) => selectedItem.item !== item || selectedItem.menu !== menu
			);
			setSelectedItems(newSelectedItems);
		} else {
			setSelectedItems([...selectedItems, { item, menu }]);
		}

		if (menu === "flower") {
			setFlower('flower');
		} else {
			setColor('color');
		}
	};


	const resetFilters = () => {
		setSelectedItems([]);
		setFlower('flower');
		setColor('color');
	}

	if (error){
		return <div>Something Was Wrong!</div>
	}

	return (
		 <div className={styles.catalog}>
			 <div className={styles.catalog__name}>Home | Catalog</div>
          <div className={styles.catalog__dropDown}>
				 <div className={styles.catalog__dropDown_items}>
					 <DropDown
						  items={data}
						  toggleFilter={toggleFilter}
						  setName={setFlower}
						  name={flower}/>
					 <DropDown
						  items={colors}
						  toggleFilter={toggleFilter}
						  setName={setColor}
						  name={color}/>
				 </div>
			 </div>

			 <div className={styles.catalog__selectedItemsContainer}>
				 {selectedItems.map((item) => (
					  <div className={styles.catalog__selectedItem} key={item.item} onClick={() => toggleFilter({item:item.item,menu:item.menu})}>
            {item.item} <span><img src={x} alt=""/></span>
          </div>
				 ))}
			 {selectedItems.length > 0 && <button className={styles.catalog__resetBtn} onClick={resetFilters}>clear filters</button>}
			 </div>
		 </div>
	);
};

