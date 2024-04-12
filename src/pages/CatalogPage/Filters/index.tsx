import {FC, useEffect, useRef, useState} from 'react';
import x from '../../../assets/image/hresik.png';
import {
	addColorsId,
	addFlowersId,
	clearFilters,
	removeColorId,
	removeFlowerId,
	removeMinMaxValues,
	setMaxNumber,
	setMaxValue,
	setMiNumber,
	setMinValue,
	setSortByNewest,
	setSortByPriceHighToLow,
	setSortByPriceLowToHigh,
} from '../../../store/filtration/filtration.slice';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {
	useGetColorsQuery,
	useGetFlowersQuery,
	useGetRangePriceQuery,
} from '../../../services/bouquete-api/bouquete-api-service';
import styles from '../styles.module.scss'
import {DropDown} from '../../../components/DropDown';
import {DropDownPrice} from '../../../components/DropDownPrice';
import {DropDownSorting} from '../../../components/DropDownSorting';
import {useTranslation} from 'react-i18next';
import {Loader} from '../../../components/shared/Loading';
import {MobileFilters} from '../MobileFilters';


export const Filters: FC = () => {
	const {t} = useTranslation()
	const dispatch = useAppDispatch()
	const {data: priceRange} = useGetRangePriceQuery('')
	const [sortingName, setSortingName] = useState<string>('new');

	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const minInputRef = useRef<HTMLInputElement>(null);
	const maxInputRef = useRef<HTMLInputElement>(null);

	const {data: colors, isLoading: flowersLoading} = useGetColorsQuery('')
	const {data: flowers, isLoading: colorsLoading} = useGetFlowersQuery('')
	const {flowerIds, colorIds, maxPrice, minPrice, min, max} = useAppSelector(state => state.filtration.filters)

	const maxMinValues = [{item: `${minPrice}-${maxPrice}`, menu: 'minMax', id: 42}]

	const [sorting, setSorting] = useState([
		{item: 'sortByNewest', id: 1, name: 'New', sort: false},
		{item: 'sortByPriceHighToLow', id: 2, name: 'High to Low Price', sort: false},
		{item: 'sortByPriceLowToHigh', id: 3, name: 'Low to High Price', sort: false},
	])


	useEffect(() => {
	}, [maxMinValues])


	useEffect(() => {
		if (priceRange) {
			dispatch(setMiNumber(priceRange.minPrice))
			dispatch(setMaxNumber(priceRange.maxPrice))
			dispatch(setMinValue(priceRange.minPrice))
			dispatch(setMaxValue(priceRange.maxPrice))
		}
	}, [priceRange])

	const addFlower = (item: { item: string, menu: string, id: number }) => {
		dispatch(addFlowersId(item))
	}
	const addColor = (item: { item: string, menu: string, id: number }) => {
		dispatch(addColorsId(item))
	}

	const addSorting = (value: { item: string, name: string, id: number, sort: boolean }) => {

		const updatedSorting = sorting.map(option => ({
			...option,
			sort: option.item === value.item,
		}));

		setSorting(updatedSorting);

		if (value.item === 'sortByNewest') {
			dispatch(setSortByNewest(true))
			dispatch(setSortByPriceHighToLow(false))
			dispatch(setSortByPriceLowToHigh(false))
		} else if (value.item === 'sortByPriceHighToLow') {
			dispatch(setSortByPriceHighToLow(true))
			dispatch(setSortByPriceLowToHigh(false))
			dispatch(setSortByNewest(false))
		} else if (value.item === 'sortByPriceLowToHigh') {
			dispatch(setSortByPriceLowToHigh(true))
			dispatch(setSortByPriceHighToLow(false))
			dispatch(setSortByNewest(false))
		}
	}

	const removeHandler = (item: { item: string, menu: string, id: number }) => {
		if (item.menu === 'flowers' || item.menu === 'квіти') {
			dispatch(removeFlowerId(item))
		} else if (item.menu === 'colors' || item.menu === 'кольори') {
			dispatch(removeColorId(item))
		} else if (item.menu === 'minMax') {
			dispatch(removeMinMaxValues())
			if (minInputRef && minInputRef.current) {
				minInputRef.current.value = '';
			}
			if (maxInputRef && maxInputRef.current) {
				maxInputRef.current.value = '';
			}
		}
		const updatedSelectedItems = selectedItems.filter(selectedItem => selectedItem !== `${item.menu}_${item.id}`);
		setSelectedItems(updatedSelectedItems);
	}

	const resetFilters = () => {
		setSelectedItems([])
		dispatch(clearFilters([]))
		dispatch(removeMinMaxValues())
		dispatch(setSortByPriceLowToHigh(false))
		dispatch(setSortByPriceHighToLow(false))
		dispatch(setSortByNewest(false))
		if (minInputRef && minInputRef.current) {
			minInputRef.current.value = '';
		}
		if (maxInputRef && maxInputRef.current) {
			maxInputRef.current.value = '';
		}
	}

	useEffect(() => {
		return () => {
			resetFilters()
		};
	}, []);


	return (
		 <div className={styles.container}>
			 {flowersLoading || colorsLoading ?
					<Loader/>
					:
					<div className={styles.catalog__dropDown}>
						<div className={styles.catalog__dropDown_items}>
							<DropDown
								 setSelectedItems={setSelectedItems}
								 selectedItems={selectedItems}
								 removeHandler={removeHandler}
								 items={flowers}
								 toggleFilter={addFlower}
								 name={`${t('catalog.filters.flowers')}`}/>
							<DropDown
								 setSelectedItems={setSelectedItems}
								 selectedItems={selectedItems}
								 removeHandler={removeHandler}
								 items={colors}
								 toggleFilter={addColor}
								 name={`${t('catalog.filters.colors')}`}/>
							<DropDownPrice
								 min={min}
								 max={max}
								 minInputRef={minInputRef}
								 maxInputRef={maxInputRef}
							/>
						</div>
						<DropDownSorting
							 items={sorting}
							 toggleFilter={addSorting}
							 setName={setSortingName}
							 name={sortingName}/>
					</div>}

			 {flowersLoading || colorsLoading ?
					null
					:
					<MobileFilters
						 setSelectedItems={setSelectedItems}
						 selectedItems={selectedItems}
						 removeHandler={removeHandler}
						 addFlowerFilter={addFlower}
						 addColorFilter={addColor}
						 min={min}
						 max={max}
						 minInputRef={minInputRef}
						 maxInputRef={maxInputRef}
					/>}

			 <div className={styles.catalog__selectedItemsContainer}>
				 {[...flowerIds, ...colorIds, ...maxMinValues].map((item) => (
						item.menu === 'minMax' ?
							 minPrice > min || maxPrice < max ?
									<div className={styles.catalog__selectedItem} key={item.item} onClick={() => removeHandler(item)}>
										{item.item} <span><img src={x} alt=""/></span>
									</div> : ''
							 :
							 <div className={styles.catalog__selectedItem} key={item.item} onClick={() => removeHandler(item)}>
								 {item.item} <span><img src={x} alt=""/></span>
							 </div>
				 ))}
				 {[...flowerIds, ...colorIds].length > 0 &&
						<button className={styles.catalog__resetBtn} onClick={resetFilters}>{t('catalog.filters.clear')}</button>}
			 </div>
		 </div>
	);
};

