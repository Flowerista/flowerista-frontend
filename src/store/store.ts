import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {bouqueteApi} from '../services/bouquete-api/bouquete-api-service';
import {filtrationSlice} from './filtration/filtration.slice'
import {recentlyViewedSlice} from './recentlyViewed/recentlyViewed.slice'


const rootReducer = combineReducers({
	filtration: filtrationSlice.reducer,
	recentlyViewed: recentlyViewedSlice.reducer,
	[bouqueteApi.reducerPath]: bouqueteApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,

		middleware: (getDefaultMiddleware) =>
			 getDefaultMiddleware()
				  .concat(bouqueteApi.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
