import { FC, RefObject } from 'react';
import styles from './styles.module.scss';
import closeImage from '../../../../shared/assets/image/catalog/mobile/close_sorting.png';
import { useTranslation } from 'react-i18next';
import { useFiltrationActions } from '../../../../pages/catalogPage/model/slice/filtration.slice.ts';
import { HeadlessDialog } from '../../../../shared/ui/headlessuiDialog';
import { useGetFlowers } from '../../../../widgets/catalogFilters/model/api/getFlowers/getFlowers.ts';
import { useGetColors } from '../../../../widgets/catalogFilters/model/api/getColors/getColors.ts';
import { Button } from '../../../../shared/ui/button';
import {
  useColorsIds,
  useFlowersIds
} from '../../../../pages/catalogPage/model/selectors/getCatalog.ts';
import { MobilePriceAccordion } from '../mobilePriceAccordion/MobilePriceAccordion.tsx';
import { SmallAccordion } from '../smallAccordion/SmallAccordion.tsx';

export interface IFilters {
  min: number;
  max: number;
  minInputRef: RefObject<HTMLInputElement>;
  maxInputRef: RefObject<HTMLInputElement>;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const MobileFilters: FC<IFilters> = (props) => {
  const { min, minInputRef, maxInputRef, max, isOpen, setIsOpen } = props;
  const { t } = useTranslation();
  const { addFlowersId, addColorsId, removeFlowerId, removeColorId } =
    useFiltrationActions();
  const { data: flowers } = useGetFlowers();
  const { data: colors } = useGetColors();
  const flowerIds = useFlowersIds();
  const colorIds = useColorsIds();
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
            array={flowerIds || []}
          />
          <MobilePriceAccordion
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
            array={colorIds || []}
          />
        </div>
        <div className={styles.button}>
          <Button onClick={handleClose} text={'Show'} />
        </div>
      </div>
    </HeadlessDialog>
  );
};
