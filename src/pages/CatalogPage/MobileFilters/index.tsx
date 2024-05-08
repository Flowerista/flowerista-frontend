import { FC, RefObject, useState } from 'react';
import styles from './styles.module.scss';
import { Filters } from './Filters';
import { Sorting } from './Sorting';
import openImage from '../../../assets/image/catalog/mobile/sorting_open.png';
import { useTranslation } from 'react-i18next';
import filtersOpen from '../../../assets/image/catalog/mobile/filters_open.png';

export interface IMobileFilters {
  min: number;
  max: number;
  minInputRef: RefObject<HTMLInputElement>;
  maxInputRef: RefObject<HTMLInputElement>;
}

export const MobileFilters: FC<IMobileFilters> = ({
  min,
  minInputRef,
  maxInputRef,
  max
}) => {
  const { t } = useTranslation();
  const [isVisibleSorting, setIsVisibleSorting] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleBlockFilters = () => {
    document.body.style.overflow = 'hidden';
    setIsVisible(!isVisible);
  };

  const handleCloseFilters = () => {
    document.body.style.overflow = 'auto';
    setIsVisible(false);
  };

  const toggleBlockSorting = () => {
    document.body.style.overflow = 'hidden';
    setIsVisibleSorting(!isVisibleSorting);
  };

  const handleCloseSorting = () => {
    document.body.style.overflow = 'auto';
    setIsVisibleSorting(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.filersWrapper}>
        <div onClick={toggleBlockFilters} className={styles.filters}>
          <span>{t('mobileFilters.filter.title')}</span>
          <img src={filtersOpen} alt="open_image" />
        </div>
        <Filters
          min={min}
          max={max}
          minInputRef={minInputRef}
          maxInputRef={maxInputRef}
          isOpen={isVisible}
          setIsOpen={handleCloseFilters}
        />
      </div>
      <div className={styles.sortingWrapper}>
        <div className={styles.sorting} onClick={toggleBlockSorting}>
          <span>{t('mobileFilters.sort.title')}</span>
          <img src={openImage} alt="open-sort-image" />
        </div>
        <Sorting
          handleClose={handleCloseSorting}
          isVisible={isVisibleSorting}
        />
      </div>
    </div>
  );
};
