import {FC} from 'react'
import FormInput from '../FormInput/FormInput'
import FormError from '../FormError/FormError'

interface IFormInput {
    error?: string
    register: any
}

const NameInput: FC<IFormInput> = ({error, register}) => {
  return (
    <div>
        <FormInput
            label='Name'
            type='text'
            defaultValue=''
            placeholder='Name'
            error={error}
            register={register("name", {
                required: 'Required',
                minLength: {
                    value: 2,
                    message: 'Be at least 2 characters long'
                },
                maxLength: {
                    value: 50,
                    message: 'Length no more than 50 characters'
                },
                parent: {
                    value: /^[A-Za-z]+$/,
                    message: 'Only P'
                }
            })}
        />
        {error && <FormError error={error}/>}
    </div>
  )
}

export default NameInput;
