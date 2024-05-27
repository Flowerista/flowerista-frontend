import { FC, memo, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { Pagination } from '../../../widgets/pagination';
import { SkeletonCard } from '../../../shared/ui/SkeletonCard';
import { useDebounce } from '../../../shared/lib/hooks/useDebounce.tsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetAllFlowers } from '../model/api/getAllFlowers/getAllFlowers.ts';
import { getRouteHome } from '../../../shared/consts/router.ts';
import { Card } from '../../../features/card';
import { InterfaceFetchAllFlowers } from '../model/types/flowers.ts';
import { CatalogFilters } from '../../../widgets/catalogFilters';
import {
  useColorsIds,
  useFlowersIds,
  useMax,
  useMaxPrice,
  useMin,
  useMinPrice,
  usePage,
  useSorting
} from '../model/selectors/getCatalog.ts';

const CatalogPage: FC = () => {
  const { t } = useTranslation();
  const minPrice = useMinPrice();
  const maxPrice = useMaxPrice();
  const flowerIds = useFlowersIds();
  const colorIds = useColorsIds();
  const page = usePage();
  const min = useMin();
  const max = useMax();
  const sorting = useSorting();

  const debouncedMinPrice = useDebounce<number>(minPrice, 500);
  const debouncedMaxPrice = useDebounce<number>(maxPrice, 500);

  const dataFetch: InterfaceFetchAllFlowers = useMemo(() => {
    return {
      flowerIds: flowerIds?.map((item) => item.id).join(',') ?? '',
      colorIds: colorIds?.map((item) => item.id).join(',') ?? '',
      minPrice: debouncedMinPrice,
      maxPrice: debouncedMaxPrice,
      sortByNewest: Boolean(
        sorting?.find((sort) => sort.sort && sort.item === 'sortByNewest')?.sort
      ),
      sortByPriceHighToLow: Boolean(
        sorting?.find(
          (sort) => sort.sort && sort.item === 'sortByPriceHighToLow'
        )?.sort
      ),
      sortByPriceLowToHigh: Boolean(
        sorting?.find(
          (sort) => sort.sort && sort.item === 'sortByPriceLowToHigh'
        )?.sort
      ),
      page: page,
      min: min,
      max: max
    };
  }, [
    flowerIds,
    colorIds,
    debouncedMinPrice,
    debouncedMaxPrice,
    sorting,
    page,
    min,
    max
  ]);

  const [dataState, setDataState] = useState(dataFetch);

  useEffect(() => {
    setDataState(dataFetch);
  }, [debouncedMaxPrice, debouncedMinPrice, dataFetch]);

  const { data, error } = useGetAllFlowers(dataState, {
    refetchOnFocus: true
  });

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setDataState((state) => ({ ...state, page: newPage }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return <h1>Something Was Wrong!</h1>;
  }

  return (
    <div data-testid="CatalogPage" className={styles.catalog}>
      <div className={styles.catalog__name}>
        <Link to={getRouteHome()}>{t('catalog.link')}</Link>
        {t('catalog.link2')}
      </div>
      <CatalogFilters />
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
export default memo(CatalogPage);
