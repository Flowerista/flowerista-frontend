import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { rtkApi } from '../../../../shared/api/rtkApi.ts';
import $api from '../../../../shared/api/axiosApi.ts';
import { rtkApiAuth } from '../../../../shared/api/rtkApAuthi.ts';
import { cartReducer } from '../../../../entities/cart/model/slice/cart.slice.ts';
import { modalsReducer } from '../../../../entities/modals/model/slice/modals.slice.ts';
import { sharedReducer } from '../../../../entities/shared/model/slice/shared.slice.ts';
import { profileReducer } from '../../../../pages/profile/model/slice/profile/profile.slice.ts';
import { recentlyViewedReducer } from '../../../../entities/recentlyViewed/model/slice/recentlyViewed.slice.ts';
import { filtrationReducer } from '../../../../pages/catalogPage/model/slice/filtration.slice.ts';
import { checkoutReducer } from '../../../../pages/checkoutPage/model/slice/checkout.slice.ts';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    cart: cartReducer,
    modals: modalsReducer,
    shared: sharedReducer,
    user: profileReducer,
    checkout: checkoutReducer,
    filtration: filtrationReducer,
    recentlyViewed: recentlyViewedReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
    [rtkApiAuth.reducerPath]: rtkApiAuth.reducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: import.meta.env.VITE_IS_DEV ?? false,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        }
      })
        .concat(rtkApi.middleware)
        .concat(rtkApiAuth.middleware)
  });
  // eslint-disable-next-line
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
