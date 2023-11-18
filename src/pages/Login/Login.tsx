import { FC } from 'react'
import {useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { DataRoute } from '../../data/routes';
import { Form, FormLink, InputsWrapper, PasswordInput, EmailInput} from '../../components/AppForm' 
import { Button } from '../../components/Button/Buttons';
import { Title } from '../../components/Title/Title';

import Flower from '../../assets/image/login/login_flower.png';
import styles from './styles.module.scss'

type Inputs = {
    password: string;
    email: string;
}

const schemaLogin = yup
  .object({
    email: yup.string()
              .max(256, 'Length no more than 256 characters')
              .email()
              .required('Required'),
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

export const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(schemaLogin)
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    
    return (
        <div className={styles.login}>
            <div>
                <Title text='Log In'/>
                
                <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '50px'}}>
                    <InputsWrapper>
                        <EmailInput register={register} error={errors.email?.message} />
                        <PasswordInput register={register} error={errors.password?.message}/>
                    </InputsWrapper>
                    <Link to={DataRoute.RestoringAccess} className={styles.login__link}>
                        Forgot your password?
                    </Link>
                    <Button text='Continue'/>
                </Form>

                <FormLink to={DataRoute.Registration} text='Not registered yet?'/>
            </div>
            <div className={styles.img}>
                <img src={Flower} alt="flower" />
            </div>
        </div>
    )
}
