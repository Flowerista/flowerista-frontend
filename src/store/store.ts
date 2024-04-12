import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {bouqueteApi} from '../services/bouquete-api/bouquete-api-service';
import {authServiceApi} from '../services/AuthService/rtk-auth-service';
import {filtrationSlice} from './filtration/filtration.slice'
import {recentlyViewedSlice} from './recentlyViewed/recentlyViewed.slice'
import {cartSlice} from './cart/cart.slice';

import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import {authSlice} from './auth/auth.slice';
import {userSlice} from './user/user.slice';
import {wishlistSlice} from './wishlist/wishlist.slice'
import {checkOutSlice} from './checkout/checkout.slice';
import {modalsSlice} from './modals/modals.slice';
import {checkOutOrderIdSlice} from './checkout/checkoutOrderId.slice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'checkoutOrderId'],
}

const rootReducer = combineReducers({
	filtration: filtrationSlice.reducer,
	recentlyViewed: recentlyViewedSlice.reducer,
	auth: authSlice.reducer,
	cart: cartSlice.reducer,
	user: userSlice.reducer,
	wishlist: wishlistSlice.reducer,
	checkout: checkOutSlice.reducer,
	checkoutOrderId: checkOutOrderIdSlice.reducer,
	modals: modalsSlice.reducer,
	[bouqueteApi.reducerPath]: bouqueteApi.reducer,
	[authServiceApi.reducerPath]: authServiceApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
	return configureStore({
		reducer: persistedReducer,

		middleware: (getDefaultMiddleware) =>
			 getDefaultMiddleware({
				 serializableCheck: {
					 ignoredActions: [
						 FLUSH,
						 REHYDRATE,
						 PAUSE,
						 PERSIST,
						 PURGE,
						 REGISTER,
						 'auth/login/fulfilled',
						 'auth/checkAuth/fulfilled',
						 'auth/logout/fulfilled',
						 'user/profile/fulfilled',
						 'user/changeAddress/fulfilled',
						 'user/changePassword/fulfilled',
						 'user/changePersonalInfo/fulfilled',
						 'wishlist/getWishlist/fulfilled',
						 'wishlist/addCard/fulfilled',
						 'wishlist/deleteCard/fulfilled',
					 ],
				 },
			 }).concat(bouqueteApi.middleware)
					.concat(authServiceApi.middleware),
	})
}
export const store = setupStore();
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
