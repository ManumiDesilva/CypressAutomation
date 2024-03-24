class TextBoxPage {
    fillFullName(value) {
      cy.get("#userName").type(value);
    }
  
    fillEmail(value) {
      cy.get("#userEmail").type(value);
    }
  
    fillCurrentAddress(value) {
      cy.get("#currentAddress").type(value);
    }
  
    fillPermanentAddress(value) {
      cy.get("#permanentAddress").type(value);
    }
  }
  
  export default TextBoxPage;