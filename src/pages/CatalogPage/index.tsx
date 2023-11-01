import {FC, useState} from 'react';
import styles from './styles.module.scss';
import {DropDown} from '../../components/DropDown';
import { Pagination } from '../../components/Pagination/Pagination';
import x from '../../assets/image/hresik.png'
import {
	useGetBouqueteQuery,
	useGetColorsQuery,
	useGetFlowersQuery,
} from '../../services/filters-api/filters-api-service';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {setFlowerIds} from '../../store/filtration/filtration.slice';

export interface ICatalogPage {
}

export const CatalogPage: FC<ICatalogPage> = () => {
	const {data,isLoading,error}=useGetFlowersQuery("")
const {flowerIds}=useAppSelector(state => state.filtration)

	const {data:allData}=useGetBouqueteQuery({flowersIdS:flowerIds})
	console.log(allData)

	const {data:colors,isLoading:IsLoadingColors,error:err}=useGetColorsQuery("")
	const [flower, setFlower] = useState<string>("flower");
	const [color, setColor] = useState<string>("color");

	const dispatch = useAppDispatch()


	const [selectedItems, setSelectedItems] = useState<{ item: string; menu: string,id:number }[]>([]);

	const toggleFilter = ({ item, menu ,id}: { item: string; menu: string ,id:number}) => {
		if (selectedItems.some((selectedItem) => selectedItem.item === item && selectedItem.menu === menu)) {
			const newSelectedItems = selectedItems.filter(
				 (selectedItem) => selectedItem.item !== item || selectedItem.menu !== menu
			);
			setSelectedItems(newSelectedItems);
		} else {
			setSelectedItems([...selectedItems, { item, menu,id }]);
			dispatch(setFlowerIds(id))
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
			 <Pagination />

			 <div className={styles.catalog__selectedItemsContainer}>
				 {selectedItems.map((item) => (
					  <div className={styles.catalog__selectedItem} key={item.item} onClick={() => toggleFilter({item:item.item,menu:item.menu,id:item.id})}>
            {item.item} <span><img src={x} alt=""/></span>
          </div>
				 ))}
			 {selectedItems.length > 0 && <button className={styles.catalog__resetBtn} onClick={resetFilters}>clear filters</button>}
			 </div>
		 </div>
	);
};

