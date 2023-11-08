import {FC} from 'react'
import FormInput from '../FormInput/FormInput'
import FormError  from '../FormError/FormError'

interface IFormInput {
    error?: string
    register: any
}

const SurnameInput: FC<IFormInput> = ({error, register}) => {
  return (
    <div>
        <FormInput
            label='Surname'
            type='text'
            defaultValue=''
            placeholder='Surname'
            error={error}
            register={register("surname", {
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

export default SurnameInput;