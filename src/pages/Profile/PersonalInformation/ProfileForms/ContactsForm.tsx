import {FC} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"

import { ContactsSchema } from '../../../../utils/yup';
import { Form, PhoneInput, EmailInput, InputsWrapper } from '../../../../components/AppForm';
import { Button } from '../../../../components/Buttons/Button';
import { Title } from '../../../../components/Title/Title';

import styles from './styles.module.scss';
interface Inputs  {
    email: string;
    phone: string;
}

export const ContactsForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(ContactsSchema)
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