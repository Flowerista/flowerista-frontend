import {FC, useState} from 'react'
import FormInput from '../FormInput/FormInput'
import FormError from '../FormError/FormError'

import styles from './styles.module.scss'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

interface IFormInput {
    error?: string;
    register: any;
    label?: string;
    placeholder?: string;
    registerName?: string
}

const PasswordInput: FC<IFormInput> = ({error, register, label = 'Password', placeholder = 'Password', registerName = 'password'}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div>
        <FormInput
            label={label}
            type={showPassword ? 'text' : 'password'}
            defaultValue=''
            placeholder={placeholder}
            error={error}
            register={register(registerName, {
                required: 'Required',
                minLength: {
                    value: 8,
                    message: 'Be at least 8 characters long'
                },
                pattern: {
                    value: /(?=.*\d)/,
                    message: 'The password must contain at least one number'
                },
            })}
        >
            <div 
                className={styles.btn}
                onClick={() => setShowPassword(state => !state)}
            >
                {showPassword ? <BsEyeSlash style={{fontSize: '16px'}}/> : <BsEye style={{fontSize: '16px'}}/>}
            </div>
        </FormInput>
        {error && <FormError error={error}/>}
    </div>
  )
}

export default PasswordInput;