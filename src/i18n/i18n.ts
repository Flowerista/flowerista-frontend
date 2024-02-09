import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import {Language} from './enums';
import {headerUA} from './ua/header/header';
import {headerEn} from './en/header/header';
import {footerUA} from './ua/footer/footer';
import {footerEn} from './en/footer/footer';
import {MainPageUa} from './ua/mainPage/mainPage';
import {MainPageEn} from './en/mainPage/mainPage';
import {aboutUsUa} from './ua/aboutUs/aboutUs';
import {aboutUsEn} from './en/aboutUs/aboutUs';
import {deliveryAndPaymentEn} from './en/deliveryAndPayment/deliveryAndPayment';
import {deliveryAndPaymentUa} from './ua/deliveryAndPayment/deliveryAndPayment';
import {notFoundPageUa} from './ua/404/notFoundPage';
import {notFoundPageEn} from './en/404/notFoundPage';
import {CatalogPageUa} from './ua/catalog/catalogPage';
import {CatalogPageEn} from './en/catalog/catalogPage';
import {cartPageUa} from './ua/cart/cartPage';
import {cartPageEn} from './en/cart/cartPage';
import {registerPageEn} from './en/registration/registerPage';
import {productPageUa} from './ua/product/productPage';
import {productPageEn} from './en/product/productPage';
import {registerPageUa} from './ua/registration/registerPage';
import {loginPageEn} from './en/login/login';
import {loginPageUa} from './ua/login/login';
import {restoringEn} from './en/restoring/restoring';
import {restoringUa} from './ua/restoring/restoring';
import {profileUa} from './ua/profile/profile';
import {profileEn} from './en/profile/profile';
import {checkoutPageEn} from './en/checkout/checkout';
import {checkoutPageUa} from './ua/checkout/checkout';


const resources = {
	[Language.EN]: {
		translation: {
			header: headerEn,
			footer: footerEn,
			mainPage: MainPageEn,
			aboutUs: aboutUsEn,
			deliveryAndPayment: deliveryAndPaymentEn,
			notFoundPage: notFoundPageEn,
			catalog: CatalogPageEn,
			cart: cartPageEn,
			register: registerPageEn,
			product: productPageEn,
			login: loginPageEn,
			restoring: restoringEn,
			profile: profileEn,
			checkout: checkoutPageEn,
		},
	},
	[Language.UA]: {
		translation: {
			header: headerUA,
			footer: footerUA,
			mainPage: MainPageUa,
			aboutUs: aboutUsUa,
			deliveryAndPayment: deliveryAndPaymentUa,
			notFoundPage: notFoundPageUa,
			catalog: CatalogPageUa,
			cart: cartPageUa,
			register: registerPageUa,
			product: productPageUa,
			login: loginPageUa,
			restoring: restoringUa,
			profile: profileUa,
			checkout: checkoutPageUa,
		},
	},
};

i18n
	 .use(initReactI18next)
	 .use(I18nextBrowserLanguageDetector)
	 .init({
		 resources,
		 lng: Language.EN,
		 fallbackLng: Language.EN,
		 interpolation: {
			 escapeValue: false,
		 },
	 });

export default i18n;
