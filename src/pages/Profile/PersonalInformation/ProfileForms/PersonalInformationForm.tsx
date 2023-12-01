import {FC} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"

import { PersonalInformationSchema } from '../../../../utils/yup';
import { Form, NameInput, SurnameInput, InputsWrapper } from '../../../../components/AppForm';
import { Button } from '../../../../components/Buttons/Button';
import { Title } from '../../../../components/Title/Title';

import styles from './styles.module.scss';
interface Inputs  {
    name: string;
    surname: string;
}

interface PersonalFormProps{
    onOpen: () => void;
}

export const PersonalInformationForm: FC<PersonalFormProps> = ({onOpen}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(PersonalInformationSchema)
    })
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    return (
        <div className={styles.form__wrapper}>
            <div className={styles.form__head}>
            <Title text='Personal information'/>
            <p className={styles.form__descr}>Enter your details for quick ordering</p>
            </div>
            <div className={styles.form__body}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputsWrapper>
                    <NameInput register={register} error={errors.name?.message}/>
                    <SurnameInput register={register} error={errors.surname?.message}/>
                    <div
                        className={styles.password}
                        onClick={onOpen}
                    >
                        Сhange password
                    </div>
                </InputsWrapper>
                <Button text='Save' colorMode='white' style={{marginTop: '40px'}}/>
            </Form>
            </div>
        </div>
    )
}
