import {FC} from 'react';
import styles from './styles.module.scss';

import addressImg from '../../../../assets/image/checkOut/address.png'

export interface IAddressInformation {
	address:any
}

export const AddressInformation: FC<IAddressInformation> = ({address}) => {
	return (
		 <div className={styles.address}>
			 <img src={addressImg} alt="address-img"/>
			 <div className={styles.addressWrapper}>
				 <h4>By courier</h4>
				 <div>
					 <span>{address.streetAddress}</span>
					 <span>{address.date} {" "} {address.time}</span>
				 </div>
			 </div>
		 </div>
	);
};

