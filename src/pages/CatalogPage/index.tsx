import {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {Pagination} from '../../components/Pagination/Pagination';
import {Filters} from './Filters';
import {useGetAllFlowersQuery} from '../../services/bouquete-api/bouquete-api-service';
import {IFetchAllFlowers} from '../../interface/flower';
import {Card} from '../../components/Card/Card';
import {SkeletonCard} from '../../components/Skeletons/SkeletonCard/SkeletonCard';
import {useAppSelector} from '../../store/store';
import {useDebounce} from '../../hooks/useDebounce';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../data/routes';

export interface ICatalogPage {
}

export const CatalogPage: FC<ICatalogPage> = () => {
	const {filters}=useAppSelector(state => state.filtration)
	const debouncedMinPrice = useDebounce<number>(filters.minPrice, 500)
	const debouncedMaxPrice = useDebounce<number>(filters.maxPrice, 500)

	const dataFetch: IFetchAllFlowers = {
		flowerIds: filters.flowerIds.map((item) => item.id).join(","),
		colorIds: filters.colorIds.map((item) => item.id).join(","),
		minPrice: debouncedMinPrice,
		maxPrice: debouncedMaxPrice,
		sortByNewest: filters.sortByNewest,
		sortByPriceHighToLow:  filters.sortByPriceHighToLow,
		sortByPriceLowToHigh: filters.sortByPriceLowToHigh,
		page: filters.page
	}

	useEffect(() => {
		setDataState(dataFetch);
	}, [filters,debouncedMaxPrice,debouncedMinPrice]);


	const [dataState, setDataState] = useState(dataFetch)

	const { data, error } = useGetAllFlowersQuery(dataState)

	const handlePageClick = (event: any) => {
		const newPage = event.selected + 1
		setDataState((state) => ({...state, page: newPage}))
	}

	if (error) {
		return <h1>Something Was Wrong!</h1>
	}

	return (
		 <div className={styles.catalog}>
			 <div className={styles.catalog__name}><Link to={DataRoute.Home} >Home</Link> | Catalog</div>
			 <Filters/>
			 {data &&
				  <div className={styles.flower__wrapper}>
					  {data ? data.content.map(item => (
							 <Card
								  id={item.id}
								  name={item.name}
								  discount={item.discount}
								  defaultPrice={item.defaultPrice}
								  discountPrice={item.discountPrice}
								  img={item.imageUrls?.['1']}
								  key={item.id}
							 />
					  )) :			 <div style={{display: 'flex', marginTop: '50px', flexWrap: 'wrap', rowGap: '100px', marginBottom: '120px'}} >
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
						  <SkeletonCard/>
					  </div>}
				  </div>}
			 <Pagination data={data} handlePageClick={handlePageClick}/>
		 </div>
	);
};

