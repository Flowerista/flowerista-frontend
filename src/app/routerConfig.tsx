import { RouteProps } from 'react-router-dom';
import { CatalogPage } from '../pages/CatalogPage';
import { MainLayout } from '../layouts/MainLayout';
import { DeliveryAndPaymentPage } from '../pages/DeliveryAndPaymentPage';
import { HomePage } from '../pages/HomePage';
import { AboutUs } from '../pages/AboutUs';
import { SecondLayout } from '../layouts/SecondLayout';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { RestoringAccess } from '../pages/RestoringAccess';
import { RestoringAccessSuccess } from '../pages/RestoringAccess/RestoringAccessSuccess/RestoringAccessSuccess';
import { ProductPage } from '../pages/ProductPage';
import { CheckOutPage } from '../pages/CheckOutPage';
import { PasswordRecovery } from '../pages/PasswordRecovery';
import { CheckOutPendingPage } from '../pages/CheckOutPendingPage';
import { CheckOutThanksPage } from '../pages/CheckOutThanksPage';
import { PaymentErrorPage } from '../pages/PaymentErrorPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProfilePage } from '../pages/Profile/index.tsx';

export enum AppRoutes {
  NOT_FOUND = 'not_found',
  Home = 'home',
  Catalog = 'catalog',
  AboutUs = 'about-us',
  Profile = 'profile',
  DeliveryAndPayment = 'delivery-payment',
  Login = 'login',
  Registration = 'registration',
  RestoringAccess = 'restoring-access',
  RestoringAccessSuccess = 'restoring-access/success',
  ProductId = 'product/:productId',
  CheckOut = 'checkout',
  ChangePassword = 'changePassword',
  CheckOutPending = 'capture',
  ThanksYou = 'thanks-you',
  ErrorAfterPayment = 'error-after-payment'
}

export const getRouteHome = () => '/';
export const getRouteAboutUs = () => '/about-us';
export const getRouteDeliveryAndPayment = () => '/delivery-payment';
export const getRouteCatalog = () => '/catalog';
export const getRouteLogin = () => '/login';
export const getRouteRegistration = () => '/registration';
export const getRouteRestoringAccess = () => '/restoring-access';
export const getRouteRestoringAccessSuccess = () => '/restoring-access/success';
export const getRouteProductId = (id: string) => `/product/${id}`;
export const getRouteCheckOut = () => '/checkout';
export const getRouteChangePassword = () => '/changePassword';
export const getRouteCheckOutPending = () => '/capture';
export const getRouteThanksYou = () => '/thanks-you';
export const getRouteErrorAfterPayment = () => '/error-after-payment';
export const getRouteTest = () => '/test';
export const getRouteProfile = () => '/profile';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  // roles?: UserRole[];
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: '/',
  [AppRoutes.Profile]: '/profile',
  [AppRoutes.Catalog]: '/catalog',
  [AppRoutes.AboutUs]: '/about-us',
  [AppRoutes.DeliveryAndPayment]: '/delivery-payment',
  [AppRoutes.Login]: '/login',
  [AppRoutes.Registration]: '/registration',
  [AppRoutes.RestoringAccess]: '/restoring-access',
  [AppRoutes.RestoringAccessSuccess]: '/restoring-access/success',
  [AppRoutes.ProductId]: '/product/:productId',
  [AppRoutes.CheckOut]: '/checkout',
  [AppRoutes.ChangePassword]: '/changePassword',
  [AppRoutes.CheckOutPending]: '/capture',
  [AppRoutes.ThanksYou]: '/thanks-you',
  [AppRoutes.ErrorAfterPayment]: '/error-after-payment',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Catalog]: {
    path: getRouteCatalog(),
    element: (
      <MainLayout>
        <CatalogPage />
      </MainLayout>
    )
  },
  [AppRoutes.Home]: {
    path: getRouteHome(),
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    )
  },
  [AppRoutes.AboutUs]: {
    path: getRouteAboutUs(),
    element: (
      <MainLayout>
        <AboutUs />
      </MainLayout>
    )
  },
  [AppRoutes.DeliveryAndPayment]: {
    path: getRouteDeliveryAndPayment(),
    element: (
      <MainLayout>
        <DeliveryAndPaymentPage />
      </MainLayout>
    )
  },
  [AppRoutes.Login]: {
    path: getRouteLogin(),
    element: (
      <SecondLayout>
        <Login />
      </SecondLayout>
    )
  },
  [AppRoutes.Registration]: {
    path: getRouteRegistration(),
    element: (
      <SecondLayout>
        <Registration />
      </SecondLayout>
    )
  },
  [AppRoutes.RestoringAccess]: {
    path: getRouteRestoringAccess(),
    element: (
      <SecondLayout>
        <RestoringAccess />
      </SecondLayout>
    )
  },
  [AppRoutes.RestoringAccessSuccess]: {
    path: getRouteRestoringAccessSuccess(),
    element: (
      <SecondLayout>
        <RestoringAccessSuccess />
      </SecondLayout>
    )
  },
  [AppRoutes.Profile]: {
    path: getRouteProfile(),
    element: (
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    ),
    authOnly: true
  },
  [AppRoutes.ProductId]: {
    path: getRouteProductId(':productId'),
    element: (
      <MainLayout>
        <ProductPage />
      </MainLayout>
    )
  },
  [AppRoutes.CheckOut]: {
    path: getRouteCheckOut(),
    element: <CheckOutPage />
  },
  [AppRoutes.ChangePassword]: {
    path: getRouteChangePassword(),
    element: (
      <MainLayout>
        <PasswordRecovery />
      </MainLayout>
    )
  },
  [AppRoutes.CheckOutPending]: {
    path: getRouteCheckOutPending(),
    element: <CheckOutPendingPage />
  },
  [AppRoutes.ThanksYou]: {
    path: getRouteThanksYou(),
    element: <CheckOutThanksPage />
  },
  [AppRoutes.ErrorAfterPayment]: {
    path: getRouteErrorAfterPayment(),
    element: <PaymentErrorPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />
  }
};
