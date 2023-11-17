import {FC} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Form, PhoneInput, EmailInput, InputsWrapper } from '../../../../components/AppForm';
import { Button } from '../../../../components/Button/Buttons';
import { Title } from '../../../../components/Title/Title';

import styles from './styles.module.scss';
interface Inputs  {
    email: string;
    phone: string;
}

const schemaContacts = yup
  .object({
    email: yup.string()
              .max(256, 'Length no more than 256 characters')
              .email().required('Required'),
    phone: yup.string()
              .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/, 'Incorrect phone format')
              .required('Required'), // not correct,
  })
  .required()

export const ContactsForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(schemaContacts)
    })
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    return (
        <div className={styles.form__wrapper}>
            <div className={styles.form__head}>
            <Title text='Contacts'/>
            <p className={styles.form__descr}>Enter your details for quick ordering</p>
            </div>
            <div className={styles.form__body}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputsWrapper>
                    <EmailInput register={register} error={errors.email?.message}/>
                    <PhoneInput control={control} error={errors.phone?.message}/>
                </InputsWrapper>
                <Button text='Save' colorMode='white' style={{marginTop: '40px'}}/>
            </Form>
            </div>
        </div>
    )
}