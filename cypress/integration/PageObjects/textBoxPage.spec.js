import TextBoxPage from "./textBoxPage.js";
const testData = require("../../fixtures/example.json");

describe("Text Box Page Test", () => {
  const textBoxPage = new TextBoxPage();

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


  it("should fill out the text box form", () => {
    cy.visit("https://demoqa.com/text-box");
    textBoxPage.fillFullName(testData.textBoxData.fullName);
    textBoxPage.fillEmail(testData.textBoxData.email);
    textBoxPage.fillCurrentAddress(testData.textBoxData.currentAddress);
    textBoxPage.fillPermanentAddress(testData.textBoxData.permanentAddress);
    // Add assertions and further actions as needed
  });
});