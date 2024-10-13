/// <reference types="cypress" />
import { MOCK_USER } from '../../src/utils/constants'

describe('User Details Page', () => {
  const userId = '1';
  beforeEach(() => {
    cy.visit(`/users/${userId}`);
  });
  it('should display user details after successful data fetching', () => {
    // Mock the API call to fetch user details
    cy.intercept('GET', `/users/${userId}`, {
      statusCode: 200,
      body: MOCK_USER,
    }).as('getUser');
    cy.wait('@getUser');
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
