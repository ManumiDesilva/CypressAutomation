class RadioButtonPage {
    get yesRadio() { return cy.get('#yesRadio'); }
    get impressiveRadio() { return cy.get('#impressiveRadio'); }
    get noRadio() { return cy.get('#noRadio'); }

    clickYesRadio() {
        this.yesRadio.click({ force: true });
    }

    clickImpressiveRadio() {
        this.impressiveRadio.click({ force: true });
    }

    clickNoRadio() {
        this.noRadio.click({ force: true });
    }

    isNoRadioDisabled() {
        return this.noRadio.should('be.disabled');
    }
}

export default new RadioButtonPage();
