import { lazy } from 'react';

export const CheckoutThanksPageAsync = lazy(
  () => import('./CheckoutThanksPage.tsx')
);
