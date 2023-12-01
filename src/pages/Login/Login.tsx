import { FC } from 'react'
import {useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"

import { DataRoute } from '../../data/routes';
import { LoginSchema } from '../../utils/yup';
import { Form, FormLink, InputsWrapper, PasswordInput, EmailInput} from '../../components/AppForm' 
import { Button } from '../../components/Buttons/Button';
import { Title } from '../../components/Title/Title';

import Flower from '../../assets/image/login/login_flower.png';
import styles from './styles.module.scss'

type Inputs = {
    password: string;
    email: string;
}

export const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(LoginSchema)
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
