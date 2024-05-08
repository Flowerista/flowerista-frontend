import { FC, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { Pagination } from '../../components/Pagination/Pagination';
import { Filters } from './Filters';
import { IFetchAllFlowers } from '../../interface/flower';
import { Card } from '../../components/Card/Card';
import { SkeletonCard } from '../../components/Skeletons/SkeletonCard/SkeletonCard';
import { useAppSelector } from '../../store/store';
import { useDebounce } from '../../hooks/useDebounce';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetAllFlowers } from '../../services/bouquete-api/getAllFlowers/getAllFlowers';
import { getRouteHome } from '../../app/routerConfig.tsx';

export interface ICatalogPage {}

const CatalogPage: FC<ICatalogPage> = () => {
  const { t } = useTranslation();
  const { filters, sorting } = useAppSelector((state) => state.filtration);
  const debouncedMinPrice = useDebounce<number>(filters.minPrice, 500);
  const debouncedMaxPrice = useDebounce<number>(filters.maxPrice, 500);
  const dataFetch: IFetchAllFlowers = useMemo(() => {
    return {
      flowerIds: filters.flowerIds.map((item) => item.id).join(',') ?? '',
      colorIds: filters.colorIds.map((item) => item.id).join(',') ?? '',
      minPrice: debouncedMinPrice,
      maxPrice: debouncedMaxPrice,
      sortByNewest: Boolean(
        sorting.find((sort) => sort.sort && sort.item === 'sortByNewest')?.sort
      ),
      sortByPriceHighToLow: Boolean(
        sorting.find(
          (sort) => sort.sort && sort.item === 'sortByPriceHighToLow'
        )?.sort
      ),
      sortByPriceLowToHigh: Boolean(
        sorting.find(
          (sort) => sort.sort && sort.item === 'sortByPriceLowToHigh'
        )?.sort
      ),
      page: filters.page,
      min: filters.min,
      max: filters.max
    };
  }, [filters, sorting, debouncedMinPrice, debouncedMaxPrice]);
  const [dataState, setDataState] = useState(dataFetch);

  useEffect(() => {
    setDataState(dataFetch);
  }, [debouncedMaxPrice, debouncedMinPrice, dataFetch]);

  const { data, error } = useGetAllFlowers(dataState);

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setDataState((state) => ({ ...state, page: newPage }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return <h1>Something Was Wrong!</h1>;
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__name}>
        <Link to={getRouteHome()}>{t('catalog.link')}</Link>
        {t('catalog.link2')}
      </div>
      <Filters />
      {data ? (
        <div className={styles.flower__wrapper}>
          {data &&
            data.content.map((item) => (
              <Card
                id={item.id}
                name={item.name}
                discount={item.discount}
                defaultPrice={item.defaultPrice}
                discountPrice={item.discountPrice}
                imageUrls={item.imageUrls}
                key={item.id}
                sizes={item.sizes}
              />
            ))}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            marginTop: '50px',
            flexWrap: 'wrap',
            rowGap: '100px',
            marginBottom: '120px'
          }}
        >
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      {data && <Pagination data={data} handlePageClick={handlePageClick} />}
    </div>
  );
};

export default CatalogPage;
