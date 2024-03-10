import {FC} from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import {SubmitHandler, useForm} from 'react-hook-form';
import Modal from '../Modal';
import {Form, InputsWrapper, PasswordInput} from '../../AppForm';
import {PasswordChangeSchema} from '../../../utils/yup';
import {Title} from '../../Title/Title';
import {Button} from '../../Buttons/Button';

import styles from './styles.module.scss'
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {changePassword} from '../../../store/user/user.slice';
import {useTranslation} from 'react-i18next';

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
	const {t} = useTranslation()
	const {errorStatus, loadingStatus} = useAppSelector(state => state.user)
	const dispatch = useAppDispatch();

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
		reset,
	} = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(PasswordChangeSchema),
	})

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const passwords = {
			currentPassword: data.passwordOld,
			newPassword: data.passwordNew,
		}
		await dispatch(changePassword(passwords))
		if (errorStatus.changePassword) {
			alert('Error')
		} else {
			alert(JSON.stringify(data))
			reset()
			onClose()
			showSuccessModal()
		}
	}
	return (
		 <Modal className={styles.modal} isOpen={isOpen} onClose={onClose}>
			 <Title text={`${t('profile.modal.title')}`}/>
			 <ol className={styles.modal__list}>
				 <li className={styles.modal__item}>
					 {t('profile.modal.text1')}
				 </li>
				 <li className={styles.modal__item}>
					 {t('profile.modal.text2')}
				 </li>
			 </ol>
			 <Form onSubmit={handleSubmit(onSubmit)}>
				 <InputsWrapper>
					 <PasswordInput register={register} error={errors.passwordOld?.message} registerName={'passwordOld'}
					                label={`${t('profile.modal.input1')}`}/>
					 <PasswordInput register={register} error={errors.passwordNew?.message} registerName={'passwordNew'}
					                label={`${t('profile.modal.input2')}`}/>
				 </InputsWrapper>
				 <Button text={`${t('profile.modal.btn')}`} style={{marginTop: '50px'}} loading={loadingStatus.changePassword}/>
			 </Form>
		 </Modal>
	)
}

export default PasswordChange;
