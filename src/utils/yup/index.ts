import * as yup from 'yup'
import {AppErrors} from '../../data/errors'

const nameValid = yup.string()
    .required(AppErrors.RequiredField)
    .min(2, AppErrors.minLengthName)
    .max(50, AppErrors.maxLengthName)
    .matches(/^[^\s]+$/, AppErrors.Spaces)
    .matches(/^\p{L}+$/u, AppErrors.onlyLetters)

const emailValid = yup.string()
    .required(AppErrors.RequiredField)
    .max(256, AppErrors.maxLengthEmail)
    .email()

const phoneValid = yup.string()
    .required(AppErrors.RequiredField)
    .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/, AppErrors.InvalidPhone)

const passwordValid = yup.string()
    .required(AppErrors.RequiredField)
    .matches(/^[^\s]+$/, AppErrors.Spaces)
    .min(8, AppErrors.minLengthPassword)
    .matches(/.*[a-z].*/, AppErrors.passwordLowLetter)
    .matches(/.*[A-Z].*/, AppErrors.passwordUpLetter)
    .matches(/.*\d.*/, AppErrors.passwordNum)
    .matches(/.*[@$!%*?&].*/, AppErrors.passwordChar)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, AppErrors.InvalidPassword)

const cityValid = yup.string()
    .required(AppErrors.RequiredField)
    .matches(/^\p{L}+$/u, AppErrors.onlyLetters)

const streetValid = yup.string()
    .required(AppErrors.RequiredField)
    .matches(/^\p{L}+$/u, AppErrors.onlyLetters)

const houseValid = yup.string()
    .required(AppErrors.RequiredField)
    .matches(/^[\p{L}\d]+$/u, AppErrors.onlyLettersOrNum)

const entranceValid = yup.string()

const flatValid = yup.string()

export const  RegisterSchema = yup
    .object({
        name: nameValid,
        surname: nameValid,
        email: emailValid,
        phone: phoneValid,
        password: passwordValid,
    }).required()

export const LoginSchema = yup
    .object({
        email: emailValid,
        password: passwordValid
    }).required()

export const RestoringAccessSchema = yup    
    .object({
        email: emailValid,
    }).required()

export const AddressSchema = yup
    .object({
        city: cityValid,
        street: streetValid,
        house: houseValid,
        entrance: entranceValid,
        flat: flatValid,
    })
    
export const ContactsSchema = yup
    .object({
        email: emailValid,
        phone: phoneValid
    }).required()

export const PersonalInformationSchema = yup
    .object({
        name: nameValid,
        surname: nameValid,
    }).required()

export const PasswordChangeSchema = yup
    .object({
        passwordNew: passwordValid,
        passwordOld: passwordValid,
    }).required()

export const ResetPassword = yup
   .object({
     password: passwordValid,
     confirm_password: passwordValid
   }).required()


export const CheckOutAddressSchema = yup
   .object({
     city: cityValid,
     street: streetValid,
     house: houseValid,
     entrance: entranceValid,
     flat: flatValid,
     date: yup.string().nullable().required("date is required"),
     time: yup.string().nullable().required("time is required"),
   }).required()

export const EmailSchema = yup
   .object({
     email: emailValid,
   }).required()
