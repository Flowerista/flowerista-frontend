import { FC } from 'react';
import styles from './styles.module.scss';
import closeImage from '../../../../assets/image/catalog/mobile/close_sorting.png';
import { useTranslation } from 'react-i18next';
import { useFiltrationActions } from '../../../../store/filtration/filtration.slice.ts';
import { useAppSelector } from '../../../../store/store.ts';
import { changeSortingName } from '../../../../utils/helpers/changeSortingName.ts';
import { HeadlessDialog } from '../../../../components/headlessuiDialog';

interface sortingInterface {
  handleClose: () => void;
  isVisible: boolean;
}

export const Sorting: FC<sortingInterface> = (props) => {
  const { isVisible, handleClose } = props;
  const { t } = useTranslation();
  const sorting = useAppSelector((state) => state.filtration.sorting);
  const { setSorting } = useFiltrationActions();

  const handleCloseModal = () => {
    handleClose();
  };

  return (
    <HeadlessDialog
      active={styles.active}
      content={styles.content}
      handleClose={handleClose}
      container={styles.container}
      isShow={isVisible}
    >
      <div className={styles.content__title}>
        <span>{t('mobileFilters.sort.modal.title')}</span>
        <img
          onClick={handleCloseModal}
          className={styles.img}
          src={closeImage}
          alt="close-image"
        />
      </div>
      <div className={styles.content__items}>
        {sorting?.map((sort) =>
          sort.item === 'sort' ? null : (
            <div
              key={sort.id}
              onClick={() => setSorting(sort.item)}
              className={styles.item}
            >
              <div
                className={`${styles.square} ${sort.sort && styles.selected}`}
              ></div>
              <span>{changeSortingName(sort.item)}</span>
            </div>
          )
        )}
      </div>
    </HeadlessDialog>
  );
};
