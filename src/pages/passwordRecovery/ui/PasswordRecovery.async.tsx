import { lazy } from 'react';

export const PasswordRecoveryAsync = lazy(
  () => import('./PasswordRecovery.tsx')
);
