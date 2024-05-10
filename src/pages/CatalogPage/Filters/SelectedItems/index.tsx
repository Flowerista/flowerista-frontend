import { FC, useCallback, useEffect } from 'react';
import styles from '../../styles.module.scss';
import x from '../../../../assets/image/hresik.png';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store/store.ts';
import { useFiltrationActions } from '../../../../store/filtration/filtration.slice.ts';

export interface ISelectedItems {
  resetPrice: () => void;
}

export const SelectedItems: FC<ISelectedItems> = ({ resetPrice }) => {
  const { t } = useTranslation();
  const { removeMinMaxValues, clearFilters, removeHandler, resetSorting } =
    useFiltrationActions();
  const { flowerIds, colorIds, maxPrice, minPrice, min, max } = useAppSelector(
    (state) => state.filtration.filters
  );
  const resetFilters = useCallback(() => {
    clearFilters([]);
    removeMinMaxValues();
    resetSorting();
    resetPrice();
  }, [clearFilters, removeMinMaxValues, resetSorting]);

  useEffect(() => {
    return () => {
      resetFilters();
    };
  }, [resetFilters]);
  return (
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
  );
};
