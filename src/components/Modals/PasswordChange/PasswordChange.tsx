import {FC} from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from 'react-hook-form';

import Modal from '../Modal';
import { Form, PasswordInput, InputsWrapper } from '../../AppForm';
import { PasswordChangeSchema } from '../../../utils/yup';
import { Title } from '../../Title/Title';
import { Button } from '../../Button/Buttons';

import styles from './styles.module.scss'

interface Inputs {
    passwordNew: string
    passwordOld: string
}

interface PasswordChangeProps {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
    showNext: (state: boolean) => void;
}

const PasswordChange: FC<PasswordChangeProps> = ({isOpen, setOpen, showNext}) => {
    const onClose = () => {
        setOpen(false)
    }
    const showSuccessModal = () => {
        showNext(true)
    }
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(PasswordChangeSchema)
    })
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        reset()
        onClose()
        showSuccessModal()
    }
  return (
    <Modal className={styles.modal} isOpen={isOpen} onClose={onClose}>
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
                <PasswordInput register={register} error={errors.passwordOld?.message} registerName={'passwordOld'} label={'Old password'}/>
                <PasswordInput register={register} error={errors.passwordNew?.message} registerName={'passwordNew'} label={'New password'}/>
            </InputsWrapper>
            <Button text='Сhange password' style={{marginTop: '50px'}}/>
        </Form>
    </Modal>
  )
}

export default PasswordChange;