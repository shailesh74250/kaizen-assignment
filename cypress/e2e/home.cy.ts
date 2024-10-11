// cypress/integration/home.spec.ts
describe('Home Page', () => {
  it('should load the home page and check if the title exists', () => {
    // Visit the home page
    cy.visit('/');

    // Assert the title
    cy.contains('Kaizen Assignment'); // Replace this with a valid text or element on your homepage
  });
});
  