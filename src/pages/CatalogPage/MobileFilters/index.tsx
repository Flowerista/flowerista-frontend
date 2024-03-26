import {Dispatch, FC, RefObject, SetStateAction} from 'react';
import styles from './styles.module.scss';
import {Filters} from './Filters';
import {Sorting} from './Sorting';

export interface IMobileFilters {
	setSelectedItems: Dispatch<SetStateAction<string[]>>;
	selectedItems: string[];
	removeHandler: (item: { item: string; menu: string; id: number }) => void;
	addFlowerFilter: (item: { item: string; menu: string; id: number }) => void;
	addColorFilter: (item: { item: string; menu: string; id: number }) => void;
	min: number
	max: number
	minInputRef: RefObject<HTMLInputElement>;
	maxInputRef: RefObject<HTMLInputElement>;
}

export const MobileFilters: FC<IMobileFilters> = ({
	                                                  addColorFilter,
	                                                  addFlowerFilter,
	                                                  setSelectedItems,
	                                                  selectedItems,
	                                                  removeHandler,
	                                                  min, minInputRef, maxInputRef, max,
                                                  }) => {
	return (
		 <div className={styles.wrapper}>
			 <Filters
					setSelectedItems={setSelectedItems}
					selectedItems={selectedItems}
					removeHandler={removeHandler}
					addFlowerFilter={addFlowerFilter}
					addColorFilter={addColorFilter}
					min={min}
					max={max}
					minInputRef={minInputRef}
					maxInputRef={maxInputRef}
			 />
			 <Sorting/>
		 </div>
	);
};

