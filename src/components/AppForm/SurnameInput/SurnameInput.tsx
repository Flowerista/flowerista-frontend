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
            register={register("surname")}
        />
        {error && <FormError error={error}/>}
    </div>
  )
}

export default SurnameInput;