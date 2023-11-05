import {FC, useEffect, useState} from 'react';
import x from '../../../assets/image/hresik.png';
import {
	addColorsId,
	addFlowersId,
	clearFilters,
	removeColorId,
	removeFlowerId,
	removeMinMaxValues,
	setSortByNewest,
	setSortByPriceHighToLow,
	setSortByPriceLowToHigh,
} from '../../../store/filtration/filtration.slice';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {useGetColorsQuery, useGetFlowersQuery} from '../../../services/bouquete-api/bouquete-api-service';
import styles from '../styles.module.scss'
import {DropDown} from '../../../components/DropDown';
import {DropDownPrice} from '../../../components/DropDownPrice';
import {DropDownSorting} from '../../../components/DropDownSorting';


export const Filters: FC = () => {
	const dispatch = useAppDispatch()
	const [flower, setFlower] = useState<string>("flower");
	const [color, setColor] = useState<string>("color");
	const [sortingName, setSortingName] = useState<string>("sorting");

	const {data:colors,isLoading:flowersLoading}=useGetColorsQuery("")
	const {data:flowers,isLoading:colorsLoading}=useGetFlowersQuery("")
	const {flowerIds,colorIds,maxPrice,minPrice}=useAppSelector(state => state.filtration.filters)

	const maxMinValues= [{item:`${minPrice}-${maxPrice}`,menu:"minMax",id:42}]

	const sorting= [
		{item:"sortByNewest",id:1,name:"New",sort:false},
		{item:"sortByPriceHighToLow",id:2,name:"To Height Price",sort:false},
		{item:"sortByPriceLowToHigh",id:3,name:"To Low Price",sort:false},
	]


	useEffect(()=>{},[maxMinValues])

	const addFlower = (item:{item:string,menu:string,id:number})=>{
		dispatch(addFlowersId(item))
	}
	const addColor = (item:{item:string,menu:string,id:number})=>{
		dispatch(addColorsId(item))
	}

	const addSorting = (value:{item:string,name:string,id:number,sort:boolean})=>{
		if (value.item==="sortByNewest"){
			value.sort = true
		dispatch(setSortByNewest(true))
			dispatch(setSortByPriceHighToLow(false))
			dispatch(setSortByPriceLowToHigh(false))
		}else if (value.item==="sortByPriceHighToLow"){
			value.sort = true
			dispatch(setSortByPriceHighToLow(true))
			dispatch(setSortByPriceLowToHigh(false))
			dispatch(setSortByNewest(false))
		}else if (value.item==="sortByPriceLowToHigh"){
			value.sort = true
			dispatch(setSortByPriceLowToHigh(true))
			dispatch(setSortByPriceHighToLow(false))
			dispatch(setSortByNewest(false))
		}
	}

	const removeHandler = (item:{item:string,menu:string,id:number})=>{
		if (item.menu==="flower"){
			dispatch(removeFlowerId(item))
		}else if (item.menu ==="color") {
			dispatch(removeColorId(item))
		}else if (item.menu === "minMax"){
			dispatch(removeMinMaxValues())
		}
  }


	const resetFilters = () => {
		dispatch(clearFilters([]))
		setFlower('flower');
		setColor('color');
	}


	return (
		 <div className={styles.container}>
			 {flowersLoading || colorsLoading ?
				  <div>Loading...</div>
				  :
				  <div className={styles.catalog__dropDown}>
				 <div className={styles.catalog__dropDown_items}>
					 <DropDown
						  items={flowers}
						  toggleFilter={addFlower}
						  setName={setFlower}
						  name={flower}/>
					 <DropDown
						  items={colors}
						  toggleFilter={addColor}
						  setName={setColor}
						  name={color}/>
					 <DropDownPrice
						  min={0}
						  max={9999}
					 />
				 </div>
				 <DropDownSorting
					  items={sorting}
					  toggleFilter={addSorting}
					  setName={setSortingName}
					  name={sortingName}/>
			 </div>}

			 <div className={styles.catalog__selectedItemsContainer}>
				 {[...flowerIds,...colorIds,...maxMinValues].map((item) => (
					  item.menu === "minMax"?
									 minPrice> 0 || maxPrice < 9999 ? 	   <div className={styles.catalog__selectedItem} key={item.item} onClick={()=>removeHandler(item)}>
											 {item.item} <span><img src={x} alt=""/></span>
										 </div>: ""
						   :
						   <div className={styles.catalog__selectedItem} key={item.item} onClick={()=>removeHandler(item)}>
						  {item.item} <span><img src={x} alt=""/></span>
					  </div>
				 ))}
				 {[...flowerIds,...colorIds].length > 0 && <button className={styles.catalog__resetBtn} onClick={resetFilters}>clear filters</button>}
			 </div>
		 </div>
	);
};

