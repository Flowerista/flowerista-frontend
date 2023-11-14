import {FC} from 'react'
import { Form, FormTitle, FormButton, NameInput, SurnameInput, PasswordInput, InputsWrapper } from '../../../../components/AppForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';

interface Inputs  {
    password: string;
    name: string;
    surname: string;
    exampleRequired: string
}

export const PersonalInformationForm: FC = () => {
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
        <div className={styles.form__wrapper}>
            <div className={styles.form__head}>
            <FormTitle text='Personal information'/>
            <p className={styles.form__descr}>Enter your details for quick ordering</p>
            </div>
            <div className={styles.form__body}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputsWrapper>
                    <NameInput register={register} error={errors.name?.message}/>
                    <SurnameInput register={register} error={errors.surname?.message}/>
                    <PasswordInput register={register} error={errors.password?.message}/>
                </InputsWrapper>
                <FormButton text='Save' colorMode='white' style={{marginTop: '40px'}}/>
            </Form>
            </div>
        </div>
    )
}
