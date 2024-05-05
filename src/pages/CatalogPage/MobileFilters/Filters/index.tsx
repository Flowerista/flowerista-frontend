import { Dispatch, FC, RefObject, SetStateAction, useState } from 'react';
import styles from './styles.module.scss';
import filtersOpen from '../../../../assets/image/catalog/mobile/filters_open.png';
import closeImage from '../../../../assets/image/catalog/mobile/close_sorting.png';
import { FlowersAccordion } from './FlowersAccordion';
import { PriceAccordion } from './PriceAccordion';
import { ColorsAccordion } from './ColorsAccordion';
import { Button } from '../../../../components';
import { useTranslation } from 'react-i18next';

export interface IFilters {
  setSelectedItems: Dispatch<SetStateAction<string[]>>;
  selectedItems: string[];
  removeHandler: (item: { item: string; menu: string; id: number }) => void;
  addFlowerFilter: (item: { item: string; menu: string; id: number }) => void;
  addColorFilter: (item: { item: string; menu: string; id: number }) => void;
  min: number;
  max: number;
  minInputRef: RefObject<HTMLInputElement>;
  maxInputRef: RefObject<HTMLInputElement>;
}

export const Filters: FC<IFilters> = ({
  addColorFilter,
  addFlowerFilter,
  setSelectedItems,
  selectedItems,
  removeHandler,
  min,
  minInputRef,
  maxInputRef,
  max
}) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleBlock = () => {
    document.body.style.overflow = 'hidden';
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    document.body.style.overflow = 'auto';
    setIsVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={toggleBlock} className={styles.filter}>
        <span>{t('mobileFilters.filter.title')}</span>
        <img src={filtersOpen} alt="open_image" />
      </div>
      <div
        onClick={handleClose}
        className={`${styles.container} ${isVisible ? styles.active : ''}`}
      >
        <div onClick={(e) => e.stopPropagation()} className={styles.content}>
          <div className={styles.content__title}>
            <span>{t('mobileFilters.filter.modal.title')}</span>
            <img
              onClick={handleClose}
              className={styles.img}
              src={closeImage}
              alt="close-image"
            />
          </div>
          <div className={styles.content__accordions}>
            <div>
              <FlowersAccordion
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
                removeHandler={removeHandler}
                addFlowerFilter={addFlowerFilter}
              />
              <PriceAccordion
                min={min}
                max={max}
                minInputRef={minInputRef}
                maxInputRef={maxInputRef}
              />
              <ColorsAccordion
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
                removeHandler={removeHandler}
                addColorFilter={addColorFilter}
              />
            </div>
            <div className={styles.button}>
              <Button onClick={handleClose} text={'Show'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
