import { FC, useEffect, useRef } from 'react';
import { useAppSelector } from '../../../store/store';
import styles from '../styles.module.scss';
import { DropDownSorting } from '../../../components/DropDownSorting';
import { useTranslation } from 'react-i18next';
import { Loader } from '../../../components/shared/Loading';
import { MobileFilters } from '../MobileFilters';
import { useGetColors } from '../../../services/bouquete-api/getColors/getColors';
import { useGetFlowers } from '../../../services/bouquete-api/getFlowers/getFlowers';
import { useGetRangePrice } from '../../../services/bouquete-api/getRangePrice/getRangePrice';
import { useFiltrationActions } from '../../../store/filtration/filtration.slice.ts';
import { DropDownFilter } from '../../../components/DropDownFilter';
import DropDownPrice from '../../../components/DropDownPrice';
import { SelectedItems } from './SelectedItems';

export interface ItemInterface {
  item: string;
  menu: string;
  id: number;
}

export const Filters: FC = () => {
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
  const { flowerIds, colorIds, min, max } = useAppSelector(
    (state) => state.filtration.filters
  );

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
            <DropDownFilter
              name={`${t('catalog.filters.flowers')}`}
              items={flowers || []}
              addItem={addFlowersId}
              removeItem={removeFlowerId}
              array={flowerIds}
            />
            <DropDownFilter
              name={`${t('catalog.filters.colors')}`}
              items={colors || []}
              addItem={addColorsId}
              removeItem={removeColorId}
              array={colorIds}
            />
            <DropDownPrice
              min={min}
              max={max}
              minInputRef={minInputRef}
              maxInputRef={maxInputRef}
            />
          </div>
          <DropDownSorting />
        </div>
      )}

      {flowersLoading || colorsLoading ? null : (
        <MobileFilters
          min={min}
          max={max}
          minInputRef={minInputRefSmall}
          maxInputRef={maxInputRefSmall}
        />
      )}

      <SelectedItems resetPrice={resetPrice} />
    </div>
  );
};
