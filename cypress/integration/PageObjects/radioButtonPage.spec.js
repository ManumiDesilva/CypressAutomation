import RadioButtonPage from './radioButtonPage';
import testData from '../../fixtures/example.json';

describe('Radio Button Test', () => {
    before(() => {
        cy.visit('https://demoqa.com/radio-button');
        cy.wait(5000); // Wait for 5 seconds (adjust as needed)
    });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });


    it('should select only one radio button at a time', () => {
        RadioButtonPage.clickYesRadio();
        cy.get(testData.radioButton.yes).should('be.checked');

        RadioButtonPage.clickImpressiveRadio();
        cy.get(testData.radioButton.impressive).should('be.checked');

        RadioButtonPage.clickNoRadio();
        cy.get(testData.radioButton.no).should('not.be.checked');
    });

    it('should have "No" radio button disabled', () => {
        RadioButtonPage.isNoRadioDisabled();
        cy.get(testData.radioButton.no).should('not.be.checked');
    });
});
