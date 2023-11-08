import React, {ChangeEvent, FC, useCallback, useEffect, useRef} from 'react';
import topArrow from '../../assets/image/dropDown/top_arrow.png'
import bottomArrow from '../../assets/image/dropDown/botton_arrow.png'
import styles from './styles.module.scss';
import './styles.scss'

import classnames from 'classnames'
import {useAppDispatch, useAppSelector} from '../../store/store';
import {setMaxValue, setMinValue} from '../../store/filtration/filtration.slice';
import useOutside from '../../hooks/useOutside';


export const DropDownPrice: FC<{min:number,max:number}> = ( {min,max}) => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const {maxPrice,minPrice,max:maxRange,min:minRange}=useAppSelector(state => state.filtration.filters)

	const minInputRef = useRef<HTMLInputElement>(null);
	const maxInputRef = useRef<HTMLInputElement>(null);
	const minValRef = useRef<HTMLInputElement>(null);
	const maxValRef = useRef<HTMLInputElement>(null);
	const range = useRef<HTMLDivElement>(null)
	const dispatch=useAppDispatch()

	// Convert to percentage
	const getPercent = useCallback(
		 (value: number) => Math.round(((value - min) / (max - min)) * 100),
		 [min, max]
	);

// Set width of the range to decrease from the left side
	useEffect(() => {
		if (maxValRef.current) {
			const minPercent = getPercent(Math.min(minPrice, minRange)); // Ограничиваем minPrice до 3500
			const maxPercent = getPercent(Math.min(+maxValRef.current.value, maxRange)); // Ограничиваем maxVal до 3500

			if (range.current) {
				range.current.style.left = `${minPercent}%`;
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [minPrice, getPercent]);

// Set width of the range to decrease from the right side
	useEffect(() => {
		if (minValRef.current) {
			const minPercent = getPercent(Math.min(+minValRef.current.value, minRange)); // Ограничиваем minVal до 3500
			const maxPercent = getPercent(Math.min(maxPrice, maxRange)); // Ограничиваем maxPrice до 3500

			if (range.current) {
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [maxPrice, getPercent]);


	// Get min and max values when their state changes
	useEffect(() => {
	}, [minPrice, maxPrice,]);

	return (
		 <div className={styles.dropDown}>
			 <div
				  ref={ref}
					onClick={() => {
						setIsShow(!isShow);
					}}
					className={styles.dropDown__btn}
			 >
				 {"Price"}
				 {isShow?<img src={topArrow} alt=""/>:<img src={bottomArrow} alt=""/>}
			 </div>
			 <div className={`${styles.dropDown__content} ${isShow ? styles.active : ''}`}>
				 <div className={styles.dropDown__content__inputs}>
					 <input
						  type="number"
						  ref={minInputRef}
						  min={min}
						  max={maxRange}
						  placeholder={minRange.toString()}
						  onChange={event => {
							  const value = +event.target.value;
							  if (value <= maxRange) {
								  dispatch(setMinValue(value));
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
						  onChange={event => {
							  const value = +event.target.value;
							  if (value >= minRange) {
								  dispatch(setMaxValue(value));
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
							  dispatch(setMinValue(value));
								minInputRef!.current!.value = value.toString()
							  event.target.value = value.toString();
						  }}
						  className={classnames("thumb thumb--zindex-3", {
							  "thumb--zindex-5": minPrice > max - 100
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
							  dispatch(setMaxValue(value));
							  maxInputRef!.current!.value = value.toString()
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
