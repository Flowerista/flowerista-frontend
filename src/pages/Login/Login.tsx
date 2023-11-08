import { FC } from 'react'
import {useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { DataRoute } from '../../data/routes';
import { Form, FormTitle, FormButton, FormLink, InputsWrapper, PasswordInput, EmailInput} from '../../components/AppForm' 

import Flower from '../../assets/image/login/login_flower.png';
import styles from './styles.module.scss'

type Inputs = {
    password?: string;
    email?: string;
    exampleRequired: string
}

export const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    
    return (
        <div className={styles.login}>
            <div>
                <FormTitle text='Log In'/>
                
                <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '50px'}}>
                    <InputsWrapper>
                        <EmailInput register={register} error={errors.email?.message} />
                        <PasswordInput register={register} error={errors.password?.message}/>
                    </InputsWrapper>
                    <Link to={DataRoute.Registration} className={styles.login__link}>
                        Forgot your password?
                    </Link>
                    <FormButton text='Continue'/>
                </Form>

                <FormLink to={DataRoute.Registration} text='Not registered yet?'/>
            </div>
            <div className={styles.img}>
                <img src={Flower} alt="flower" />
            </div>
        </div>
    )
}
