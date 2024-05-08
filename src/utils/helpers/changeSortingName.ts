import { t } from 'i18next';

export const changeSortingName = (item: string) => {
  return item === 'sortByNewest'
    ? t('catalog.sorting.first')
    : item === 'sortByPriceHighToLow'
      ? t('catalog.sorting.second')
      : item === 'sortByPriceLowToHigh'
        ? t('catalog.sorting.third')
        : t('catalog.sorting.title');
};
