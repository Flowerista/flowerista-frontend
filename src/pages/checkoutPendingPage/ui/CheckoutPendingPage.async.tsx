import { lazy } from 'react';

export const CheckoutPendingPageAsync = lazy(
  () => import('./CheckoutPendingPage.tsx')
);
