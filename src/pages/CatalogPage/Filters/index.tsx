import { FC, useEffect, useRef } from 'react';
import x from '../../../assets/image/hresik.png';
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
    removeMinMaxValues,
    removeFlowerId,
    removeColorId,
    addFlowersId,
    clearFilters,
    addColorsId,
    removeHandler,
    resetSorting
  } = useFiltrationActions();

  const { data: priceRange } = useGetRangePrice();

  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);
  const minInputRefSmall = useRef<HTMLInputElement>(null);
  const maxInputRefSmall = useRef<HTMLInputElement>(null);

  const { data: colors, isLoading: colorsLoading } = useGetColors();
  const { data: flowers, isLoading: flowersLoading } = useGetFlowers();
  const { flowerIds, colorIds, maxPrice, minPrice, min, max } = useAppSelector(
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

  const resetFilters = () => {
    clearFilters([]);
    removeMinMaxValues();
    resetSorting();
    resetPrice();
  };

  useEffect(() => {
    return () => {
      resetFilters();
    };
  }, []);
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
            />
            <DropDownFilter
              name={`${t('catalog.filters.colors')}`}
              items={colors || []}
              addItem={addColorsId}
              removeItem={removeColorId}
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

      <div className={styles.catalog__selectedItemsContainer}>
        {[
          ...flowerIds,
          ...colorIds,
          { item: `${minPrice}-${maxPrice}`, menu: 'minMax', id: 42 }
        ].map((item) =>
          item.menu === 'minMax' ? (
            minPrice > min || maxPrice < max ? (
              <div
                className={styles.catalog__selectedItem}
                key={item.item}
                onClick={() => {
                  removeHandler(item);
                  resetPrice();
                }}
              >
                {item.item}{' '}
                <span>
                  <img src={x} alt="" />
                </span>
              </div>
            ) : (
              ''
            )
          ) : (
            <div
              className={styles.catalog__selectedItem}
              key={item.item}
              onClick={() => {
                removeHandler(item);
                resetPrice();
              }}
            >
              {item.item}{' '}
              <span>
                <img src={x} alt="" />
              </span>
            </div>
          )
        )}
        {[...flowerIds, ...colorIds].length > 0 && (
          <button className={styles.catalog__resetBtn} onClick={resetFilters}>
            {t('catalog.filters.clear')}
          </button>
        )}
      </div>
    </div>
  );
};
