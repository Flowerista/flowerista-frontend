import {FC, FormHTMLAttributes, SetStateAction, useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {BsSearch} from 'react-icons/bs';
import {useSearchBouquetesQuery} from '../../../services/bouquete-api/bouquete-api-service';
import {useDebounce} from '../../../hooks/useDebounce';
import {Link} from 'react-router-dom';
import {DataRoute} from '../../../data/routes';
import classNames from 'classnames';
import {useTranslation} from 'react-i18next';

interface SearchProps extends FormHTMLAttributes<HTMLFormElement> {
	type: 'header' | 'menu'
}


export const Search: FC<SearchProps> = ({className, type}) => {
	const {t} = useTranslation()
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500)
	const {data} = useSearchBouquetesQuery(debouncedSearch)

	useEffect(() => {
		if (type === 'menu') {
			setIsExpanded(true)
		}
	}, [])


	const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
		setSearchTerm(e.target.value);
	}

	const toggleSearch = () => {
		if (type === 'header') {
			setIsExpanded(!isExpanded);
		}
	};

	return (
		 <form className={styles.search}>
			 <div className={classNames(styles.searchBox, {[styles.expanded]: isExpanded}, styles[type], className)}>
				 <BsSearch className={styles.searchIcon} onClick={toggleSearch} style={{fontSize: '24px', cursor: 'pointer'}}/>
				 <input
						className={styles.searchInput}
						type="text"
						placeholder={`${t('header.search')}`}
						value={searchTerm}
						onChange={handleInputChange}
				 />
			 </div>
			 {data && data.length > 0 ? (
					<ul className={classNames(styles.searchResult, styles[type])} style={{display: !isExpanded ? 'none' : ''}}>
						{data.map((result) => (
							 <>
								 <li key={result.id}>

									 <Link to={`${DataRoute.Product}/${result.id}`}>
										 <img src={result.imageUrls?.['1']} alt=""/>
										 <div className={styles.searchResult__content}>
											 <span>{result.name}</span>
											 <div>
												 {result.discountPrice ? <p className={styles.priceDiscount}>{result.defaultPrice} UAH</p> : ''}
												 <p className={styles.defaultPrice}>{result.discountPrice ? result.discountPrice : result.defaultPrice} UAH</p>
											 </div>
										 </div>
									 </Link>
								 </li>
								 <div className={styles.full}></div>
							 </>
						))}
					</ul>
			 ) : null}
		 </form>
	);
};

