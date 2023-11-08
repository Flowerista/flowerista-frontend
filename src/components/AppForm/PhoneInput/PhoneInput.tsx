import {FC} from 'react';
import { Controller } from 'react-hook-form';
import InputMask from "react-input-mask";
import FormError from '../FormError/FormError';

import styles from './styles.module.scss'

interface IFormInput {
  error?: string;
  control: any;
}

const PhoneInput: FC<IFormInput> = ({error, control}) => {
  return (
    <div>
        < Controller
          render={({field : { onChange, onBlur, value }}) => 
          <>
            <label className={styles.label}>
              Telephone
              <InputMask 
                value={value} 
                onChange={onChange} 
                mask="+380 99 999 99 99" 
                maskPlaceholder={'0'}
                onBlur={onBlur} 
                className={`${styles.input} ${error ? styles.input_error : ''}`}
                placeholder="+380 99 999 99 99" 
                type='tel'
              />
            </label>
            {error && <FormError error={error} />}
          </>
        }
          control={control}
          name="phone"
          rules={{
            required:{
              value: true,
              message: 'Required'
            },
            pattern: {
              value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/,
              message: 'Incorrect phone format'
            }
           }}
        />
    </div>
  )
}

export default PhoneInput;