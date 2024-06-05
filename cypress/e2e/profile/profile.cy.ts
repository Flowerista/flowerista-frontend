describe('User accesses the profile page', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.login().then(() => {
      cy.visit(`profile`);
    });
  });

  afterEach(() => {
    cy.resetProfileAddress();
    cy.resetProfilePersonalInformation();
  });

  it('And the profile is successfully uploaded', () => {
    cy.getByTestId('PersonalInformationForm.name').should('have.value', 'Ігор');
  });

  it('User edits personal information', () => {
    const newName = 'new';
    const newLastname = 'lastname';
    cy.updateProfilePersonalInformation(newName, newLastname);
    cy.getByTestId('PersonalInformationForm.name').should(
      'have.value',
      newName
    );
    cy.getByTestId('PersonalInformationForm.lastName').should(
      'have.value',
      newLastname
    );
  });
  it('User edits address information', () => {
    const city = 'Львів';
    const street = 'Степана Бандери';
    const house = '22';
    const entrance = '1';
    const flat = '4';
    cy.updateProfileAddress(city, street, house, entrance, flat);
    cy.getByTestId('profile.address.city').should('have.value', city);
    cy.getByTestId('profile.address.street').should('have.value', street);
    cy.getByTestId('profile.address.house').should('have.value', house);
    cy.getByTestId('profile.address.entrance').should('have.value', entrance);
    cy.getByTestId('profile.address.flat').should('have.value', flat);
  });
});
