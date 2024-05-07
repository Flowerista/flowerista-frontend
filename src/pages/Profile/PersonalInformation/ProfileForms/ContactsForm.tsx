import {FC, useEffect} from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'

import { ContactsSchema } from '../../../../utils/yup';
import { EmailInput, Form, InputsWrapper, PhoneInput } from '../../../../components/AppForm';
import { Title } from '../../../../components/Title/Title';

import styles from './styles.module.scss';
import { useAppSelector } from '../../../../store/store';
import { useTranslation } from 'react-i18next';

interface Inputs {
	email: string;
	phone: string;
}

export const ContactsForm: FC = () => {
	const { t } = useTranslation()

	const { email, phoneNumber } = useAppSelector(state => state.user.user)
	const {
		register,
		formState: {errors},
		control,
		setValue,
	} = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(ContactsSchema),
	})

	useEffect(() => {
		setValue('email', email)
		setValue('phone', `${phoneNumber}`)
	}, [email, phoneNumber, setValue])

	return (
		 <div className={styles.form__wrapper}>
			 <div className={styles.form__head}>
				 <Title text={`${t('profile.contacts.title')}`}/>
				 <p className={styles.form__descr}>{t('profile.contacts.text')}</p>
			 </div>
			 <div className={styles.form__body}>
				 <Form onSubmit={() => {
				 }}>
					 <InputsWrapper>
						 <EmailInput register={register} error={errors.email?.message}/>
						 <PhoneInput control={control} error={errors.phone?.message}/>
					 </InputsWrapper>
				 </Form>
			 </div>
		 </div>
	)
}
