import { FC } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import useOutside from '../../../shared/lib/hooks/useOutside.tsx';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { Size } from '../../../shared/types/flower.ts';

interface IDropDown {
  sizes: Size[];
  toggleSize: (size: Size) => void;
  name: Size;
}

export const DropDownSize: FC<IDropDown> = ({ sizes, toggleSize, name }) => {
  const { isShow, setIsShow, ref } = useOutside(false);

  const handleItemClick = (sise: Size) => {
    toggleSize(sise);
    setIsShow(false);
  };

  const onClose = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={styles.dropDown}>
      <div ref={ref} onClick={onClose} className={styles.dropDown__btn}>
        {name.toLowerCase()}
        {isShow ? (
          <BsChevronCompactUp size={24} />
        ) : (
          <BsChevronCompactDown size={24} />
        )}
      </div>
      <div
        className={classNames(styles.dropDown__content, {
          [styles.active]: isShow
        })}
      >
        {sizes?.map((size) => (
          <div
            key={size}
            onClick={() => handleItemClick(size)} // Обработчик клика на элементе
            className={styles.item}
          >
            {size.toLocaleLowerCase()}
          </div>
        ))}
      </div>
    </div>
  );
};
