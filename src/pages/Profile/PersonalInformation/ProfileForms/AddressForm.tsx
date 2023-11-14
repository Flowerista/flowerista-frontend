import {FC} from 'react'
import { Form, FormTitle, FormButton, NameInput, SurnameInput, InputsWrapper, TextInput } from '../../../../components/AppForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';

interface Inputs  {
    city: string;
    street: string;
    house: string;
    entrance: string;
    flat: string;
    exampleRequired: string
}

export const AddressForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Inputs>({
        mode: 'onBlur'
    })
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    return (
        <div className={styles.form__wrapper}>
            <div className={styles.form__head}>
            <FormTitle text='Address'/>
            <p className={styles.form__descr}>Enter your details for quick ordering</p>
            </div>
            <div className={styles.form__body}>
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
                </InputsWrapper>
                <FormButton text='Save' colorMode='white' style={{marginTop: '40px'}}/>
            </Form>
            </div>
        </div>
    )
}
