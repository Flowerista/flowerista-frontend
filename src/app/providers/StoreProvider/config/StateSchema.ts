import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { rtkApi } from '../../../../shared/api/rtkApi.ts';
import { rtkApiAuth } from '../../../../shared/api/rtkApAuthi.ts';
import { IInitialStateFiltration } from '../../../../pages/catalogPage/model/slice/filtration.slice.ts';
import { IInitialStateModals } from '../../../../entities/modals/model/slice/modals.slice.ts';
import { IInitialStateCheckout } from '../../../../pages/checkoutPage/model/types/IInitialStateCheckout.ts';
import { IInitialStateShared } from '../../../../entities/shared/model/slice/shared.slice.ts';
import { IInitialStateCart } from '../../../../entities/cart/model/slice/cart.slice.ts';
import { InterfaceProfileInitialState } from '../../../../pages/profile/model/types/ProfileStateInterface.ts';
import { IInitialStateRecentlyViewed } from '../../../../entities/recentlyViewed/model/slice/recentlyViewed.slice.ts';

export interface StateSchema {
  modals: IInitialStateModals;
  shared: IInitialStateShared;
  cart: IInitialStateCart;
  user: InterfaceProfileInitialState;
  recentlyViewed: IInitialStateRecentlyViewed;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  [rtkApiAuth.reducerPath]: ReturnType<typeof rtkApiAuth.reducer>;

  // Асинхронные редюсеры
  checkout: IInitialStateCheckout;
  filtration: IInitialStateFiltration;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
