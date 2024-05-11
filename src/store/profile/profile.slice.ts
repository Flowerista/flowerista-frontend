import { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../shared/types/global.ts';
import { buildSlice } from '../buildSlice.ts';

interface IInitialState {
  user: IUser | null;
}

const initialState: IInitialState = {
  user: null
};

export const profileSlice = buildSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    logoutAll: (state) => {
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
    }
  }
});

export const { useActions: useProfileActions } = profileSlice;
export const logoutAll = profileSlice.actions.logoutAll;
