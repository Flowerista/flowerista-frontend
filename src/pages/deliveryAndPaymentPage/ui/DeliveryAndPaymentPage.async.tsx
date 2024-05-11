import { lazy } from 'react';

export const DeliveryAndPaymentPageAsync = lazy(
  () => import('./DeliveryAndPaymentPage.tsx')
);
