import { FC } from 'react'
import {useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { DataRoute } from '../../data/routes';
import { Form, FormLink, InputsWrapper, PasswordInput, EmailInput, NameInput, SurnameInput, PhoneInput} from '../../components/AppForm' 
import { Button } from '../../components/Button/Buttons';
import { Title } from '../../components/Title/Title';

import Flower from '../../assets/image/registration/flower.png'
import styles from './styles.module.scss'

type Inputs = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
}



const schemaRegistration = yup
  .object({
    name: yup.string()
             .min(2, 'Be at least 2 characters long')
             .max(50, 'Length no more than 50 characters')
             .matches(/^[^\s]+$/, 'Spaces are not allowed')
             .matches(/^[A-Za-z]+$/, 'Only letters')
             .required('Required'),
    surname: yup.string()
                .min(2, 'Be at least 2 characters long')
                .max(50, 'Length no more than 50 characters')
                .matches(/^[^\s]+$/, 'Spaces are not allowed')
                .matches(/^[A-Za-z]+$/, 'Only letters')
                .required('Required'),
    email: yup.string()
              .max(256, 'Length no more than 256 characters')
              .email().required('Required'),
    phone: yup.string()
              .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/, 'Incorrect phone format')
              .required('Required'), // not correct,
    password: yup.string()
                 .matches(/^[^\s]+$/, 'Spaces are not allowed')
                 .min(8, 'Be at least 8 characters long')
                 .matches(/.*[a-z].*/, 'The password must retain one lowercase letters')
                 .matches(/.*[A-Z].*/, 'The password must retain one uppercase letters')
                 .matches(/.*\d.*/, 'Include at least one numerical digit (0-9)')
                 .matches(/.*[@$!%*?&].*/, 'Include at least one special character (!, @, #, $, %, *, ?, &)')
                 .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Invalid password')
                 .required('Required'),
  })
  .required()

export const Registration: FC = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control
    } = useForm<Inputs>({
        mode: 'onBlur',
        defaultValues: {
            phone: ''
        },
        resolver: yupResolver(schemaRegistration)
    })

    const upFirstChar = (str: string): string => {
        const strTrim = str.trim()
        const newStr = strTrim.charAt(0).toUpperCase() + strTrim.slice(1).toLocaleLowerCase()
        return newStr
    }
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const {password, email, name, surname, phone} = data
        const newName = upFirstChar(name)
        const newSurname = upFirstChar(surname)
        const newPhone = phone.slice(4).replace(/\D/g, '')
        const newData = {
            password,
            email,
            name: newName,
            surname: newSurname,
            phone: newPhone
        }
        alert(JSON.stringify(newData))
        reset()
    }
  
    return (
        <div className={styles.registration}>
            <div>
                <Title text='New account'/>

                <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '50px'}}>
                    <InputsWrapper>
                        <NameInput register={register} error={errors.name?.message} />
                        <SurnameInput register={register} error={errors.surname?.message} />
                        <EmailInput register={register} error={errors.email?.message} />
                        <PhoneInput control={control} error={errors.phone?.message} />
                        <PasswordInput register={register} error={errors.password?.message} />
                    </InputsWrapper>
                    <Button text='Continue' style={{marginTop: '40px'}}/>
                </Form>

                <FormLink to={DataRoute.Login} text='Already have an account? Log in'/>
            </div>
            <div className={styles.img}>
                <img src={Flower} alt="flower" />
            </div>
        </div>
    )
}
