import { selectByTestId } from '../helpers/selectByTestId.ts';

describe('Routing', () => {
  describe('User doesn`t auth', () => {
    it('Route to HomePage', () => {
      cy.visit('/');
      cy.get(selectByTestId('HomePage')).should('exist');
    });
    it('Route to ProfilePage', () => {
      cy.visit('/profile');
      cy.get(selectByTestId('LoginPage')).should('exist');
    });
    it('Route doesn`t exist ', () => {
      cy.visit('/fasfasfasf');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
    it('Route to CatalogPage ', () => {
      cy.visit('/catalog');
      cy.get(selectByTestId('CatalogPage')).should('exist');
    });
    it('Route to CheckoutPage ', () => {
      cy.visit('/checkout');
      cy.get(selectByTestId('CheckoutPage')).should('exist');
    });
    it('Route to RegisterPage ', () => {
      cy.visit('/registration');
      cy.get(selectByTestId('RegistrationPage')).should('exist');
    });
    it('Route to AboutUsPage ', () => {
      cy.visit('/about-us');
      cy.get(selectByTestId('AboutPage')).should('exist');
    });
    it('Route to DeliveryAndPaymentPage ', () => {
      cy.visit('/delivery-payment');
      cy.get(selectByTestId('DeliveryAndPaymentPage')).should('exist');
    });
    it('Route to RegistrationAccessPage ', () => {
      cy.visit('/restoring-access');
      cy.get(selectByTestId('RegistrationAccessPage')).should('exist');
    });
    it('Route to RestoringAccessSuccess ', () => {
      cy.visit('/restoring-access/success');
      cy.get(selectByTestId('RestoringAccessSuccess')).should('exist');
    });
    it('Route to PasswordRecoveryPage ', () => {
      cy.visit('/changePassword');
      cy.get(selectByTestId('PasswordRecoveryPage')).should('exist');
    });
    it('Route to CheckoutPendingPage ', () => {
      cy.visit('/capture');
      cy.get(selectByTestId('CheckoutPendingPage')).should('exist');
    });
    it('Route to CheckoutThanksPage ', () => {
      cy.visit('/thanks-you');
      cy.get(selectByTestId('CheckoutThanksPage')).should('exist');
    });
    it('Route to PaymentErrorPage ', () => {
      cy.visit('/error-after-payment');
      cy.get(selectByTestId('PaymentErrorPage')).should('exist');
    });
    it('Route to ProductPage ', () => {
      cy.visit('/product/1');
      cy.get(selectByTestId('ProductPage')).should('exist');
    });
  });
  describe('User Authorized', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Navigates to the profile page', () => {
      cy.visit('/profile');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Navigates to the checkout page', () => {
      cy.visit('/checkout');
      cy.get(selectByTestId('CheckoutPage')).should('exist');
    });
  });
});
