import {FC} from 'react';
import {Controller} from 'react-hook-form';
import InputMask from 'react-input-mask';
import FormError from '../FormError/FormError';

import styles from './styles.module.scss'
import {useTranslation} from 'react-i18next';

interface IFormInput {
	error?: string;
	control: any;
}

const PhoneInput: FC<IFormInput> = ({error, control}) => {
	const {t} = useTranslation()
	return (
		 <div>
			 < Controller
					render={({field: {onChange, onBlur, value}}) =>
						 <>
							 <label className={styles.label}>
								 {t('inputs.telephone')}
								 <InputMask
										value={value}
										onChange={onChange}
										mask="+380 99 999 99 99"
										maskPlaceholder={'0'}
										onBlur={onBlur}
										className={`${styles.input} ${error ? styles.input_error : ''}`}
										placeholder="+380 99 999 99 99"
										type="tel"
								 />
							 </label>
							 {error && <FormError error={error}/>}
						 </>
					}
					control={control}
					name="phone"
			 />
		 </div>
	)
}

export default PhoneInput;
