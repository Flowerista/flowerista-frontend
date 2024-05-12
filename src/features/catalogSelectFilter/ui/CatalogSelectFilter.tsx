import { FC, Fragment, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import topArrow from '../../../shared/assets/image/dropDown/top_arrow.png';
import bottomArrow from '../../../shared/assets/image/dropDown/botton_arrow.png';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/react';
import { ItemInterface } from '../../../widgets/catalogFilters/ui/CatalogFilters.tsx';

export interface IFlower {
  id: number;
  name: string;
}

interface IItem {
  item: string;
  menu: string;
  id: number;
}

interface IDropDown {
  items: IFlower[];
  name: string;
  addItem: (item: ItemInterface) => void;
  removeItem: (id: number) => void;
  array: IItem[];
}

export const CatalogSelectFilter: FC<IDropDown> = (props) => {
  const { items, addItem, name, removeItem, array } = props;
  const [query, setQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<IFlower[]>([]);

  const filteredItems =
    query === ''
      ? items
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    const removedItems = selectedItems.filter(
      (item) => !array.some((arrayId) => arrayId.id === item.id)
    );
    removedItems.forEach((removedItem) => {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item.id !== removedItem.id)
      );
    });
  }, [array]);

  return (
    <>
      <Combobox
        as={'div'}
        multiple={true}
        value={selectedItems}
        onChange={(value) => {
          setSelectedItems(value);
        }}
        onClose={() => setQuery('')}
        className={styles.dropDown}
      >
        {({ open }) => (
          <>
            <div className={styles.dropDown__btn}>
              <ComboboxButton className={styles.button}>
                <ComboboxInput
                  placeholder={name}
                  aria-label="Assignees"
                  onChange={(event) => setQuery(event.target.value)}
                  className={styles.input}
                />
                {open ? (
                  <img src={topArrow} alt="" />
                ) : (
                  <img src={bottomArrow} alt="" />
                )}
              </ComboboxButton>
            </div>
            {open && (
              <ComboboxOptions
                anchor="bottom start"
                className={`${styles.dropDown__content}`}
              >
                {filteredItems.map((item) => (
                  <ComboboxOption value={item} as={Fragment} key={item.id}>
                    {({ selected }) => (
                      <div
                        onClick={() => {
                          addItem({
                            item: item.name,
                            menu: name,
                            id: item.id
                          });
                          if (!selected) {
                            removeItem(item.id);
                          }
                        }}
                        className={`${styles.item} ${selected && styles.selected}`}
                      >
                        {item.name}
                      </div>
                    )}
                  </ComboboxOption>
                ))}
                {filteredItems.length === 0 && (
                  <div className={styles.notFound}>Not Found Elements</div>
                )}
              </ComboboxOptions>
            )}
          </>
        )}
      </Combobox>
    </>
  );
};
