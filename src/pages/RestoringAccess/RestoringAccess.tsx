import { FC } from 'react'
import {useForm, SubmitHandler } from 'react-hook-form';
import {Form, FormButton, FormLink, InputsWrapper, EmailInput, FormTitle} from '../../components/AppForm'
import { DataRoute } from '../../data/routes'

import Flower from '../../assets/image/restoring_access/restoring_access.png'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom';

interface Inputs {
    email: string;
    exampleRequired: string;
}

export const RestoringAccess: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: 'onBlur'
    })
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        navigate(DataRoute.RestoringAccessSuccess)
        reset()
    }

    return (
        <div className={styles.restoring}>
            <div className={styles.restoring__wrapper}>
                <FormTitle text='Restoring access'/>
                <div className={styles.restoring__descr}>
                    Forgot your password? Let us know your email address and we will send you a link to reset your password.
                </div>
                <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '40px'}}>
                    <InputsWrapper>
                        <EmailInput register={register} error={errors.email?.message}/>
                    </InputsWrapper>
                    <FormButton text='Send' style={{marginTop: '40px'}}/>
                    <FormLink text='Cancel' to={DataRoute.Login}/>
                </Form>
            </div>
            <div className={styles.img}>
                <img src={Flower} alt="flower" />
            </div>
        </div>
    )
}
