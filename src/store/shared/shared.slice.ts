import { buildSlice } from '../buildSlice.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import i18next from 'i18next';

interface IInitialState {
  lang: string;
}

const initialState: IInitialState = {
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

export const { useActions: useSharedActions } = sharedSlice;
