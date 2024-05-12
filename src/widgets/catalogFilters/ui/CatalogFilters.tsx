import { FC, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useGetRangePrice } from '../model/api/getRangePrice/getRangePrice.ts';
import { useFiltrationActions } from '../../../pages/catalogPage/model/slice/filtration.slice.ts';
import { useGetColors } from '../model/api/getColors/getColors.ts';
import { useGetFlowers } from '../model/api/getFlowers/getFlowers.ts';
import { Loader } from '../../../shared/ui/loading';
import { CatalogDropDownPrice } from '../../../features/catalogDropDownPrice';
import { CatalogDropDownSorting } from '../../../features/catalogDropDownSorting';
import { CatalogSelectFilter } from '../../../features/catalogSelectFilter';
import { CatalogMobileFilters } from '../../../features/catalogMobileFilters';
import { CatalogSelectedItems } from '../../../features/selectedItems';
import {
  useColorsIds,
  useFlowersIds,
  useMax,
  useMin
} from '../../../pages/catalogPage/model/selectors/getCatalog.ts';

export interface ItemInterface {
  item: string;
  menu: string;
  id: number;
}

export const CatalogFilters: FC = () => {
  const { t } = useTranslation();
  const {
    setMaxNumber,
    setMaxValue,
    setMinValue,
    setMiNumber,
    removeFlowerId,
    removeColorId,
    addFlowersId,
    addColorsId
  } = useFiltrationActions();

  const { data: priceRange } = useGetRangePrice();

  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);
  const minInputRefSmall = useRef<HTMLInputElement>(null);
  const maxInputRefSmall = useRef<HTMLInputElement>(null);

  const { data: colors, isLoading: colorsLoading } = useGetColors();
  const { data: flowers, isLoading: flowersLoading } = useGetFlowers();
  const flowerIds = useFlowersIds();
  const colorIds = useColorsIds();
  const min = useMin();
  const max = useMax();

  useEffect(() => {
    if (priceRange) {
      setMiNumber(priceRange.minPrice);
      setMaxNumber(priceRange.maxPrice);
      setMinValue(priceRange.minPrice);
      setMaxValue(priceRange.maxPrice);
    }
  }, [priceRange, setMaxNumber, setMaxValue, setMiNumber, setMinValue]);

  const resetPrice = () => {
    if (minInputRef && minInputRef.current) {
      minInputRef.current.value = '';
    }
    if (maxInputRef && maxInputRef.current) {
      maxInputRef.current.value = '';
    }

    if (minInputRefSmall && minInputRefSmall.current) {
      minInputRefSmall.current.value = '';
    }
    if (maxInputRefSmall && maxInputRefSmall.current) {
      maxInputRefSmall.current.value = '';
    }
  };

  return (
    <div className={styles.container}>
      {flowersLoading || colorsLoading ? (
        <Loader />
      ) : (
        <div className={styles.catalog__dropDown}>
          <div className={styles.catalog__dropDown__items}>
            <CatalogSelectFilter
              name={`${t('catalog.filters.flowers')}`}
              items={flowers || []}
              addItem={addFlowersId}
              removeItem={removeFlowerId}
              array={flowerIds}
            />
            <CatalogSelectFilter
              name={`${t('catalog.filters.colors')}`}
              items={colors || []}
              addItem={addColorsId}
              removeItem={removeColorId}
              array={colorIds}
            />
            <CatalogDropDownPrice
              min={min}
              max={max}
              minInputRef={minInputRef}
              maxInputRef={maxInputRef}
            />
          </div>
          <CatalogDropDownSorting />
        </div>
      )}

      {flowersLoading || colorsLoading ? null : (
        <CatalogMobileFilters
          min={min}
          max={max}
          minInputRef={minInputRefSmall}
          maxInputRef={maxInputRefSmall}
        />
      )}

      <CatalogSelectedItems resetPrice={resetPrice} />
    </div>
  );
};
