import * as yup from 'yup';
import { AppErrors } from '../../consts/inputsErrors.ts';

export const nameValid = yup
  .string()
  .required(AppErrors.RequiredField)
  .min(2, AppErrors.minLengthName)
  .max(50, AppErrors.maxLengthName)
  .matches(/^[^\s]+$/, AppErrors.Spaces)
  .matches(/^\p{L}+$/u, AppErrors.onlyLetters);

export const emailValid = yup
  .string()
  .required(AppErrors.RequiredField)
  .max(256, AppErrors.maxLengthEmail)
  .matches(
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/,
    AppErrors.InvalidEmail
  );

export const phoneValid = yup
  .string()
  .required(AppErrors.RequiredField)
  .matches(
    /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/,
    AppErrors.InvalidPhone
  );

export const passwordValid = yup
  .string()
  .required(AppErrors.RequiredField)
  .matches(/^[^\s]+$/, AppErrors.Spaces)
  .min(8, AppErrors.minLengthPassword)
  .matches(/.*[a-z].*/, AppErrors.passwordLowLetter)
  .matches(/.*[A-Z].*/, AppErrors.passwordUpLetter)
  .matches(/.*\d.*/, AppErrors.passwordNum)
  .matches(/.*[@$!%*?&].*/, AppErrors.passwordChar)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    AppErrors.InvalidPassword
  );

export const cityValid = yup
  .string()
  .required(AppErrors.RequiredField)
  .matches(/^\p{L}+$/u, AppErrors.onlyLetters);

export const streetValid = yup
  .string()
  .required(AppErrors.RequiredField)
  .matches(/^[\p{L}\s]+$/u, AppErrors.onlyLetters);

export const houseValid = yup
  .string()
  .required(AppErrors.RequiredField)
  .matches(/^[\p{L}\d]+$/u, AppErrors.onlyLettersOrNum);

export const entranceValid = yup.string();

export const flatValid = yup.string();
