import {FC, useEffect} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"

import { PersonalInformationSchema } from '../../../../utils/yup';
import { Form, NameInput, SurnameInput, InputsWrapper } from '../../../../components/AppForm';
import { Button } from '../../../../components/Buttons/Button';
import { Title } from '../../../../components/Title/Title';

import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import {changePersonalInfo } from '../../../../store/user/user.slice';
interface Inputs  {
    name: string;
    surname: string;
}

interface PersonalFormProps{
    onOpen: () => void;
}

export const PersonalInformationForm: FC<PersonalFormProps> = ({onOpen}) => {
    const {user: {firstName, lastName}, errorStatus, loadingStatus} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()


    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(PersonalInformationSchema),
    })

    useEffect(() => {
      setValue('name', firstName)
      setValue('surname', lastName)
    }, [firstName])
    
    
    const onSubmit: SubmitHandler<Inputs> = async ({name, surname}) => {
        const data = {firstName: name, lastName: surname}
        await dispatch(changePersonalInfo(data))
        if (errorStatus.changePersonalInfo){
            alert('error')
        } else {
            alert(JSON.stringify(data))          
        }
    }

    return (
        <div className={styles.form__wrapper}>
            <div className={styles.form__head}>
            <Title text='Personal information'/>
            <p className={styles.form__descr}>Enter your details for quick ordering</p>
            </div>
            <div className={styles.form__body}>
            {loadingStatus.getProfile ? 'Loading...' :    
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
                    <Button text='Save' colorMode='white' style={{marginTop: '40px'}} loading={loadingStatus.changePersonalInfo}/>
                </Form>
            }
            </div>
        </div>
    )
}
