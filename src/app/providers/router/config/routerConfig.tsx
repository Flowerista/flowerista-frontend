import { CatalogPage } from '../../../../pages/catalogPage';
import { MainLayout } from '../../../../shared/layouts/MainLayout';
import { DeliveryAndPaymentPage } from '../../../../pages/deliveryAndPaymentPage';
import { HomePage } from '../../../../pages/homePage';
import { AboutUs } from '../../../../pages/aboutUs';
import { SecondLayout } from '../../../../shared/layouts/SecondLayout';
import { Login } from '../../../../pages/login';
import { Registration } from '../../../../pages/registration';
import { RestoringAccess } from '../../../../pages/restoringAccess';
import { ProductPage } from '../../../../pages/productPage';
import { CheckOutPage } from '../../../../pages/checkoutPage';
import { PasswordRecovery } from '../../../../pages/passwordRecovery';
import { CheckOutPendingPage } from '../../../../pages/checkoutPendingPage';
import { CheckOutThanksPage } from '../../../../pages/checkoutThanksPage';
import { PaymentErrorPage } from '../../../../pages/paymentErrorPage';
import { NotFoundPage } from '../../../../pages/notFoundPage';
import { ProfilePage } from '../../../../pages/profile';
import {
  AppRoutes,
  getRouteAboutUs,
  getRouteCatalog,
  getRouteChangePassword,
  getRouteCheckOut,
  getRouteCheckOutPending,
  getRouteDeliveryAndPayment,
  getRouteErrorAfterPayment,
  getRouteHome,
  getRouteLogin,
  getRouteProductId,
  getRouteProfile,
  getRouteRegistration,
  getRouteRestoringAccess,
  getRouteRestoringAccessSuccess,
  getRouteThanksYou
} from '../../../../shared/consts/router.ts';
import { AppRoutesProps } from '../../../../shared/types/router.ts';
import { RestoringAccessSuccess } from '../../../../pages/restoringAccessSuccess';

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
