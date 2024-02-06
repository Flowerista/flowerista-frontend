import {FC} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup'

import {DataRoute} from '../../data/routes';
import {LoginSchema} from '../../utils/yup';
import {EmailInput, Form, FormLink, InputsWrapper, PasswordInput} from '../../components/AppForm'
import {Button} from '../../components/Buttons/Button';
import {Title} from '../../components/Title/Title';

import Flower from '../../assets/image/login/login_flower.png';
import styles from './styles.module.scss'
import {login} from '../../store/auth/auth.slice';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {useTranslation} from 'react-i18next';

type Inputs = {
	password: string;
	email: string;
}

export const Login: FC = () => {
	const {t} = useTranslation()
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const {loadingStatus} = useAppSelector(state => state.auth)
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(LoginSchema),
	})

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		await dispatch(login(data))
		alert(JSON.stringify(data))
		reset()
		navigate(DataRoute.PersonalInformation)
	}

	return (
		 <div className={styles.login}>
			 <div>
				 <Title text={`${t('login.title')}`}/>

				 <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '50px'}}>
					 <InputsWrapper>
						 <EmailInput register={register} error={errors.email?.message}/>
						 <PasswordInput register={register} error={errors.password?.message}/>
					 </InputsWrapper>
					 <Link to={DataRoute.RestoringAccess} className={styles.login__link}>
						 {t('login.btn1')}
					 </Link>
					 <Button text={`${t('login.btn2')}`} loading={loadingStatus}/>
				 </Form>

				 <FormLink to={DataRoute.Registration} text={`${t(`login.btn3`)}`}/>
			 </div>
			 <div className={styles.img}>
				 <img src={Flower} alt="flower"/>
			 </div>
		 </div>
	)
}
