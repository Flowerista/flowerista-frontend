import {FC} from 'react'
import Modal from '../Modal';
import { Form, PasswordInput, InputsWrapper } from '../../AppForm';
import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './styles.module.scss'
import { Title } from '../../Title/Title';
import { Button } from '../../Button/Buttons';

interface Inputs {
    passwordNew: string
    passwordOld: string
}

const PasswordChange: FC = () => {
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
    <Modal className={styles.modal}>
        <Title text='Password Change'/>
        <ol className={styles.modal__list}>
            <li className={styles.modal__item}>
                To change your password, enter your current password and the new password in the respective fields, click "Change Password" to save the changes
            </li>
            <li className={styles.modal__item}>
                After successfully changing your password, you can log in to your account using the new credentials.
            </li>
        </ol>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputsWrapper>
                <PasswordInput register={register} error={errors.passwordOld?.message}/>
                <PasswordInput register={register} error={errors.passwordNew?.message}/>
            </InputsWrapper>
            <Button text='Сhange password' style={{marginTop: '50px'}}/>
        </Form>
    </Modal>
  )
}

export default PasswordChange;