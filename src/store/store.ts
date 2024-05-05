import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { filtrationSlice } from './filtration/filtration.slice';
import { recentlyViewedSlice } from './recentlyViewed/recentlyViewed.slice';
import { cartSlice } from './cart/cart.slice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { checkOutSlice } from './checkout/checkout.slice';
import { modalsSlice } from './modals/modals.slice';
import { checkOutOrderIdSlice } from './checkout/checkoutOrderId.slice';
import { rtkApi } from '../http/rtkApi';
import { rtkApiAuth } from '../http/rtkApAuthi';
import { profileSlice } from './profile/profile.slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'checkoutOrderId']
};

const rootReducer = combineReducers({
  filtration: filtrationSlice.reducer,
  recentlyViewed: recentlyViewedSlice.reducer,
  cart: cartSlice.reducer,
  user: profileSlice.reducer,
  checkout: checkOutSlice.reducer,
  checkoutOrderId: checkOutOrderIdSlice.reducer,
  modals: modalsSlice.reducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
  [rtkApiAuth.reducerPath]: rtkApiAuth.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
        .concat(rtkApi.middleware)
        .concat(rtkApiAuth.middleware)
  });
};
export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
