import { FC } from 'react'
import {useForm, SubmitHandler } from 'react-hook-form';

import { DataRoute } from '../../data/routes';
import { Form, FormTitle, FormButton, FormLink, InputsWrapper, PasswordInput, EmailInput, NameInput, SurnameInput, PhoneInput} from '../../components/AppForm' 

import Flower from '../../assets/image/registration/flower.png'
import styles from './styles.module.scss'

type Inputs = {
  password: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  exampleRequired: string
}

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
        }
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
                <FormTitle text='New account'/>

                <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '50px'}}>
                    <InputsWrapper>
                        <NameInput register={register} error={errors.name?.message} />
                        <SurnameInput register={register} error={errors.surname?.message} />
                        <EmailInput register={register} error={errors.email?.message} />
                        <PhoneInput control={control} error={errors.phone?.message} />
                        <PasswordInput register={register} error={errors.password?.message} />
                    </InputsWrapper>
                    <FormButton text='Continue' style={{marginTop: '40px'}}/>
                </Form>

                <FormLink to={DataRoute.Login} text='Already have an account? Log in'/>
            </div>
            <div className={styles.img}>
                <img src={Flower} alt="flower" />
            </div>
        </div>
    )
}
