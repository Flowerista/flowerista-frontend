import {
  FC,
  FormHTMLAttributes,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import styles from './styles.module.scss';
import { BsSearch } from 'react-icons/bs';
import { useDebounce } from '../../../shared/lib/hooks/useDebounce.tsx';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSearchBouquetes } from '../model/api/searchBouquetes/searchBouquetes.ts';
import { getRouteProductId } from '../../../shared/consts/router.ts';

interface SearchProps extends FormHTMLAttributes<HTMLFormElement> {
  type: 'header' | 'menu';
}

export const Search: FC<SearchProps> = ({ className, type }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const ref = useRef<HTMLDivElement | null>(null);
  const { data } = useSearchBouquetes(debouncedSearch, {
    skip: debouncedSearch === ''
  });

  useEffect(() => {
    if (type === 'menu') {
      setIsExpanded(true);
    }
  }, []);

  useEffect(() => {
    if (type === 'header') {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
  });

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  const toggleSearch = () => {
    if (type === 'header') {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <form className={styles.search}>
      <div
        ref={ref}
        className={classNames(
          styles.searchBox,
          { [styles.expanded]: isExpanded },
          styles[type],
          className
        )}
      >
        <BsSearch
          className={styles.searchIcon}
          onClick={toggleSearch}
          style={{ fontSize: '24px', cursor: 'pointer' }}
        />
        <input
          className={styles.searchInput}
          type="text"
          placeholder={`${t('header.search')}`}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      {data && data.length > 0 ? (
        <ul
          className={classNames(styles.searchResult, styles[type])}
          style={{ display: !isExpanded ? 'none' : '' }}
        >
          {data.map((result) => (
            <>
              <li key={result.id}>
                <Link to={getRouteProductId(String(result.id))}>
                  <img src={result.imageUrls?.['1']} alt="" />
                  <div className={styles.searchResult__content}>
                    <span>{result.name}</span>
                    <div>
                      {result.discountPrice ? (
                        <p className={styles.priceDiscount}>
                          {result.defaultPrice} USD
                        </p>
                      ) : (
                        ''
                      )}
                      <p className={styles.defaultPrice}>
                        {result.discountPrice
                          ? result.discountPrice
                          : result.defaultPrice}{' '}
                        USD
                      </p>
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
