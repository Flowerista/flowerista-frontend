import {FC, useState} from 'react'
import FormInput from '../FormInput/FormInput'
import FormError from '../FormError/FormError'

import styles from './styles.module.scss'
import {BsEye, BsEyeSlash} from 'react-icons/bs'
import {useTranslation} from 'react-i18next';

interface IFormInput {
	error?: string;
	register: any;
	label?: string;
	placeholder?: string;
	registerName?: string
}


const PasswordInput: FC<IFormInput> = ({
	                                       error,
	                                       register,
	                                       label,
	                                       placeholder = 'Password',
	                                       registerName = 'password',
                                       }) => {
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const {t} = useTranslation()
	return (
		 <div>
			 <FormInput
					label={`${label ? label : t('inputs.password')}`}
					type={showPassword ? 'text' : 'password'}
					defaultValue=""
					placeholder={placeholder}
					error={error}
					register={register(registerName)}
			 >
				 <div
						className={styles.btn}
						onClick={() => setShowPassword(state => !state)}
				 >
					 {showPassword ? <BsEyeSlash style={{fontSize: '16px'}}/> : <BsEye style={{fontSize: '16px'}}/>}
				 </div>
			 </FormInput>
			 {error && <FormError error={error}/>}
		 </div>
	)
}

export default PasswordInput;
