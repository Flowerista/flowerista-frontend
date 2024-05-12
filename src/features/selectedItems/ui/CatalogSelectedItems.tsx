import { FC, useCallback, useEffect } from 'react';
import styles from '../../../pages/catalogPage/ui/styles.module.scss';
import x from '../../../shared/assets/image/hresik.png';
import { useTranslation } from 'react-i18next';
import { useFiltrationActions } from '../../../pages/catalogPage/model/slice/filtration.slice.ts';
import {
  useColorsIds,
  useFlowersIds,
  useMax,
  useMaxPrice,
  useMin,
  useMinPrice
} from '../../../pages/catalogPage/model/selectors/getCatalog.ts';

export interface ISelectedItems {
  resetPrice: () => void;
}

export const CatalogSelectedItems: FC<ISelectedItems> = ({ resetPrice }) => {
  const { t } = useTranslation();
  const { removeMinMaxValues, clearFilters, removeHandler, resetSorting } =
    useFiltrationActions();

  const minPrice = useMinPrice() || 0;
  const maxPrice = useMaxPrice() || 0;
  const flowerIds = useFlowersIds() || [];
  const colorIds = useColorsIds() || [];
  const min = useMin() || 0;
  const max = useMax() || 0;

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
