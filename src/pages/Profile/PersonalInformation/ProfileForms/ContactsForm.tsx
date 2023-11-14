import {FC} from 'react'
import { Form, FormTitle, FormButton, PhoneInput, EmailInput, InputsWrapper } from '../../../../components/AppForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';

interface Inputs  {
    email: string;
    phone: string;
    exampleRequired: string
}

export const ContactsForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control
    } = useForm<Inputs>({
        mode: 'onBlur'
    })
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    return (
        <div className={styles.form__wrapper}>
            <div className={styles.form__head}>
            <FormTitle text='Contacts'/>
            <p className={styles.form__descr}>Enter your details for quick ordering</p>
            </div>
            <div className={styles.form__body}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputsWrapper>
                    <EmailInput register={register} error={errors.email?.message}/>
                    <PhoneInput control={control} error={errors.phone?.message}/>
                </InputsWrapper>
                <FormButton text='Save' colorMode='white' style={{marginTop: '40px'}}/>
            </Form>
            </div>
        </div>
    )
}