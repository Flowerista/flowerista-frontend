import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app/providers/router/ui/AppRouter.tsx';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { PayPalProvider } from './app/providers/PayPalProvider';
import { LocalizationProvider } from './app/providers/LocalizationProvider';
import { StoreProvider } from './app/providers/StoreProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <PayPalProvider>
          <LocalizationProvider>
            <ErrorBoundary>
              <AppRouter />
            </ErrorBoundary>
          </LocalizationProvider>
        </PayPalProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
