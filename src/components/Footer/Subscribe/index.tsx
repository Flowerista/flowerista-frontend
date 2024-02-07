import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import {BsArrowRight} from 'react-icons/bs';
import styles from '../styles.module.scss';
import {yupResolver} from '@hookform/resolvers/yup';
import {EmailSchema} from '../../../utils/yup';
import FormError from '../../AppForm/FormError/FormError';
import {useSubscriptionMutation} from '../../../services/AuthService/rtk-auth-service';

interface FormData {
	email: string;
}

export const Subscribe: FC = () => {
	const [subscription] = useSubscriptionMutation()
	const {t} = useTranslation();
	const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>(
		 {
			 mode: 'onBlur',
			 resolver: yupResolver(EmailSchema),
		 },
	);

	const onSubmit = async (data: FormData) => {
		await subscription(data)
		reset()
	};

	return (
		 <div className={styles.footer__subscribe}>
			 <h3>{t('footer.subscribe')}</h3>
			 <p>{t('footer.subscribe_description')}</p>
			 <form onSubmit={handleSubmit(onSubmit)}>
				 <input type="text" placeholder="E-mail" {...register('email')} />
				 <button type="submit">
					 <span>{t('footer.btn')}</span>
					 <BsArrowRight style={{fontSize: '24px', fill: 'white'}}/>
				 </button>
				 {errors.email && <div style={{marginRight: '150px'}}><FormError error={errors.email.message}/></div>}
			 </form>
		 </div>
	);
};
