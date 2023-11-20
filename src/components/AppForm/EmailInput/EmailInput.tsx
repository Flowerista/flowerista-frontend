import {FC} from 'react'
import FormInput from '../FormInput/FormInput'
import FormError from '../FormError/FormError'

interface IFormInput {
    error?: string
    register: any
}

const EmailInput: FC<IFormInput> = ({error, register}) => {
  return (
    <div>
        <FormInput
            label='E-mail'
            type='email'
            defaultValue=''
            placeholder='example@example.com'
            error={error}
            register={register("email")}
        />
        {error && <FormError error={error}/>}
    </div>
  )
}

export default EmailInput;