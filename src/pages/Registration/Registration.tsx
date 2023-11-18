import { FC } from 'react'
import {useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios';

import { DataRoute } from '../../data/routes';
import { Form, FormLink, InputsWrapper, PasswordInput, EmailInput, NameInput, SurnameInput, PhoneInput} from '../../components/AppForm' 
import { Button } from '../../components/Button/Buttons';
import { Title } from '../../components/Title/Title';

import Flower from '../../assets/image/registration/flower.png'
import styles from './styles.module.scss'
import { usePostRegistrationMutation } from '../../services/bouquete-api/bouquete-api-service';
import { IRegister } from '../../interface/register';

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

  // add try catch
const checkEmail = async (email: string) => {
    let checked
    await axios.get(`https://flowerista.onrender.com/api/auth/checkEmail/${email}`)
            .then(response => {
                checked = response.data
            })
            .catch(err => console.log(err))
    return checked
}

const checkPhone = async (phone: number) => {
    let checked
    await axios.get(`https://flowerista.onrender.com/api/auth/checkPhone/${phone}`)
            .then(response => {
                checked = response.data
            })
            .catch(err => console.log(err))
    return checked
}



export const Registration: FC = () => {
    const [sendRequest, { error }] = usePostRegistrationMutation()
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control,
        setError
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
    const onSubmit: SubmitHandler<Inputs> = async ({password, email, name, surname, phone}) => {
        const newName = upFirstChar(name)
        const newSurname = upFirstChar(surname)
        const newPhone = +phone.slice(4).replace(/\D/g, '')
        const newData: IRegister = {
            password,
            email,
            firstName: newName,
            lastName: newSurname,
            phoneNumber: newPhone
        }
        const checkedEmail = await checkEmail(email)
        
        if (checkedEmail) {
            setError('email', {type: 'chackEmail', message: 'Mail already exists'})
        } else {
            const checkedPhone = await checkPhone(newPhone)
            if (checkedPhone) {
                setError('phone', {type: 'chackPhone', message: 'Phone already exists'})
            } else {
                sendRequest(newData)
                if (error) {
                    alert(error)
                } else {
                    alert(JSON.stringify(newData))
                    reset()
                }
            }
        }
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
