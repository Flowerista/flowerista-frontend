import {FC, SetStateAction, useState} from 'react';
import styles from './styles.module.scss';
import {BsSearch} from 'react-icons/bs';
import {useSearchBouquetesQuery} from '../../../services/bouquete-api/bouquete-api-service';
import {useDebounce} from '../../../hooks/useDebounce';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';


export const Search: FC = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm,500)
	const { data} = useSearchBouquetesQuery(debouncedSearch)
	
	const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
		setSearchTerm(e.target.value);
	}

	const toggleSearch = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<form className={styles.search}>
			<div className={`${styles.searchBox} ${isExpanded ? `${styles.expanded}` : ''}`}>
				<BsSearch  className={styles.searchIcon} onClick={toggleSearch} style={{fontSize:"24px",cursor:"pointer"}}/>
				<input
					className={styles.searchInput}
					type="text"
					placeholder={"Flower"}
					value={searchTerm}
					onChange={handleInputChange}
				/>
			</div>
			{data && data.length >0 ? (
				<ul className={styles.searchResult} style={{display : !isExpanded ? "none" : ""}}>
					{data.map((result) => (
						<>
							<li key={result.id}>

								<Link to={`${DataRoute.Product}/${result.id}`}>
									<img src={result.imageUrls?.['1']} alt=""/>
									<div className={styles.searchResult__content}>
										<span>{result.name}</span>
										<div>
											{result.discountPrice ? <p className={styles.priceDiscount}>{result.defaultPrice} UAH</p> : ""}
											<p className={styles.defaultPrice}>{result.discountPrice ? result.discountPrice : result.defaultPrice} UAH</p>
										</div>
									</div>
								</Link>
							</li>
							<div className={styles.full}></div>
						</>
					))}
				</ul>
			): null}
		</form>
	);
};

