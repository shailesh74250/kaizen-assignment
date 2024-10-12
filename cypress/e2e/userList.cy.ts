describe('Users List Component E2E Test Cases', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://dummyjson.com/users', { fixture: 'users.json' }).as('fetchUsers');
    cy.visit('/users');
  });

  it('should display the user list', () => {
    cy.wait('@fetchUsers');
    cy.get('table th').should('contain.text', 'First Name');
    cy.get('table th').should('contain.text', 'Last Name');
    cy.get('table th').should('contain.text', 'Email');
    cy.get('table th').should('contain.text', 'Phone');
    cy.get('table th').should('contain.text', 'Company Name');
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });

  it('should navigate to user details page when a row is clicked', () => {
    cy.wait('@fetchUsers');
    cy.get('table tbody tr').first().click();
    cy.url().should('include', '/users/1');
  });

  it('should filter the user list when searching', () => {
    cy.wait('@fetchUsers');
    cy.get('[data-testid="search-input"]').type('Emily');
    cy.get('[data-testid="Search-btn"]').click();
    cy.get('table tbody tr').should('have.length', 2);
    cy.get('table tbody tr').first().should('contain.text', 'Emily');
  });
});
