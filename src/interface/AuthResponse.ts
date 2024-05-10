import { IUser } from './global.ts';

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: IUser;
}
