import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';
import { componentRender } from '../../../../shared/lib/test/componentRender/componentRender.tsx';
import {
  getRouteAboutUs,
  getRouteChangePassword,
  getRouteCheckOutPending,
  getRouteDeliveryAndPayment,
  getRouteErrorAfterPayment,
  getRouteProfile,
  getRouteRegistration,
  getRouteRestoringAccess,
  getRouteRestoringAccessSuccess,
  getRouteThanksYou
} from '../../../../shared/consts/router.ts';

describe('app/router/AppRouter', () => {
  test('The page should render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAboutUs()
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/asfasfasfasf'
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Redirect unauthorized user to login page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile()
    });

    const page = await screen.findByTestId('LoginPage');
    expect(page).toBeInTheDocument();
  });

  // test('auth with user', async () => {
  // need mock rtk-query i am so lazy for it maybe in future
  // 	componentRender(<AppRouter/>, {
  // 		route: getRouteProfile(),
  // 		initialState: {
  // 			user: {
  // 				user: {},
  // 			},
  // 		},
  // 	});
  //
  // 	const page = await screen.findByTestId('ProfilePage');
  // 	console.log(page)
  // 	expect(page).toBeInTheDocument();
  // });

  //!!!dose`nt work correctly needs to mock and resolve node_modules

  // test('The page should render HomePage', async () => {
  // 	componentRender(<AppRouter/>, {
  // 		route: getRouteHome(),
  // 	});
  //
  // 	const page = await screen.findByTestId('HomePage');
  // 	expect(page).toBeInTheDocument();
  // });

  // test('The page should render CatalogPage', async () => {
  // 	componentRender(<AppRouter/>, {
  // 		route: getRouteCatalog(),
  // 	});
  //
  // 	const page = await screen.findByTestId('CatalogPage');
  // 	expect(page).toBeInTheDocument();
  // });

  // test('The page should render CheckoutPage', async () => {
  // 	componentRender(<AppRouter/>, {
  // 		route: getRouteCheckOut(),
  // 	});
  //
  // 	const page = await screen.findByTestId('CheckoutPage');
  // 	expect(page).toBeInTheDocument();
  // });

  // test('The page should render ProductPage', async () => {
  // 	componentRender(<AppRouter/>, {
  // 		route: getRouteProductId('1'),
  // 	});
  //
  // 	const page = await screen.findByTestId('ProductPage');
  // 	expect(page).toBeInTheDocument();
  // });

  test('The page should render DeliveryAndPaymentPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteDeliveryAndPayment()
    });

    const page = await screen.findByTestId('DeliveryAndPaymentPage');
    expect(page).toBeInTheDocument();
  });

  test('The page should render CheckoutPendingPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteCheckOutPending()
    });

    const page = await screen.findByTestId('CheckoutPendingPage');
    expect(page).toBeInTheDocument();
  });

  test('The page should render CheckoutThanksPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteThanksYou()
    });

    const page = await screen.findByTestId('CheckoutThanksPage');
    expect(page).toBeInTheDocument();
  });

  test('The page should render PasswordRecoveryPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteChangePassword()
    });

    const page = await screen.findByTestId('PasswordRecoveryPage');
    expect(page).toBeInTheDocument();
  });

  test('The page should render PaymentErrorPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteErrorAfterPayment()
    });

    const page = await screen.findByTestId('PaymentErrorPage');
    expect(page).toBeInTheDocument();
  });

  test('The page should render RegistrationPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteRegistration()
    });

    const page = await screen.findByTestId('RegistrationPage');
    expect(page).toBeInTheDocument();
  });
  test('The page should render RegistrationAccessPage', async () => {
    componentRender(<AppRouter />, {
      route: getRouteRestoringAccess()
    });

    const page = await screen.findByTestId('RegistrationAccessPage');
    expect(page).toBeInTheDocument();
  });
  test('The page should render RestoringAccessSuccess', async () => {
    componentRender(<AppRouter />, {
      route: getRouteRestoringAccessSuccess()
    });

    const page = await screen.findByTestId('RestoringAccessSuccess');
    expect(page).toBeInTheDocument();
  });
});
