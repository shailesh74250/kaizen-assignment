/// <reference types="cypress" />

describe('User Details Page', () => {
  const userId = '1'; // Replace this with a real user ID from your mock or seed data

  beforeEach(() => {
    // Assuming the app uses React Router and you can visit the user details page using /users/:id
    cy.visit(`/users/${userId}`);
  });

  it('should display user details after successful data fetching', () => {
    // Mock the API call to fetch user details
    cy.intercept('GET', `/users/${userId}`, {
      statusCode: 200,
      body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        company: {
          name: 'Tech Corp',
          title: 'Software Engineer',
          department: 'Engineering',
          address: {
            address: '123 Main St',
            city: 'New York',
            state: 'NY',
            country: 'USA',
            postalCode: '10001',
          }
        }
      }
    }).as('getUser');

    // Wait for the API call and check if user details are rendered correctly
    cy.wait('@getUser');

    // Check if the user details are correctly displayed
    cy.get('h2').should('contain.text', 'User Details');
    cy.get('p').contains('First Name: John');
    cy.get('p').contains('Last Name: Doe');
    cy.get('p').contains('Email: john.doe@example.com');
    cy.get('p').contains('Phone: 123-456-7890');
    cy.get('p').contains('Company Name: Tech Corp');
    cy.get('p').contains('Company Title: Software Engineer');
    cy.get('p').contains('Company Department: Engineering');
    cy.get('p').contains('Company Address: 123 Main St, New York, NY, USA-10001');
  });
});
