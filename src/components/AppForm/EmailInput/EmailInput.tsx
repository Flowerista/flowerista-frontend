import {FC} from 'react'
import FormInput from '../FormInput/FormInput'
import FormError from '../FormError/FormError'
import {useTranslation} from 'react-i18next';

interface IFormInput {
	error?: string
	register: any
}

const EmailInput: FC<IFormInput> = ({error, register}) => {
	const {t} = useTranslation()
	return (
		 <div>
			 <FormInput
					label={`${t('inputs.email')}`}
					type="email"
					defaultValue=""
					placeholder="example@example.com"
					error={error}
					register={register('email')}
			 />
			 {error && <FormError error={error}/>}
		 </div>
	)
}

export default EmailInput;
