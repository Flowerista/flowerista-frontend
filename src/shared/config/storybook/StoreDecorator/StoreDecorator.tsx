import {
  StateSchema,
  StoreProvider
} from '../../../../app/providers/StoreProvider';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx';
import { StoryFn } from '@storybook/react';
import { cartReducer } from '../../../../entities/cart';
import { modalsReducer } from '../../../../entities/modals/model/slice/modals.slice.ts';
import { sharedReducer } from '../../../../entities/shared/model/slice/shared.slice.ts';
import { profileReducer } from '../../../../pages/profile/model/slice/profile/profile.slice.ts';
import { checkoutReducer } from '../../../../pages/checkoutPage/model/slice/checkout.slice.ts';
import { filtrationReducer } from '../../../../pages/catalogPage/model/slice/filtration.slice.ts';
import { recentlyViewedReducer } from '../../../../entities/recentlyViewed/model/slice/recentlyViewed.slice.ts';
import { DeepPartial } from '@reduxjs/toolkit';

const defaultAsyncReducers: ReducersList = {
  cart: cartReducer,
  modals: modalsReducer,
  shared: sharedReducer,
  user: profileReducer,
  checkout: checkoutReducer,
  filtration: filtrationReducer,
  recentlyViewed: recentlyViewedReducer
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
