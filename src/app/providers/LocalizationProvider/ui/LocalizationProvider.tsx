import { FC, ReactNode } from 'react';
import { LocalizationProvider as Local } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export interface ILocalizationProvider {
  children: ReactNode;
}

export const LocalizationProvider: FC<ILocalizationProvider> = ({
  children
}) => {
  return <Local dateAdapter={AdapterDayjs}>{children}</Local>;
};
