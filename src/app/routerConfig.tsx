import {RouteProps} from 'react-router-dom';
import {CatalogPage} from '../pages/CatalogPage';
import {MainLayout} from '../layouts/MainLayout';
import React from 'react';
import {DeliveryAndPaymentPage} from '../pages/DeliveryAndPaymentPage';
import {HomePage} from '../pages/HomePage';
import {AboutUs} from '../pages/AboutUs';
import {SecondLayout} from '../layouts/SecondLayout';
import {Login} from '../pages/Login';
import {Registration} from '../pages/Registration';
import {RestoringAccess} from '../pages/RestoringAccess';
import {RestoringAccessSuccess} from '../pages/RestoringAccess/RestoringAccessSuccess/RestoringAccessSuccess';
import {ProfileLayout} from '../layouts/ProfileLayout';
import {PersonalInformation} from '../pages/Profile/PersonalInformation';
import {ProfileOrders} from '../pages/Profile/Orders';
import {Wishlist} from '../pages/Profile/Wishlist';
import {ProductPage} from '../pages/ProductPage';
import {CheckOutPage} from '../pages/CheckOutPage';
import {PasswordRecovery} from '../pages/PasswordRecovery';
import {CheckOutPendingPage} from '../pages/CheckOutPendingPage';
import {CheckOutThanksPage} from '../pages/CheckOutThanksPage';
import {PaymentErrorPage} from '../pages/PaymentErrorPage';
import {NotFoundPage} from '../pages/NotFoundPage';


export enum AppRoutes {
	NOT_FOUND = 'not_found',
	Home = 'home',
	Catalog = 'catalog',
	AboutUs = 'about-us',
	DeliveryAndPayment = 'delivery-payment',
	Login = 'login',
	Registration = 'registration',
	RestoringAccess = 'restoring-access',
	RestoringAccessSuccess = 'restoring-access/success',
	PersonalInformation = 'profile/personal-information',
	Orders = 'profile/orders',
	Wishlist = 'profile/wishlist',
	ProductId = 'product/:productId',
	CheckOut = 'checkout',
	ChangePassword = 'changePassword',
	CheckOutPending = 'capture',
	ThanksYou = 'thanks-you',
	ErrorAfterPayment = 'error-after-payment',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.Home]: '/',
	[AppRoutes.Catalog]: '/catalog',
	[AppRoutes.AboutUs]: '/about-us',
	[AppRoutes.DeliveryAndPayment]: '/delivery-payment',
	[AppRoutes.Login]: '/login',
	[AppRoutes.Registration]: '/registration',
	[AppRoutes.RestoringAccess]: '/restoring-access',
	[AppRoutes.RestoringAccessSuccess]: '/restoring-access/success',
	[AppRoutes.PersonalInformation]: '/profile/personal-information',
	[AppRoutes.Orders]: '/profile/orders',
	[AppRoutes.Wishlist]: '/profile/wishlist',
	[AppRoutes.ProductId]: '/product/:productId',
	[AppRoutes.CheckOut]: '/checkout',
	[AppRoutes.ChangePassword]: '/changePassword',
	[AppRoutes.CheckOutPending]: '/capture',
	[AppRoutes.ThanksYou]: '/thanks-you',
	[AppRoutes.ErrorAfterPayment]: '/error-after-payment',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.Catalog]: {
		path: RoutePath.catalog,
		element: <MainLayout><CatalogPage/></MainLayout>,
	},
	[AppRoutes.Home]: {
		path: RoutePath.home,
		element: <MainLayout><HomePage/></MainLayout>,
	},
	[AppRoutes.AboutUs]: {
		path: RoutePath['about-us'],
		element: <MainLayout><AboutUs/></MainLayout>,
	},
	[AppRoutes.DeliveryAndPayment]: {
		path: RoutePath['delivery-payment'],
		// eslint-disable-next-line react/jsx-no-undef
		element: <MainLayout><DeliveryAndPaymentPage/></MainLayout>,
	},
	[AppRoutes.Login]: {
		path: RoutePath.login,
		element: <SecondLayout><Login/></SecondLayout>,
	},
	[AppRoutes.Registration]: {
		path: RoutePath.registration,
		element: <SecondLayout><Registration/></SecondLayout>,
	},
	[AppRoutes.RestoringAccess]: {
		path: RoutePath['restoring-access'],
		element: <SecondLayout><RestoringAccess/></SecondLayout>,
	},
	[AppRoutes.RestoringAccessSuccess]: {
		path: RoutePath['restoring-access/success'],
		element: <SecondLayout><RestoringAccessSuccess/></SecondLayout>,
	},
	[AppRoutes.PersonalInformation]: {
		path: RoutePath['profile/personal-information'],
		element: <ProfileLayout pageName="Profile"><PersonalInformation/></ProfileLayout>,
	},
	[AppRoutes.Orders]: {
		path: RoutePath['profile/orders'],
		element: <ProfileLayout pageName="Orders history"><ProfileOrders></ProfileOrders></ProfileLayout>,
	},
	[AppRoutes.Wishlist]: {
		path: RoutePath['profile/wishlist'],
		element: <ProfileLayout pageName="Wishlist"><Wishlist></Wishlist></ProfileLayout>,
	},
	[AppRoutes.ProductId]: {
		path: RoutePath['product/:productId'],
		element: <MainLayout><ProductPage/></MainLayout>,
	},
	[AppRoutes.CheckOut]: {
		path: RoutePath.checkout,
		element: <CheckOutPage/>,
	},
	[AppRoutes.ChangePassword]: {
		path: RoutePath.changePassword,
		element: <MainLayout><PasswordRecovery/></MainLayout>,
	},
	[AppRoutes.CheckOutPending]: {
		path: RoutePath.capture,
		element: <CheckOutPendingPage/>,
	},
	[AppRoutes.ThanksYou]: {
		path: RoutePath['thanks-you'],
		element: <CheckOutThanksPage/>,
	},
	[AppRoutes.ErrorAfterPayment]: {
		path: RoutePath['error-after-payment'],
		element: <PaymentErrorPage/>,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage/>,
	},
};
