class CheckboxPage {
  get homeCheckbox() { return cy.get('#tree-node-home'); }
  get desktopCheckbox() { return cy.get('#tree-node-desktop'); }
  get documentsCheckbox() { return cy.get('#tree-node-documents'); }
  get downloadsCheckbox() { return cy.get('#tree-node-downloads'); }
  get workspaceCheckbox() { return cy.get('#tree-node-workspace'); }
  get officeCheckbox() { return cy.get('#tree-node-office'); }
  get publicCheckbox() { return cy.get('#tree-node-public'); }
  get privateCheckbox() { return cy.get('#tree-node-private'); }
  get classifiedCheckbox() { return cy.get('#tree-node-classified'); }
  get generalCheckbox() { return cy.get('#tree-node-general'); }
  get reactCheckbox() { return cy.get('#tree-node-react'); }
  get angularCheckbox() { return cy.get('#tree-node-angular'); }
  get vueCheckbox() { return cy.get('#tree-node-vue'); }
  get notesCheckbox() { return cy.get('#tree-node-notes'); }
  get commandsCheckbox() { return cy.get('#tree-node-commands'); }
  get wordFileCheckbox() { return cy.get('#tree-node-wordFile'); }
  get excelFileCheckbox() { return cy.get('#tree-node-excelFile'); }

  checkCheckbox(checkbox) {
      checkbox.check({ force: true });
  }

  uncheckCheckbox(checkbox) {
      checkbox.uncheck({ force: true });
  }

  isCheckboxChecked(checkbox) {
      return checkbox.should('be.checked');
  }

  isCheckboxUnchecked(checkbox) {
      return checkbox.should('not.be.checked');
  }
}

export default new CheckboxPage();
