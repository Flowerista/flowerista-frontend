import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import openImage from '../../../../assets/image/catalog/mobile/sorting_open.png';
import closeImage from '../../../../assets/image/catalog/mobile/close_sorting.png';
import {
  setSortByNewest,
  setSortByPriceHighToLow,
  setSortByPriceLowToHigh
} from '../../../../store/filtration/filtration.slice';
import { useAppDispatch } from '../../../../store/store';
import { useTranslation } from 'react-i18next';

export interface ISorting {}

export const Sorting: FC<ISorting> = () => {
  const { t, i18n } = useTranslation();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const [sorting, setSorting] = useState([
    {
      item: 'sortByNewest',
      id: 1,
      name: `${t('catalog.sorting.first')}`,
      sort: false
    },
    {
      item: 'sortByPriceHighToLow',
      id: 2,
      name: `${t('catalog.sorting.second')}`,
      sort: false
    },
    {
      item: 'sortByPriceLowToHigh',
      id: 3,
      name: `${t('catalog.sorting.third')}`,
      sort: false
    }
  ]);

  const addSorting = (value: {
    item: string;
    name: string;
    id: number;
    sort: boolean;
  }) => {
    const updatedSorting = sorting.map((option) => ({
      ...option,
      sort: option.item === value.item
    }));

    setSorting(updatedSorting);

    if (value.item === 'sortByNewest') {
      dispatch(setSortByNewest(true));
      dispatch(setSortByPriceHighToLow(false));
      dispatch(setSortByPriceLowToHigh(false));
    } else if (value.item === 'sortByPriceHighToLow') {
      dispatch(setSortByPriceHighToLow(true));
      dispatch(setSortByPriceLowToHigh(false));
      dispatch(setSortByNewest(false));
    } else if (value.item === 'sortByPriceLowToHigh') {
      dispatch(setSortByPriceLowToHigh(true));
      dispatch(setSortByPriceHighToLow(false));
      dispatch(setSortByNewest(false));
    }
  };

  const toggleBlock = () => {
    document.body.style.overflow = 'hidden';
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    document.body.style.overflow = 'auto';
    setIsVisible(false);
  };

  useEffect(() => {
    const updateSorting = () => {
      setSorting([
        {
          item: 'sortByNewest',
          id: 1,
          name: `${t('catalog.sorting.first')}`,
          sort: false
        },
        {
          item: 'sortByPriceHighToLow',
          id: 2,
          name: `${t('catalog.sorting.second')}`,
          sort: false
        },
        {
          item: 'sortByPriceLowToHigh',
          id: 3,
          name: `${t('catalog.sorting.third')}`,
          sort: false
        }
      ]);
    };

    i18n.on('languageChanged', updateSorting);

    return () => {
      i18n.off('languageChanged', updateSorting);
    };
  }, [i18n, t]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sorting} onClick={toggleBlock}>
        <span>{t('mobileFilters.sort.title')}</span>
        <img src={openImage} alt="open-sort-image" />
      </div>
      <div
        onClick={handleClose}
        className={`${styles.container} ${isVisible ? styles.active : ''}`}
      >
        <div onClick={(e) => e.stopPropagation()} className={styles.content}>
          <div className={styles.content__title}>
            <span>{t('mobileFilters.sort.modal.title')}</span>
            <img
              onClick={handleClose}
              className={styles.img}
              src={closeImage}
              alt="close-image"
            />
          </div>
          <div className={styles.content__items}>
            {sorting?.map((item) => (
              <div
                key={item.id}
                onClick={() => addSorting(item)} // Обработчик клика на элементе
                className={styles.item}
              >
                <div
                  className={`${styles.square} ${item.sort && styles.selected}`}
                ></div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
