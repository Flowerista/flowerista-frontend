import { buildSlice } from '../../../../shared/lib/store';
import { PayloadAction } from '@reduxjs/toolkit';
import i18next from 'i18next';

export interface IInitialStateShared {
  lang: string;
}

const initialState: IInitialStateShared = {
  lang: localStorage.getItem('selectedLanguage') || i18next.language
};

export const sharedSlice = buildSlice({
  name: 'shared',
  initialState,
  reducers: {
    setLang: (state, { payload }: PayloadAction<string>) => {
      state.lang = payload;
    }
  }
});

export const {
  useActions: useSharedActions,
  actions: sharedAction,
  reducer: sharedReducer
} = sharedSlice;
