import {FC} from 'react'

import Flower from '../../assets/image/restoring_access/restoring_success.png'
import styles from './styles.module.scss'
import {Title} from '../../components/Title/Title';
import {Form, InputsWrapper, PasswordInput} from '../../components/AppForm';
import {useNavigate} from 'react-router-dom';
import {Button} from '../../components';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ResetPassword} from '../../utils/yup';
import axios from 'axios';
import {DataRoute} from '../../data/routes';

export const PasswordRecovery: FC = () => {
	const navigate = useNavigate();

	const token = new URLSearchParams(window.location.search).get("token")

	const {
		register,
		handleSubmit,
		formState: {errors},
		reset
	} = useForm<{password:string,confirm_password:string}>({
		mode: 'onBlur',
		resolver: yupResolver(ResetPassword)
	})

	const onSubmit: SubmitHandler<{password:string,confirm_password:string}> = async(data) => {
				try {
					await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/changePassword`,{
						passwordRepeated:data.confirm_password,
						password:data.password,
						token:token
					})
					reset()
				}catch (e){
					console.log(e)
				}
				navigate(DataRoute.Home)
	}

	return (
		 <div className={styles.restoring}>
			 <div className={styles.restoring__wrapper}>
				 <Title text='Password Recovery'/>
				 <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: '50px'}}>
					 <InputsWrapper>
						 <PasswordInput registerName={"password"} placeholder={"Enter Password"} register={register} error={errors.password?.message} />
						 <PasswordInput registerName={"confirm_password"} placeholder={"Enter Confirm Password"} register={register} error={errors.confirm_password?.message}/>
					 </InputsWrapper>
					 <Button text='Save'/>
				 </Form>
			 </div>
			 <div className={styles.img}>
				 <img src={Flower} alt="flower" />
			 </div>
		 </div>
	)
}
