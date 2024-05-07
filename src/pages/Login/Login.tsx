import {FC, useEffect} from 'react'
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
import {useAppDispatch} from '../../store/store';
import {useTranslation} from 'react-i18next';
import {useLazyGetCheckEmailQuery} from '../../services/AuthService/checkEmail/checkEmail';
import {useLoginMutation} from '../../services/AuthService/login/login';

type Inputs = {
	password: string;
	email: string;
}


const Login: FC = () => {

	const {t} = useTranslation()
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const [setLogin, {data, isLoading, error}] = useLoginMutation()
	const [checkEmail] = useLazyGetCheckEmailQuery()

	const {
		register,
		handleSubmit,
		formState: {errors},
		setError,
		reset,
	} = useForm<Inputs>({
		mode: 'onBlur',
		resolver: yupResolver(LoginSchema),
	})

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const {data: checkedEmail} = await checkEmail(data.email)
		if (!checkedEmail) {
			setError('email', {type: 'chackEmail', message: 'This email is not registered'})
		} else {
			await setLogin(data)
		}
	}

	useEffect(() => {
		if (error) {
			setError('password', {type: 'setPasswordError', message: 'Login failed. Wrong password or email not confirmed'})
		} else if (data) {
			localStorage.setItem('token', data.access_token)
			reset()
			navigate(DataRoute.PersonalInformation)
		}
	}, [data, error, setError]);

	return (
		 <div className={styles.login}>
			 <div className={styles.login__container}>
				 <Title text={`${t('login.title')}`}/>
				 <Form onSubmit={handleSubmit(onSubmit)}>
					 <InputsWrapper>
						 <EmailInput register={register} error={errors.email?.message}/>
						 <PasswordInput register={register} error={errors.password?.message}/>
					 </InputsWrapper>
					 <Link to={DataRoute.RestoringAccess} className={styles.login__link}>
						 {t('login.btn1')}
					 </Link>
					 <Button text={`${t('login.btn2')}`} loading={isLoading}/>
				 </Form>

				 <FormLink to={DataRoute.Registration} text={`${t(`login.btn3`)}`}/>
			 </div>
			 <div className={styles.img}>
				 <img src={Flower} alt="flower"/>
			 </div>
		 </div>
	)
}
export default Login
