import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { Language } from './enums.ts';
import { headerUA } from './ua/header/header.ts';
import { headerEn } from './en/header/header.ts';
import { footerUA } from './ua/footer/footer.ts';
import { footerEn } from './en/footer/footer.ts';
import { MainPageUa } from './ua/mainPage/mainPage.ts';
import { MainPageEn } from './en/mainPage/mainPage.ts';
import { aboutUsUa } from './ua/aboutUs/aboutUs.ts';
import { aboutUsEn } from './en/aboutUs/aboutUs.ts';
import { deliveryAndPaymentEn } from './en/deliveryAndPayment/deliveryAndPayment.ts';
import { deliveryAndPaymentUa } from './ua/deliveryAndPayment/deliveryAndPayment.ts';
import { notFoundPageUa } from './ua/404/notFoundPage.ts';
import { notFoundPageEn } from './en/404/notFoundPage.ts';
import { CatalogPageUa } from './ua/catalog/catalogPage.ts';
import { CatalogPageEn } from './en/catalog/catalogPage.ts';
import { cartPageUa } from './ua/cart/cartPage.ts';
import { cartPageEn } from './en/cart/cartPage.ts';
import { registerPageEn } from './en/registration/registerPage.ts';
import { productPageUa } from './ua/product/productPage.ts';
import { productPageEn } from './en/product/productPage.ts';
import { registerPageUa } from './ua/registration/registerPage.ts';
import { loginPageEn } from './en/login/login.ts';
import { loginPageUa } from './ua/login/login.ts';
import { restoringEn } from './en/restoring/restoring.ts';
import { restoringUa } from './ua/restoring/restoring.ts';
import { profileUa } from './ua/profile/profile.ts';
import { profileEn } from './en/profile/profile.ts';
import { checkoutPageEn } from './en/checkout/checkout.ts';
import { checkoutPageUa } from './ua/checkout/checkout.ts';
import { inputsEn } from './en/inputs/inputs.ts';
import { inputsUa } from './ua/inputs';
import { MobileFiltersEn } from './en/mobileFilters/mobileFilters.ts';
import { MobileFiltersUa } from './ua/mobileFilters/mobileFilters.ts';
import { errorPageEn } from './en/errorPage/errorPageEn.ts';
import { errorPageUa } from './ua/errorPage/errorPageUa.ts';
import { errorPaymentPageUa } from './ua/errorPaymentPage/errorPaymentPageUa.ts';
import { errorPaymentPageEn } from './en/errorPaymentPage/errorPaymentPageEn.ts';
import { thanksPageEn } from './en/thanksPage/thanksPageEn.ts';
import { thanksPageUA } from './ua/thanksPage/thanksPageUA.ts';
import { pendingUa } from './ua/pending/pendingUa.ts';
import { pendingEn } from './en/pending/pendingEn.ts';

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
      inputs: inputsEn,
      mobileFilters: MobileFiltersEn,
      error: errorPageEn,
      errorPayment: errorPaymentPageEn,
      thanks: thanksPageEn,
      pending: pendingEn
    }
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
      inputs: inputsUa,
      mobileFilters: MobileFiltersUa,
      error: errorPageUa,
      errorPayment: errorPaymentPageUa,
      thanks: thanksPageUA,
      pending: pendingUa
    }
  }
};

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    lng: Language.EN,
    fallbackLng: Language.EN,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
