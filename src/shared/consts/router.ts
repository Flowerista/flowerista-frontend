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
