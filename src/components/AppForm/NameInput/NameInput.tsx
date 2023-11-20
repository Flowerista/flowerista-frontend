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
            register={register("name")}
        />
        {error && <FormError error={error}/>}
    </div>
  )
}

export default NameInput;
