import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPalScriptOptions } from '@paypal/paypal-js';

const initialOptions: PayPalScriptOptions = {
  clientId: `${import.meta.env.VITE_PAYPAL_ID}`,
  currency: 'USD',
  intent: 'capture'
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PayPalScriptProvider options={initialOptions}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <App />
            </LocalizationProvider>
          </PersistGate>
        </Provider>
      </PayPalScriptProvider>
    </BrowserRouter>
  </React.StrictMode>
);
