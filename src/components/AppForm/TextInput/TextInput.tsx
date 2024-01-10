import {FC} from 'react'
import FormInput from '../FormInput/FormInput'
import FormError from '../FormError/FormError'

interface IFormInput {
	error?: string;
	register: any;
	label: string;
	placeholder?: string;
	registerName: string;
	defaultValue?: string;
	required?: boolean
}

const TextInput: FC<IFormInput> = ({error, register, label, placeholder, registerName, defaultValue, required}) => {
	return (
		 <div>
			 <FormInput
					label={label}
					required={required}
					type="text"
					defaultValue={defaultValue}
					placeholder={placeholder ? placeholder : ''}
					error={error}
					register={register(registerName, {})}
			 />
			 {error && <FormError error={error}/>}
		 </div>
	)
}

export default TextInput;
