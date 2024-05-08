import { FC, RefObject } from 'react';
import styles from './styles.module.scss';
import closeImage from '../../../../assets/image/catalog/mobile/close_sorting.png';
import { SmallAccordion } from './SmallAccordion';
import { PriceAccordion } from './PriceAccordion';
import { Button } from '../../../../components';
import { useTranslation } from 'react-i18next';
import { useFiltrationActions } from '../../../../store/filtration/filtration.slice.ts';
import { HeadlessDialog } from '../../../../components/headlessuiDialog';
import { useGetFlowers } from '../../../../services/bouquete-api/getFlowers/getFlowers.ts';
import { useGetColors } from '../../../../services/bouquete-api/getColors/getColors.ts';

export interface IFilters {
  min: number;
  max: number;
  minInputRef: RefObject<HTMLInputElement>;
  maxInputRef: RefObject<HTMLInputElement>;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Filters: FC<IFilters> = (props) => {
  const { min, minInputRef, maxInputRef, max, isOpen, setIsOpen } = props;
  const { t } = useTranslation();
  const { addFlowersId, addColorsId, removeFlowerId, removeColorId } =
    useFiltrationActions();
  const { data: flowers } = useGetFlowers();
  const { data: colors } = useGetColors();

  const handleClose = () => {
    setIsOpen();
  };
  return (
    <HeadlessDialog
      active={styles.active}
      isShow={isOpen}
      content={styles.content}
      handleClose={handleClose}
      container={styles.container}
    >
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
          <SmallAccordion
            data={flowers || []}
            name={t('mobileFilters.filter.modal.nameFlower')}
            removeItem={removeFlowerId}
            addItem={addFlowersId}
          />
          <PriceAccordion
            min={min}
            max={max}
            minInputRef={minInputRef}
            maxInputRef={maxInputRef}
          />
          <SmallAccordion
            data={colors || []}
            name={t('mobileFilters.filter.modal.nameColor')}
            removeItem={removeColorId}
            addItem={addColorsId}
          />
        </div>
        <div className={styles.button}>
          <Button onClick={handleClose} text={'Show'} />
        </div>
      </div>
    </HeadlessDialog>
  );
};
