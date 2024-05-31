import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '../../../../../shared/lib/store';
import { InterfaceProfileInitialState } from '../../types/ProfileStateInterface.ts';
import { IUser } from '../../../../login/model/types/AuthResponseInterface.ts';
import Cookies from 'js-cookie';

const getUserFromLocalStorage = (): IUser | null => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

const initialState: InterfaceProfileInitialState = {
  user: getUserFromLocalStorage()
};

export const profileSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
      localStorage.setItem('user', JSON.stringify(payload));
    },
    logoutAll: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      Cookies.remove('token');
      fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });
    }
  }
});

export const {
  useActions: useProfileActions,
  actions: profileActions,
  reducer: profileReducer
} = profileSlice;
export const logoutAll = profileSlice.actions.logoutAll;
