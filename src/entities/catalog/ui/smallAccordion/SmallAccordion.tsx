import { FC, Fragment, useState } from 'react';
import styles from './styles.module.scss';
import {
  Combobox,
  ComboboxButton,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/react';
import openImage from '../../../../shared/assets/image/checkOut/open.png';
import closeImage from '../../../../shared/assets/image/checkOut/close.png';
import { ItemInterface } from '../../../../widgets/catalogFilters/ui/CatalogFilters.tsx';
import { IFlower } from '../../../../shared/types/flower.ts';

interface IItem {
  item: string;
  menu: string;
  id: number;
}

export interface IFlowersAccordion {
  removeItem: (id: number) => void;
  addItem: (item: ItemInterface) => void;
  name: string;
  data: IFlower[];
  array: IItem[];
}

export const SmallAccordion: FC<IFlowersAccordion> = (props) => {
  const { removeItem, addItem, name, data, array } = props;
  const [selectedItems, setSelectedItems] = useState(array);
  return (
    <Combobox
      as={'div'}
      multiple={true}
      value={selectedItems}
      onChange={(value) => {
        setSelectedItems(value);
      }}
      onClose={() => {}}
      className={`${styles.accordion}`}
    >
      {({ open }) => (
        <>
          <ComboboxButton as={'div'} className={styles.title}>
            <span>{name}</span>
            <img src={open ? openImage : closeImage} alt="image-accordion" />
          </ComboboxButton>
          {open && (
            <ComboboxOptions as={'div'} className={styles.content}>
              {data.map((item) => (
                <ComboboxOption value={item} as={Fragment} key={item.id}>
                  {({ selected }) => (
                    <div
                      key={item.id}
                      className={styles.item}
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
                    >
                      <div
                        className={`${styles.square} ${selected ? styles.selected : ''}`}
                      ></div>
                      <span>{item.name}</span>
                    </div>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </>
      )}
    </Combobox>
  );
};
