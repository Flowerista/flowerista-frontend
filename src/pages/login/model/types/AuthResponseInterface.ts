import { AddressInterface } from '../../../../features/profileAddressForm/model/types/addressInterface.ts';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address?: AddressInterface;
}

export interface AuthResponseInterface {
  access_token: string;
  refresh_token: string;
  user: IUser;
}
