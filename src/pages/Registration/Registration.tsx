import { FC, useState } from 'react'
import {useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios';

import { RegisterSchema } from '../../utils/yup';
import { DataRoute } from '../../data/routes';
import { Form, FormLink, InputsWrapper, PasswordInput, EmailInput, NameInput, SurnameInput, PhoneInput} from '../../components/AppForm' 
import { Button } from '../../components/Buttons/Button';
import { Title } from '../../components/Title/Title';

import { usePostRegistrationMutation } from '../../services/bouquete-api/bouquete-api-service';
import { IRegister } from '../../interface/register';
import RegistrationCompleted from '../../components/Modals/RegistrationCompleted/RegistrationCompleted';
import RegistrationError from '../../components/Modals/RegistrationError/RegistrationError';

import Flower from '../../assets/image/registration/flower.png'
import styles from './styles.module.scss'

type Inputs = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
}

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
    const [showRegisterCompleted, setShowRegisterCompleted] = useState<boolean>(false)
    const [showRegisterError, setShowRegisterError] = useState<boolean>(false)
    const [sendRequest] = usePostRegistrationMutation()
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
        resolver: yupResolver(RegisterSchema)
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
                try {
                    sendRequest(newData)
                    .then((response) => {
                        if ('data' in response) {
                            alert(JSON.stringify(newData))
                            setShowRegisterCompleted(true)
                            reset()
                        } else if ('error' in response) {
                            setShowRegisterError(true)
                        }
                        })
                    .catch(() => {
                        setShowRegisterError(true)
                    })
                } catch (error) {
                    setShowRegisterError(true)
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
            <RegistrationCompleted isOpen={showRegisterCompleted} setOpen={setShowRegisterCompleted}/>
            <RegistrationError isOpen={showRegisterError} setOpen={setShowRegisterError}/>
            <div className={styles.img}>
                <img src={Flower} alt="flower" />
            </div>
        </div>
    )
}
