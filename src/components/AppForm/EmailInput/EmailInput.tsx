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
            register={register("email", {
                required: 'Required',
                maxLength: 256,
                pattern: {
                  value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
                  message: 'Not Pattern example@example.com'
                }
            })}
        />
        {error && <FormError error={error}/>}
    </div>
  )
}

export default EmailInput;