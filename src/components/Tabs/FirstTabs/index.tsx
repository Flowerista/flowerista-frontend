import styles from './styles.module.scss'
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers';
import {Button} from '../../Buttons/Button';
import {FC} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Form, FormError} from '../../AppForm';
import {yupResolver} from '@hookform/resolvers/yup';
import {setCity, setDate, setHouse, setStreet, setTime} from '../../../store/checkout/checkout.slice';
import dayjs from 'dayjs';
import {useAppDispatch} from '../../../store/store';
import * as yup from 'yup';
import {useTranslation} from 'react-i18next';

interface IFirstTab {
	setIsActive: (isActive: boolean) => void;
}

interface Inputs {
	date?: string | undefined;
	time?: string | undefined;
}

const FirstTab: FC<IFirstTab> = ({setIsActive}) => {
	const {t} = useTranslation()
	const dispatch = useAppDispatch()

	const {
		control,
		register,
		handleSubmit,
		formState: {errors},
		reset,

	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			date: undefined,
			time: undefined,
		},
		resolver: yupResolver(yup
			 .object({
				 date: yup.string().nullable().required('date is required')
						.test('not-past', 'The date cannot be less than today.', function (value) {
							if (!value) return true;
							const selectedDate = dayjs(value).format('YYYY-MM-DD')
							return selectedDate >= dayjs(new Date()).format('YYYY-MM-DD');
						}),
				 time: yup.string().nullable().required('time is required'),
			 }).required()),
	})

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(setDate(dayjs(data.date).format('YYYY-MM-DD')))
		dispatch(setTime(dayjs(data.time).format('HH:mm')))
		dispatch(setCity('Київ'))
		dispatch(setStreet('Перемоги'))
		dispatch(setHouse('45'))
		setIsActive(true)
		reset()
	}

	return (
		 <div className={styles.firstTab}>
			 <Form onSubmit={handleSubmit(onSubmit)}>
				 <span>{`${t('checkout.authorized.delivery.street')}`}</span>
				 <div className={styles.wrappPicker}>
					 <Controller
							name="date"
							control={control}
							render={({field}) => (
								 <div>
									 <DatePicker
											{...field}
											className={styles.datePicker}
											label="Date"
											sx={{
												'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
													border: 'none',
													borderBottom: '2px solid #C5B4B9',
													borderRadius: '0px',
												},      // at page load
												'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
													border: 'none',
													borderBottom: '2px solid #231104',
													borderRadius: '0px',
												},  // at hover state
												'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
													border: 'none',
													borderBottom: '2px solid #231104',
													borderRadius: '0px',
												}, // at focused state

											}}

									 />
									 {errors.date?.message && <FormError error={errors.date.message}/>}
								 </div>
							)}
					 />
					 <Controller
							name="time"
							control={control}
							render={({field}) => (
								 <div>
									 <TimePicker
											{...field}
											className={styles.timePicker}
											sx={{
												'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
													border: 'none',
													borderBottom: '2px solid #C5B4B9',
													borderRadius: '0px',
												},      // at page load
												'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
													border: 'none',
													borderBottom: '2px solid #231104',
													borderRadius: '0px',
												},  // at hover state
												'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
													border: 'none',
													borderBottom: '2px solid #231104',
													borderRadius: '0px',
												}, // at focused state

											}}
									 />
									 {errors.time?.message && <FormError error={errors.time.message}/>}

								 </div>
							)}
					 />
				 </div>
				 <Button text={`${t('checkout.authorized.delivery.btn3')}`} type={'submit'} colorMode="black"
				         style={{marginTop: '40px'}}/>
			 </Form>
		 </div>
	);
};
export default FirstTab;
