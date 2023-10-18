import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {testApi} from "../services/test-api/test-api-service";

const rootReducer = combineReducers({
	[testApi.reducerPath]: testApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,

		middleware: (getDefaultMiddleware) =>
			 getDefaultMiddleware()
					.concat(testApi.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
