import {
  ChangeEvent,
  FC,
  RefObject,
  useCallback,
  useEffect,
  useRef
} from 'react';
import styles from './styles.module.scss';
import topArrow from '../../../../../assets/image/dropDown/top_arrow.png';
import bottomArrow from '../../../../../assets/image/dropDown/botton_arrow.png';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import useOutside from '../../../../../hooks/useOutside';
import { useAppSelector } from '../../../../../store/store';
import './styles.scss';
import { useFiltrationActions } from '../../../../../store/filtration/filtration.slice.ts';

export interface IPriceAccordion {
  min: number;
  max: number;
  minInputRef: RefObject<HTMLInputElement>;
  maxInputRef: RefObject<HTMLInputElement>;
}

export const PriceAccordion: FC<IPriceAccordion> = (props) => {
  const { min, max, maxInputRef, minInputRef } = props;
  const { t } = useTranslation();
  const { isShow, setIsShow, ref } = useOutside(false);
  const { setMinValue, setMaxValue } = useFiltrationActions();

  const {
    maxPrice,
    minPrice,
    max: maxRangeSmall,
    min: minRangeSmall
  } = useAppSelector((state) => state.filtration.filters);

  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

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
        Math.min(+maxValRef.current.value, maxRangeSmall)
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
    maxRangeSmall,
    maxPrice,
    getPercent,
    min,
    max
  ]);

  useEffect(() => {
    initializeValues();
  }, [initializeValues]);
  return (
    <div ref={ref} className={styles.dropDown}>
      <div
        onClick={() => {
          setIsShow(!isShow);
        }}
        className={styles.dropDown__btn}
      >
        {t('catalog.filters.price')}
        {isShow ? (
          <img src={topArrow} alt="" />
        ) : (
          <img src={bottomArrow} alt="" />
        )}
      </div>
      <div
        ref={ref}
        className={`${styles.dropDown__content} ${isShow ? styles.active : ''}`}
      >
        <div className={styles.dropDown__content__inputs}>
          <input
            type="number"
            ref={minInputRef}
            min={min}
            max={maxRangeSmall}
            placeholder={minRangeSmall.toString()}
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
            min={minRangeSmall}
            max={max}
            placeholder={maxRangeSmall.toString()}
            onChange={(event) => {
              const value = +event.target.value;
              if (
                value >= minRangeSmall &&
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
            <div ref={range} className="slider__range"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
