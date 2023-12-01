import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {bouqueteApi} from '../services/bouquete-api/bouquete-api-service';
import {filtrationSlice} from './filtration/filtration.slice'
import {recentlyViewedSlice} from './recentlyViewed/recentlyViewed.slice'
import { cartSlice } from './cart/cart.slice';
import { 
	persistStore, 
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER, 
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
  }

const rootReducer = combineReducers({
	filtration: filtrationSlice.reducer,
	recentlyViewed: recentlyViewedSlice.reducer,
	cart: cartSlice.reducer,
	[bouqueteApi.reducerPath]: bouqueteApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
	return configureStore({
		reducer: persistedReducer,

		middleware: (getDefaultMiddleware) =>
			 getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			  }).concat(bouqueteApi.middleware)
	})
}
export const store = setupStore();
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
