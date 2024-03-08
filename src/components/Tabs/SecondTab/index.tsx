import {Form, FormError, InputsWrapper, TextInput} from '../../AppForm';
import {Button} from '../../Buttons/Button';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import styles from './styles.module.scss'
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import dayjs from 'dayjs';
import {
	setCity,
	setDate,
	setEntrance,
	setFlat,
	setHouse,
	setStreet,
	setTime,
} from '../../../store/checkout/checkout.slice';
import {CheckOutAddressSchema} from '../../../utils/yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';


interface InterfaceSecondTab {
	setIsActive: (isActive: boolean) => void
}


const SecondTab: FC<InterfaceSecondTab> = ({setIsActive}) => {
	const {t} = useTranslation()
	const dispatch = useAppDispatch()
	const {city, street, entrance, flat, house} = useAppSelector(state => state.checkout)
	const {address} = useAppSelector(state => state.user.user)
	const {
		control,
		register,
		handleSubmit,
		formState: {errors},
		reset,

	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			city: `${address && address.city ? address.city : ''}`,
			street: `${address && address.street ? address.street : ''}`,
			house: `${address && address.house ? address.house : ''}`,
			flat: `${address && address.flat ? address.flat : ''}`,
			entrance: `${address && address.entrance ? address.entrance : ''}`,
			date: undefined,
			time: undefined,
		},
		resolver: yupResolver(CheckOutAddressSchema),
	})

	const onSubmit: SubmitHandler<any> = (data) => {
		dispatch(setDate(dayjs(data.date).format('YYYY-MM-DD')))
		dispatch(setTime(dayjs(data.time).format('HH:mm')))
		dispatch(setCity(data.city))
		dispatch(setStreet(data.street))
		dispatch(setHouse(data.house))
		dispatch(setFlat(data.flat))
		dispatch(setEntrance(data.entrance))
		setIsActive(true)
		reset()
	}

	return (
		 <div className={styles.secondTab}>
			 <Form onSubmit={handleSubmit(onSubmit)}>
				 <InputsWrapper>
					 <TextInput
							label="City"
							placeholder="City"
							register={register}
							registerName="city"
							error={errors.city?.message}
							defaultValue={city}
					 />
					 <TextInput
							label="Street"
							placeholder="Street"
							register={register}
							registerName="street"
							error={errors.street?.message}
							defaultValue={street}

					 />
					 <InputsWrapper style={{flexDirection: 'row', gap: '20px'}}>
						 <TextInput
								label="House"
								placeholder="House"
								register={register}
								registerName="house"
								error={errors.house?.message}
								defaultValue={house}

						 />
						 <TextInput
								label="Entrance"
								placeholder="Entrance"
								register={register}
								registerName="entrance"
								error={errors.entrance?.message}
								defaultValue={entrance}
								required={false}

						 />
						 <TextInput
								label="Flat"
								placeholder="Flat"
								register={register}
								registerName="flat"
								error={errors.flat?.message}
								defaultValue={flat}
								required={false}
						 />
					 </InputsWrapper>
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
				 </InputsWrapper>
				 <Button text={`${t('checkout.authorized.delivery.btn3')}`} colorMode="black" style={{marginTop: '40px'}}/>
			 </Form>
		 </div>
	);
};
export default SecondTab;
