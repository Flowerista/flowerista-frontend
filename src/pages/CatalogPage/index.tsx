import {FC} from 'react';
import styles from './styles.module.scss';
import {DropDown} from '../../components/DropDown';

export interface ICatalogPage {
}

const flowers=[
	{key: 'Alstroemeria', value: 'Alstroemeria'},
	{key: 'Carnation', value: 'Carnation'},
	{key: 'Chrysanthemum', value: 'Chrysanthemum'},
	{key: 'Daffodil', value: 'Daffodil'},
	{key: 'Dahlia', value: 'Dahlia'},
	{key: 'Daisy', value: 'Daisy'},
]

export const CatalogPage: FC<ICatalogPage> = () => {
	return (
		 <div className={styles.catalog}>
			 <div className={styles.catalog__name}>Home | Catalog</div>
			 <div className={styles.catalog__dropDown}>
				 <div className={styles.catalog__dropDown_items}>
					 <DropDown text={"flower"} items={flowers}/>
					 <DropDown text={"price"} items={flowers}/>
					 <DropDown text={"color"} items={flowers}/>
				 </div>
				 <DropDown text={"new"} items={flowers}/>
			 </div>
		 </div>
	);
};

