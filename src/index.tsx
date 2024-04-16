import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react'
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
import {PayPalScriptOptions} from '@paypal/paypal-js';

const initialOptions: PayPalScriptOptions = {
	clientId: `AYMRNAqU1hK-ZJjdzKouq3jniALaEvtBnGrwNKbMUnAaeULYE1QequUIRimiu3OB0jUEOWaWxQsPeHE_`,
	currency: 'USD',
	intent: 'capture',
};

const root = ReactDOM.createRoot(
	 document.getElementById('root') as HTMLElement,
);
root.render(
	 <>
		 <BrowserRouter>
			 <PayPalScriptProvider options={initialOptions}>
				 <Provider store={store}>
					 <PersistGate loading={null} persistor={persistor}>
						 <LocalizationProvider dateAdapter={AdapterDayjs}>
							 <App/>
						 </LocalizationProvider>
					 </PersistGate>
				 </Provider>
			 </PayPalScriptProvider>
		 </BrowserRouter>
	 </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
