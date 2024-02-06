import {FC} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup'

import {EmailInput, Form, FormLink, InputsWrapper} from '../../components/AppForm'
import {Button} from '../../components/Buttons/Button';
import {Title} from '../../components/Title/Title';
import {DataRoute} from '../../data/routes'
import {RestoringAccessSchema} from '../../utils/yup';

import Flower from '../../assets/image/restoring_access/restoring_access.png'
import styles from './styles.module.scss'
import {useResetPasswordMutation} from '../../services/AuthService/rtk-auth-service';
import {useTranslation} from 'react-i18next';

interface Inputs {
	email: string;
}

export const RestoringAccess: FC = () => {
	const {t} = useTranslation()
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(RestoringAccessSchema),
	})
	const navigate = useNavigate();

	const [resetPassword] = useResetPasswordMutation()

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		await resetPassword(String(data.email))
		navigate(DataRoute.RestoringAccessSuccess)
		reset()
	}

	return (
		 <div className={styles.restoring}>
			 <div className={styles.restoring__wrapper}>
				 <Title text={`${t('restoring.success.title')}`}/>
				 <div className={styles.restoring__descr}>
					 {t('restoring.success.desc')}
				 </div>
				 <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '40px'}}>
					 <InputsWrapper>
						 <EmailInput register={register} error={errors.email?.message}/>
					 </InputsWrapper>
					 <Button text={`${t('restoring.success.btn1')}`} style={{marginTop: '40px'}}/>
					 <FormLink text={`${t('restoring.success.btn2')}`} to={DataRoute.Login}/>
				 </Form>
			 </div>
			 <div className={styles.img}>
				 <img src={Flower} alt="flower"/>
			 </div>
		 </div>
	)
}
