import { lazy } from 'react';

export const CheckOutPendingPageAsync = lazy(
  () => import('./CheckOutPendingPage')
);
