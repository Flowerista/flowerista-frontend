import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../../store/store.ts';
import { useFiltrationActions } from '../../../store/filtration/filtration.slice.ts';
import { changeSortingName } from '../../lib/helpers/changeSortingName.ts';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react';
import topArrow from '../../assets/image/dropDown/top_arrow.png';
import bottomArrow from '../../assets/image/dropDown/botton_arrow.png';

interface SortingInterface {
  item: string;
  id: number;
  sort: boolean;
}

export const DropDownSorting: FC = () => {
  const sorting = useAppSelector((state) => state.filtration.sorting);
  const { setSorting } = useFiltrationActions();
  const [selectedSort, setSelectedSort] = useState<SortingInterface>(
    sorting[0]
  );

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
            {changeSortingName(selectedSort.item)}
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
              {sorting.map((sort) =>
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
                        {changeSortingName(sort.item)}
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
