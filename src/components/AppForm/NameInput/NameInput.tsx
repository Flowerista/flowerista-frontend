import {FC} from 'react'
import FormInput from '../FormInput/FormInput'
import FormError from '../FormError/FormError'
import {useTranslation} from 'react-i18next';

interface IFormInput {
	error?: string
	register: any
}

const NameInput: FC<IFormInput> = ({error, register}) => {
	const {t} = useTranslation()
	return (
		 <div>
			 <FormInput
					label={`${t('inputs.name')}`}
					type="text"
					defaultValue=""
					placeholder="Name"
					error={error}
					register={register('name')}
			 />
			 {error && <FormError error={error}/>}
		 </div>
	)
}

export default NameInput;
