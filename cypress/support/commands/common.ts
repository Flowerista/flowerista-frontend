import { selectByTestId } from '../../helpers/selectByTestId';
import { AuthResponseInterface } from '../../../src/pages/login/model/types/AuthResponseInterface.ts';
import Cookies from 'js-cookie';

export const login = (
  email: string = 'daktilggwp@gmail.com',
  password: string = 'Z2C55B4G@a'
) => {
  return cy
    .request({
      method: 'POST',
      url: 'https://floverista-011daa2eb6c3.herokuapp.com/api/auth/authenticate',
      body: {
        email,
        password
      }
    })
    .then(({ body }) => {
      window.localStorage.setItem('user', JSON.stringify(body.user));
      Cookies.set('token', body.access_token);
      return body.user;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(
        email?: string,
        password?: string
      ): Chainable<AuthResponseInterface>;

      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
