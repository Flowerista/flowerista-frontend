import {Inputs} from '../../../pages/Profile/PersonalInformation/ProfileForms/AddressForm';
import {Form, InputsWrapper, TextInput} from '../../AppForm';
import {Button} from '../../Buttons/Button';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {AddressSchema} from '../../../utils/yup';
import styles from './styles.module.scss'
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers';

const SecondTab = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset
	} = useForm<Inputs>({
		mode: 'onBlur',
		defaultValues: {
			entrance: ' ',
			flat: ' '
		},
		resolver: yupResolver(AddressSchema)
	})

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		alert(JSON.stringify(data))
		reset()
	}


	return (
		 <div className={styles.secondTab}>
			 <Form onSubmit={handleSubmit(onSubmit)}>
				 <InputsWrapper>
					 <TextInput
							label='City'
							placeholder='City'
							register={register}
							registerName='city'
							error={errors.city?.message}
					 />
					 <TextInput
							label='Street'
							placeholder='Street'
							register={register}
							registerName='street'
							error={errors.street?.message}
					 />
					 <InputsWrapper style={{flexDirection: 'row', gap: '20px'}}>
						 <TextInput
								label='House'
								placeholder='House'
								register={register}
								registerName='house'
								error={errors.house?.message}
						 />
						 <TextInput
								label='Entrance'
								placeholder='Entrance'
								register={register}
								registerName='entrance'
								error={errors.entrance?.message}
						 />
						 <TextInput
								label='Flat'
								placeholder='Flat'
								register={register}
								registerName='flat'
								error={errors.flat?.message}
						 />
					 </InputsWrapper>
					 <div className={styles.wrappPicker}>
						 <DatePicker
							  /*@ts-ignore*/
							  {...(register('date') as any)}
							  className={styles.datePicker}
							  label="Date"
						             sx={{
							             '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #C5B4B9",borderRadius:"0px"},      // at page load
							             '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #231104",borderRadius:"0px"},  // at hover state
							             '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #231104",borderRadius:"0px"}, // at focused state

						             }}

						 />
						 <TimePicker
							  className={styles.timePicker}
							  sx={{
								  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #C5B4B9",borderRadius:"0px"},      // at page load
								  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #231104",borderRadius:"0px"},  // at hover state
								  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #231104",borderRadius:"0px"}, // at focused state

							  }}
						 />
					 </div>
				 </InputsWrapper>
				 <Button text='Continue' colorMode='black' style={{marginTop: '40px'}}/>
			 </Form>
		 </div>
	);
};
export default SecondTab;
