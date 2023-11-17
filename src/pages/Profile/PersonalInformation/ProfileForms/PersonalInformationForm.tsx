import {FC} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Form, NameInput, SurnameInput, InputsWrapper } from '../../../../components/AppForm';
import { Button } from '../../../../components/Button/Buttons';
import { Title } from '../../../../components/Title/Title';

import styles from './styles.module.scss';
interface Inputs  {
    name: string;
    surname: string;
}

interface PersonalFormProps{
    onOpen: () => void;
}

const schemaPersonalInfo = yup
  .object({
    name: yup.string()
             .min(2, 'Be at least 2 characters long')
             .max(50, 'Length no more than 50 characters')
             .matches(/^[^\s]+$/, 'Spaces are not allowed')
             .matches(/^[A-Za-z]+$/, 'Only letters')
             .required('Required'),
    surname: yup.string()
                .min(2, 'Be at least 2 characters long')
                .max(50, 'Length no more than 50 characters')
                .matches(/^[^\s]+$/, 'Spaces are not allowed')
                .matches(/^[A-Za-z]+$/, 'Only letters')
                .required('Required'),
  })
  .required()

export const PersonalInformationForm: FC<PersonalFormProps> = ({onOpen}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(schemaPersonalInfo)
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
