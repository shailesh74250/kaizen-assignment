describe('User Details Page', () => {
    // Test to check if the page displays user details correctly
    it('should display user details correctly when the data is fetched', () => {
      // Mocking API call to fetch a single user with fixture data
      cy.intercept('GET', 'https://dummyjson.com/users', {
        fixture: 'singleUser.json', // mock user data saved as a fixture file
      }).as('getSingleUser');
  
      // Visit the user details page with a mocked user ID
      cy.visit('/users/1'); // Assuming '1' is the user ID in the route
  
      // Wait for the API call to complete
      cy.wait('@getSingleUser');
  
      // Check if the loading spinner is not visible anymore
      cy.get('.loader').should('not.exist');
  
      // Verify user details are displayed correctly
      cy.get('h2').should('contain.text', 'User Details');
      cy.get('p').contains('First Name').should('contain.text', 'John');
      cy.get('p').contains('Last Name').should('contain.text', 'Doe');
      cy.get('p').contains('Email').should('contain.text', 'john.doe@example.com');
      cy.get('p').contains('Phone').should('contain.text', '123-456-7890');
      cy.get('p').contains('Company Name').should('contain.text', 'TechCorp');
      cy.get('p').contains('Company Title').should('contain.text', 'Software Engineer');
      cy.get('p').contains('Company Department').should('contain.text', 'Development');
      cy.get('p').contains('Company Address').should('contain.text', '1234 Main St, Springfield, IL, USA-62704');
    });
  
    // Test to check if the loading spinner is visible while fetching data
    it.skip('should display a loader while data is being fetched', () => {
      // Intercept the API call but delay the response to simulate loading
      cy.intercept('GET', '**/users/*', (req) => {
        req.reply((res) => {
          res.delay(2000).fixture('singleUser.json');
        });
      }).as('getSingleUserWithDelay');
  
      // Visit the user details page
      cy.visit('/users/1');
  
      // The loading spinner should be visible
      cy.get('.loader').should('exist');
  
      // Wait for the API call to complete
      cy.wait('@getSingleUserWithDelay');
  
      // The loading spinner should disappear after the data is fetched
      cy.get('.loader').should('not.exist');
    });
  
    // Test to check if error message is displayed when the API call fails
    it.skip('should display an error message if the API call fails', () => {
      // Simulate a server error with a 500 status code
      cy.intercept('GET', '**/users/*', {
        statusCode: 500,
        body: { error: 'Failed to fetch user' },
      }).as('getSingleUserError');
  
      // Visit the user details page
      cy.visit('/users/1');
  
      // Wait for the API call to complete
      cy.wait('@getSingleUserError');
  
      // The error message should be displayed
      cy.get('div').should('contain.text', 'Error: Failed to fetch user');
    });
  });
  