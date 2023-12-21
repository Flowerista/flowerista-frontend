import {FC, useEffect} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'

import { Form, InputsWrapper, TextInput } from '../../../../components/AppForm';
import { Button } from '../../../../components/Buttons/Button';
import { Title } from '../../../../components/Title/Title';
import { AddressSchema } from '../../../../utils/yup';


import styles from './styles.module.scss';
import { useAppSelector } from '../../../../store/store';

export interface Inputs  {
    city: string;
    street: string;
    house: string;
    entrance: string;
    flat: string;
}

export const AddressForm: FC = () => {

    const {city, street, house,  entrance, flat} = useAppSelector(state => state.user.user.address)

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setValue
    } = useForm<Inputs>({
        mode: 'onBlur',
        resolver: yupResolver(AddressSchema)
    })

    useEffect(() => {
      setValue('city', city ? city : " ")
      setValue('street', street ? street : " ")
      setValue('house', house ? house : " ")
      setValue('entrance', entrance ? entrance : " ")
      setValue('flat', flat ? flat : " ")
    }, [])
    
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    return (
        <div className={styles.form__wrapper}>
            <div className={styles.form__head}>
            <Title text='Address'/>
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
                <Button text='Save' colorMode='white' style={{marginTop: '40px'}}/>
            </Form>
            </div>
        </div>
    )
}
