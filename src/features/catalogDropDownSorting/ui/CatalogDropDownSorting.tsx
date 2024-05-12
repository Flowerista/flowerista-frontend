import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { useFiltrationActions } from '../../../pages/catalogPage/model/slice/filtration.slice.ts';
import { changeSortingName } from '../../../shared/lib/helpers/changeSortingName.ts';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react';
import topArrow from '../../../shared/assets/image/dropDown/top_arrow.png';
import bottomArrow from '../../../shared/assets/image/dropDown/botton_arrow.png';
import { useSorting } from '../../../pages/catalogPage/model/selectors/getCatalog.ts';

export const CatalogDropDownSorting: FC = () => {
  const sorting = useSorting() || [];
  const { setSorting } = useFiltrationActions();
  const [selectedSort, setSelectedSort] = useState(sorting[0]);

  return (
    <Listbox
      as={'div'}
      className={styles.dropDown}
      value={selectedSort}
      onChange={setSelectedSort}
    >
      {({ open }) => (
        <>
          <ListboxButton className={styles.dropDown__btn}>
            {selectedSort?.item && changeSortingName(selectedSort.item)}
            {open ? (
              <img src={topArrow} alt="" />
            ) : (
              <img src={bottomArrow} alt="" />
            )}
          </ListboxButton>
          {open && (
            <ListboxOptions
              className={`${styles.dropDown__content}`}
              anchor="bottom"
            >
              {sorting?.map((sort) =>
                sort.item === 'sort' ? null : (
                  <ListboxOption
                    key={sort.id}
                    value={sort}
                    onClick={() => setSorting(sort.item)}
                  >
                    {({ selected }) => (
                      <div
                        className={`${styles.item} ${selected && styles.selected}`}
                      >
                        {changeSortingName(sort?.item)}
                      </div>
                    )}
                  </ListboxOption>
                )
              )}
            </ListboxOptions>
          )}
        </>
      )}
    </Listbox>
  );
};
