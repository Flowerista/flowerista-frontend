import Cookies from 'js-cookie';

export const updateProfilePersonalInformation = (
  firstname: string,
  lastname: string
) => {
  cy.getByTestId('PersonalInformationForm.name').clear().type(firstname);
  cy.getByTestId('PersonalInformationForm.lastName').clear().type(lastname);
  cy.getByTestId('PersonalInformationForm.button').click();
};
export const updateProfileAddress = (
  city: string,
  street: string,
  house: string,
  entrance: string,
  flat: string
) => {
  cy.getByTestId('profile.address.city').clear().type(city);
  cy.getByTestId('profile.address.street').clear().type(street);
  cy.getByTestId('profile.address.house').clear().type(house);
  cy.getByTestId('profile.address.entrance').clear().type(entrance);
  cy.getByTestId('profile.address.flat').clear().type(flat);
  cy.getByTestId('profile.address.button').click();
};
export const resetProfilePersonalInformation = () => {
  const token = Cookies.get('token');
  return cy.request({
    method: 'PATCH',
    url: `https://floverista-011daa2eb6c3.herokuapp.com/api/user/changePersonalInfo`,
    headers: { Authorization: `Bearer ${token}` },
    body: {
      firstName: 'Ігор',
      lastName: 'Вітрикуш'
    }
  });
};
export const resetProfileAddress = () => {
  const token = Cookies.get('token');
  return cy.request({
    method: 'PATCH',
    url: `https://floverista-011daa2eb6c3.herokuapp.com/api/user/changeAddress`,
    headers: { Authorization: `Bearer ${token}` },
    body: {
      city: 'Київ',
      street: 'Княгині Ольги',
      house: '14',
      entrance: '1',
      flat: '1'
    }
  });
};
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      resetProfilePersonalInformation(): Chainable<void>;

      updateProfilePersonalInformation(
        firstname: string,
        lastname: string
      ): Chainable<void>;

      updateProfileAddress(
        city: string,
        street: string,
        house: string,
        entrance: string,
        flat: string
      ): Chainable<void>;

      resetProfileAddress(): Chainable<void>;
    }
  }
}
