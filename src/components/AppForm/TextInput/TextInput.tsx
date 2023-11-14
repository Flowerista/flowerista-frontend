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
}

const TextInput: FC<IFormInput> = ({error, register, label, placeholder, registerName, defaultValue}) => {
  return (
    <div>
        <FormInput
            label={label}
            type='text'
            defaultValue={defaultValue ? defaultValue : ''}
            placeholder={placeholder ? placeholder : ''}
            error={error}
            register={register(registerName, {
            })}
        />
        {error && <FormError error={error}/>}
    </div>
  )
}

export default TextInput;