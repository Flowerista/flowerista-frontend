import { FC, ReactNode } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPalScriptOptions } from '@paypal/paypal-js';

export interface IPayPalProvider {
  children: ReactNode;
}

const initialOptions: PayPalScriptOptions = {
  clientId: `${import.meta.env.VITE_PAYPAL_ID}`,
  currency: 'USD',
  intent: 'capture'
};

export const PayPalProvider: FC<IPayPalProvider> = ({ children }) => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};
