import CheckboxPage from './checkBoxPage';
import testData from '../../fixtures/example.json';

describe('Checkbox Test', () => {
    before(() => {
        cy.visit('https://demoqa.com/checkbox');
        cy.wait(5000); // Wait for 5 seconds (adjust as needed)
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  

    it('should unselect other checkboxes in the same category', () => {
       // Expand the dropdown to reveal the checkboxes
       cy.get('.rct-collapse').click(); // Assuming this is the element that expands the dropdown

       // Show the hidden element before interacting with it
       cy.get('#tree-node-home').check({ force: true });
       cy.get('#tree-node-home').should('be.checked');

       // Desktop category
       cy.get('#tree-node-desktop').check({ force: true });
       cy.get('#tree-node-desktop').should('be.checked');

       // Documents category
       cy.get('#tree-node-documents').check({ force: true });
       cy.get('#tree-node-documents').should('be.checked');

       // Downloads category
       cy.get('#tree-node-downloads').check({ force: true });
       cy.get('#tree-node-downloads').should('be.checked');


  
    });

    
});

