import {
  ChangeEvent,
  FC,
  RefObject,
  useCallback,
  useEffect,
  useRef
} from 'react';
import topArrow from '../../../shared/assets/image/dropDown/top_arrow.png';
import bottomArrow from '../../../shared/assets/image/dropDown/botton_arrow.png';
import './styles.scss';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useFiltrationActions } from '../../../pages/catalogPage/model/slice/filtration.slice.ts';

import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import classnames from 'classnames';
import {
  useMax,
  useMaxPrice,
  useMin,
  useMinPrice
} from '../../../pages/catalogPage/model/selectors/getCatalog.ts';

interface IDropDownPrice {
  min: number;
  max: number;
  minInputRef: RefObject<HTMLInputElement>;
  maxInputRef: RefObject<HTMLInputElement>;
}

export const CatalogDropDownPrice: FC<IDropDownPrice> = (props) => {
  const { min, max, maxInputRef, minInputRef } = props;
  const { t } = useTranslation();
  const { setMinValue, setMaxValue } = useFiltrationActions();

  const maxPrice = useMaxPrice() || 0;
  const minPrice = useMinPrice() || 0;
  const maxRange = useMax() || 0;
  const minRange = useMin() || 0;
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const initializeValues = useCallback(() => {
    if (minInputRef.current) {
      minInputRef.current!.value = minPrice.toString();
    }
    if (maxInputRef.current) {
      maxInputRef.current!.value = maxPrice.toString();
    }
    if (maxValRef.current) {
      const minPercent = getPercent(Math.max(minPrice, min));
      const maxPercent = getPercent(
        Math.min(+maxValRef.current.value, maxRange)
      );

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
    if (minValRef.current) {
      const minPercent = getPercent(Math.max(+minValRef.current.value, min));
      const maxPercent = getPercent(Math.min(maxPrice, max));

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [
    minInputRef,
    maxInputRef,
    minPrice,
    maxRange,
    maxPrice,
    getPercent,
    min,
    max
  ]);

  useEffect(() => {
    initializeValues();
  }, [initializeValues]);
  return (
    <Menu as={'div'} className={styles.dropDown}>
      {({ open }) => (
        <>
          <MenuButton className={styles.dropDown__btn}>
            {t('catalog.filters.price')}
            {open ? (
              <img src={topArrow} alt="" />
            ) : (
              <img src={bottomArrow} alt="" />
            )}
          </MenuButton>
          {open && (
            <MenuItems
              as={'div'}
              className={`${styles.dropDown__content}`}
              anchor="bottom"
              onFocus={() => {
                initializeValues();
              }}
            >
              <div className={styles.dropDown__content__inputs}>
                <input
                  type="number"
                  ref={minInputRef}
                  min={min}
                  max={maxRange}
                  placeholder={minRange.toString()}
                  onChange={(event) => {
                    const value = +event.target.value;
                    if (value > Number(maxInputRef.current?.value)) {
                      setMinValue(min);
                    } else if (
                      value <= maxPrice &&
                      value <= Number(maxInputRef.current?.value)
                    ) {
                      setMinValue(value);
                    }
                  }}
                />
                <div></div>
                <input
                  type="number"
                  ref={maxInputRef}
                  min={minRange}
                  max={max}
                  placeholder={maxRange.toString()}
                  onChange={(event) => {
                    const value = +event.target.value;
                    if (
                      value >= minRange &&
                      value >= minPrice &&
                      value > Number(minInputRef.current?.value)
                    ) {
                      setMaxValue(value);
                    }
                  }}
                />
              </div>
              <div className={styles.dropDown__content__range}>
                <input
                  type="range"
                  min={min}
                  max={max}
                  value={minPrice}
                  ref={minValRef}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxPrice - 1);
                    setMinValue(value);
                    minInputRef!.current!.value = value.toString();
                    event.target.value = value.toString();
                  }}
                  className={classnames('thumb thumb--zindex-3', {
                    'thumb--zindex-5': minPrice > max - 100
                  })}
                />
                <input
                  type="range"
                  min={min}
                  max={max}
                  value={maxPrice}
                  ref={maxValRef}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, minPrice + 1);
                    setMaxValue(value);
                    maxInputRef!.current!.value = value.toString();
                    event.target.value = value.toString();
                  }}
                  className="thumb thumb--zindex-4"
                />

                <div className="slider">
                  <div className="slider__track"></div>
                  <div className="slider__range" ref={range}></div>
                </div>
              </div>
            </MenuItems>
          )}
        </>
      )}
    </Menu>
  );
};
